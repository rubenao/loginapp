import { fail, redirect } from '@sveltejs/kit';

export function load(){


}

export const actions = {

    prompt: async({request}) =>{
        //const loader = document.getElementById('loader')
        let formLoading = true

        //loader.classList.remove("hidden");
        const formData = await request.formData()
        const producto = formData.get('producto')

        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:rdKRm-Pu/prompts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ producto})
		});

        /*const result = await response.json();
        return result*/

        if (response.ok) {
            const result = await response.json();
            formLoading = false
            //loader.classList.add("hidden");
            return result
            redirect(303, '/dashboard')
        }



        //return {succes:true}




    }

    


}