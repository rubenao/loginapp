import { fail, redirect } from '@sveltejs/kit';

export async function load({cookies,event, locals}){
  const cookie = cookies.get('session')
  console.log(locals)

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

  const anuncios = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:hAeKwayt/dashboard_anuncios', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const anunciosResponse = await anuncios.json()

  
  
  return {
      user, anunciosResponse
    
  }

}


export const actions = {
  create: async ({request, cookies})=>{
    const cookie = cookies.get('session')

    const responseUser = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:k_bg5U-q/auth/me', {
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
  const nombre_tarea = formData.get('nombre_tarea')

    
  //console.log(nombre_tarea)

  const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:KcOdzVUU/todo', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ nombre_tarea, user_id: id})
		});

    if (response.ok) {
			const result = await response.json();
      redirect(303, '/dashboard')
    }



    return {success:true}
  },

  delete: async({request})=>{

    const formData = await request.formData()
    const id = formData.get('id')

    const Nota = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:KcOdzVUU/todo/${id}` , {
      method: 'DELETE',
      headers: {
      'Content-Type': 'application/json',
      }

    })

    if (Nota.ok) {
			const notas = await Nota.json()
      redirect(303, '/dashboard')
      
    } else {
      throw new Error("Failed to fetch user data");
    }
    
    //return {success:true}
  },

  logout: async({request, cookies})=>{
    //const formData = await request.formData()
    const cookie = cookies.delete('session', {path: '/'})

    redirect(303, '/login')

  }


 
}