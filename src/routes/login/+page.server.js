import { fail, redirect } from '@sveltejs/kit';

export function load({cookies}){
    const cookie = cookies.get('session')
    return {
        cookie
    }
}


export const actions = {
    login: async ({ request, cookies }) => {
        const formData = await request.formData()
        
        const email = formData.get('email')
        const password = formData.get('password')
        console.log(email)
        console.log(formData)

        if (!email || !password) {
			return fail(400, { email, missing: true });
		}

        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:k_bg5U-q/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		});

        if (response.ok) {
			const result = await response.json();
			const token = result.authToken;

            const cookie = cookies.set('session', token, {
				httpOnly: true,
				path: '/',
				maxAge: 60 * 60 * 24 // 1 día
			})
            redirect(303, '/dashboard')
        } else {
            return fail(400, { email, incorrect: true })
        }

        

    
        return {success:true}
}}