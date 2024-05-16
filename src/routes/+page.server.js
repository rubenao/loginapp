export async function load({cookies}){
    const cookie = cookies.get('session')

    /*const userNotes = async () => {
        const res = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:KcOdzVUU/todo' , {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie}`}
          })
        if (!res.ok) {
            throw new Error("Failed to fetch user data");
          }
        return await res.json()
        
        };*/

    const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:k_bg5U-q/auth/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie}`
          }
        });
    
    if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }
    const user = await response.json()

    const userNotes = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:KcOdzVUU/get_notes_user?user_id=${user.id}` , {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookie}`
      }

    })
    const notas = await userNotes.json()

    if (!userNotes.ok) {
      throw new Error("Failed to fetch user data");
      
    }
    
    return {
        notas, user
    }

}