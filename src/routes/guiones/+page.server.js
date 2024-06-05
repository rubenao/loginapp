import { fail, redirect } from '@sveltejs/kit';

export async function load({cookies,event, locals}){
  const cookie = cookies.get('session')
  console.log(locals)

  const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:k_bg5U-q/auth/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookie}`
        }
      });
  
  if (!response.ok) { 
          console.log(response)
          throw new Error("No se pudo obtener la info del usuario");
          
        }
  const user = await response.json()

  const userGuiones = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:kxKm5VLi/get_guiones_user?user_id=${user.id}` , {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookie}`
    }

  })
  const notas = await userGuiones.json()

  if (!userGuiones.ok) {
    throw new Error("No se pudo extraer los guiones del usuario");
    
  }
  
  return {
      notas, 
      user,
    
  }

}