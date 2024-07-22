import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    forgot: async ({ request, cookies }) => {
        const formData = await request.formData()
        
        const email = formData.get('email')
        console.log(email)
        console.log(formData)

        if (!email) {
			return fail(400, { email, missing: true });
		}

        const response = await fetch(`https://xksj-cccl-hafb.n7d.xano.io/api:6hazS0TY/auth/request-magic-link?email=${email}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},

		});

        if (response.ok) {
			const result = await response.json();
			/*const token = result.authToken;

            const cookie = cookies.set('session', token, {
				httpOnly: true,
				path: '/',
				maxAge: 60 * 60 * 24 // 1 día
			})
            redirect(303, '/dashboard')*/
            console.log('se envió el correo!')
        } else {
            return fail(400, { email, incorrect: true })
        }

        

    
        return {success:true}
}
}