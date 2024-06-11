import { redirect } from "@sveltejs/kit";

export async function load({cookies}){
    const cookie = cookies.get('session')

    const response = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:2FhYSCVF/auth/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie}`
          }
        });
    
    if (!response.ok) {
            console.log("No se pudo obtener la data del usuario desde layout.server.js")
            
          }
    const user = await response.json()
    //console.log(user)

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