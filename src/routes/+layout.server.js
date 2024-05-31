import { redirect } from "@sveltejs/kit";

export async function load({cookies}){
    const cookie = cookies.get('session')

    const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:k_bg5U-q/auth/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie}`
          }
        });
    
    if (!response.ok) {
            console.log("Failed to fetch user data")
            
          }
    const user = await response.json()
    console.log(user)

    return {
      user, cookie
    }
}

/*export const actions = {
    logout: async({request, cookies})=>{
        //const formData = await request.formData()
        const cookie = cookies.delete('session', {path: '/'})
    
        redirect(303, '/login')
    
      }
}*/