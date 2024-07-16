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
          console.log(response)
          throw new Error("No se pudo obtener la info del usuario");
          
        }
  const user = await response.json()
  const id = user.id
  console.log(id)

  const verificacion_fechas_palabras = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:ginKV_Kk/verificacion_fechas_palabras', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user_id:id})
});

const resultado2= await verificacion_fechas_palabras.json()
console.log(resultado2)

  const totalpalabras = await fetch(`https://xksj-cccl-hafb.n7d.xano.io/api:18Sx1eqv/totales_palabras?user_id=${user.id}`
     , {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookie}`
    }

  })
  const resultado = await totalpalabras.json()
  console.log(resultado)

  if (!totalpalabras.ok) {
    throw new Error("No se pudo obtener el total de palabras");
    
  }


  return {
    user,resultado, resultado2
  }




  

}

export const actions = {

  suscribir: async({request, cookies}) =>{

    const cookie = cookies.get('session')

    const responseUser = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:2FhYSCVF/auth/me', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie}`
            }
        });
    
    if (!responseUser.ok) {
            throw new Error("Failed to fetch user data");
        }

    const user = await responseUser.json()
    const id = user.id
    const email = user.email
    const nombre = user.name

    //Validación de palabras

    const checkout = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:_XMYlbgZ/peticion', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id:id, email, nombre})
    });

    const checkoutresponse = await checkout.json()
    console.log(checkoutresponse)
    const link = checkoutresponse.link
    console.log(link)

    if (checkout.ok) {

      redirect(303, link)
      
    }

    
    },
    suscribir_2: async({request, cookies}) =>{

      const cookie = cookies.get('session')
  
      const responseUser = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:2FhYSCVF/auth/me', {
              method: 'GET',
              headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${cookie}`
              }
          });
      
      if (!responseUser.ok) {
              throw new Error("Failed to fetch user data");
          }
  
      const user = await responseUser.json()
      const id = user.id
      const email = user.email
      const nombre = user.name
  
      //Validación de palabras
  
      const checkout = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:_XMYlbgZ/peticion_2', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id:id, email, nombre})
      });
  
      const checkoutresponse = await checkout.json()
      console.log(checkoutresponse)
      const link = checkoutresponse.link
      console.log(link)
  
      if (checkout.ok) {
  
        redirect(303, link)
        
      }
  
      
      },

    portal: async({request, cookies}) =>{

      const cookie = cookies.get('session')
  
      const responseUser = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:2FhYSCVF/auth/me', {
              method: 'GET',
              headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${cookie}`
              }
          });
      
      if (!responseUser.ok) {
              throw new Error("Failed to fetch user data");
          }
  
      const user = await responseUser.json()
      const id = user.id
      const email = user.email
      const nombre = user.name
  
      //Validación de palabras
  
      const portal = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:_XMYlbgZ/customer_portal', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email})
      });
  
      const portalresponse = await portal.json()
      console.log(portalresponse)

      
  
      const link = portalresponse
      console.log(link)

      if (portalresponse) {
  
        redirect(303, link)
        
      } else {

        redirect(303, '/dashboard')
      }
  
      
      
      }


}