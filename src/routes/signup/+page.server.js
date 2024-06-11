import { fail, redirect } from '@sveltejs/kit';

export const actions ={

    signup: async ({ request, cookies }) =>{
        const formData = await request.formData()
        const name = formData.get('name')
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:2FhYSCVF/auth/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name,email, password })
		});

        if (response.ok) {
			const result = await response.json();
			const token = result.authToken;

            const cookie = cookies.set('session', token, {
				httpOnly: true,
				path: '/',
				maxAge: 60 * 60 * 24 // 1 día
			})
            console.log(token)
            console.log(cookie)
            redirect(303, '/dashboard')
        } else {
            const errorData = await response.json();
            return fail(400, { errorData, incorrect: true });
            
        }

        console.log(response)
        

    
        return {success:true}
    }

}