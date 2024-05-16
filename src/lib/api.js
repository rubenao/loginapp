export const userNotes = async () => {
    const res = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:KcOdzVUU/todo' , {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookie}`}
      })

      return await res.json()
  

    };