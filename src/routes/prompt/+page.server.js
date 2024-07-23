import { fail, redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export function load(){


}

export const actions = {

    prompt: async({request, cookies}) =>{
        //const loader = document.getElementById('loader')
        let formLoading = true
        let formresult = false
        let modal = false

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

        //Validación de palabras

        const verificacion = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:ginKV_Kk/verificacion_palabras', {
            
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id:id})
        });

        const boolean = await verificacion.json()
        console.log(boolean.boolean)

        if (boolean.boolean === false){
            

            //let modal = showModal()
            //formLoading = false
            //modal = true
            console.log("No puede crear más palabaras el usuario")
            //return fail(400, { missing: true })
            redirect(303, '/prompt')
            //return {success:true}

        } else {

            
            console.log("El usuario puede crear más palabras")


                const formData = await request.formData()
                const producto = formData.get('producto')

                const response = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:nCl8y_gm/prompts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ producto, user_id:id})
                });

                /*const anuncios = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:hAeKwayt/dashboard_anuncios', {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                    }
                  }); */
                
                

                /*const result = await response.json();
                return result*/

                if (response.ok) {
                    const result = await response.json();
                    //const anunciosResponse = await anuncios.json()
                    console.log(result)
                    //console.log(anunciosResponse)
                    formLoading = false
                    formresult = true
                    //loader.classList.add("hidden");
                    return result
                    //return {success:true}
                    redirect(303, '/dashboard')
                }

        }

        

        //loader.classList.remove("hidden");
        
        
        

        //return {succes:true}

        


    },


    save: async({request, cookies}) =>{
        //const loader = document.getElementById('loader')
        //let formLoading = true

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

        //loader.classList.remove("hidden");
        const formData = await request.formData()
        const titulo = formData.get('titulo')
        const contenido = formData.get('contenido')

        const response = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:MhjUxcon/guiones', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ titulo, contenido, user_id:id})
		});

        /*const result = await response.json();
        return result*/

        if (response.ok) {
            const result2 = await response.json();
            console.log(result2)
            //formLoading = false
            //loader.classList.add("hidden");
            //return result2
            //return {invalid:true}
            redirect(303,'/guiones')
            
        }



        //return {succes:true}




    }


    


}