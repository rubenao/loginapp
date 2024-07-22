import { fail, redirect } from '@sveltejs/kit';

export async function load({params,cookies,locals,url}){

   
    //const cookie = cookies.get('session')
    //console.log(url)
    const token = url.searchParams.get('token')
    console.log(token)


    const response = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:6hazS0TY/auth/magic-login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ magic_token:token })
    });
    const result = await response.json();
    console.log(result.authToken)
    console.log(result.message)

    if (response.ok) {
        //const result = await response.json();
        //console.log(result)
        const token = result.authToken;

        const cookie = cookies.set('session', token, {
            httpOnly: true,
            path: '/',
            maxAge: 60 * 60 * 24 // 1 día
        })
        console.log(cookie)
        //redirect(303, '/dashboard')
    } else {
        return redirect(303, '/')
    }

      



}

export const actions = {
    reset: async ({ request, cookies }) => {
        const formData = await request.formData()
        
        const password = formData.get('password')
        const confirm_password = formData.get('confirm_password')
        console.log(formData)

        const cookie = cookies.get('session')

        if (!password) {
			return fail(400, { password, missing: true });
		}

        const response = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:6hazS0TY/update_password', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie}`
			},
			body: JSON.stringify({ password, confirm_password })
		});

        const result = await response.json();
        console.log(result)

        if (response.ok) {
			const result = await response.json();
			/*const token = result.authToken;

            const cookie = cookies.set('session', token, {
				httpOnly: true,
				path: '/',
				maxAge: 60 * 60 * 24 // 1 día
			})
            redirect(303, '/dashboard')*/
            console.log('se actualizó la contraseña')
            redirect(303, '/dashboard')
        } else {
            //return fail(400, { email, incorrect: true })
           
            const message1 = result.message
            return fail(400, { message1, incorrect: true });
        }

        

    
        return {success:true}
}
}