import { fail, redirect } from '@sveltejs/kit';

export function load(){


}

export const actions = {

    prompt: async({request, cookies}) =>{
        //const loader = document.getElementById('loader')
        let formLoading = true

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

        //loader.classList.remove("hidden");
        const formData = await request.formData()
        const producto = formData.get('producto')

        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:rdKRm-Pu/prompts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ producto, user_id:id})
		});

        /*const result = await response.json();
        return result*/

        if (response.ok) {
            const result = await response.json();
            console.log(result)
            formLoading = false
            //loader.classList.add("hidden");
            return result
            redirect(303, '/dashboard')
        }



        //return {succes:true}




    },


    save: async({request, cookies}) =>{
        //const loader = document.getElementById('loader')
        //let formLoading = true

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

        //loader.classList.remove("hidden");
        const formData = await request.formData()
        const titulo = formData.get('titulo')
        const contenido = formData.get('contenido')

        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:kxKm5VLi/guiones', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ titulo, contenido, user_id:id})
		});

        /*const result = await response.json();
        return result*/

        if (response.ok) {
            const result = await response.json();
            console.log(result)
            //formLoading = false
            //loader.classList.add("hidden");
            //return result
            redirect(303, '/dashboard')
        }



        //return {succes:true}




    }


    


}