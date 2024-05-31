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
          console.log(response)
          throw new Error("No se pudo obtener la info del usuario");
          
        }
  const user = await response.json()

  const totalpalabras = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:Vh8a7tTw/totales_palabras?user_id=${user.id}` , {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookie}`
    }

  })
  const resultado = await totalpalabras.json()

  if (!totalpalabras.ok) {
    throw new Error("No se pudo obtener el total de palabras");
    
  }


  return {
    user, resultado
  }




  

}