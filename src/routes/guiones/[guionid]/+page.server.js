import { fail, redirect } from '@sveltejs/kit';

export async function load({params,cookies,locals}){

   
    const cookie = cookies.get('session')
    console.log(params.notaid)
    const notaslocals = locals.notas
    console.log(notaslocals)
    /*console.log(notaslocals.some(nota => nota.id < params.notaid))

    if(notaslocals.some(nota => nota.id < params.notaid)){

      console.log("incluye")
    } else {
      //throw redirect(303, '/dashboard')
      console.log("no incluye")
    }*/

    
      
    const response = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:2FhYSCVF/auth/me', {
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

    const Nota = await fetch(`https://xksj-cccl-hafb.n7d.xano.io/api:MhjUxcon/guiones/${params.guionid}?user_id=${user.id}` , {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookie}`
    }

  })
  const notas = await Nota.json()
  console.log(notas.payload)
  
  if (notas.payload === "No tienes acceso!") {
    //throw new Error("No puedes ingresar");
    throw redirect(303, '/dashboard')
    
  }

    return{
        notas
    }

}


export const actions = {

  update: async ({request, cookies, params})=> {
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

      const formData = await request.formData()
      const titulo = formData.get('titulo')
      const contenido = formData.get('contenido')

      const response = await fetch(`https://xksj-cccl-hafb.n7d.xano.io/api:MhjUxcon/guiones/${params.guionid}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ titulo, contenido, user_id: id})
  });

      if (response.ok) {
              const result = await response.json();
      redirect(303, '/guiones')
      }

      return {success:true}


  }
}