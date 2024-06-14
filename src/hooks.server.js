/** @type {import('@sveltejs/kit').Handle} */
import { fail, redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {

    const response2 = await fetch('https://xksj-cccl-hafb.n7d.xano.io/api:2FhYSCVF/auth/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${event.cookies.get('session')}`
        }
      });
    
    
    const response3 = await response2.json()
    console.log(response3.id)

    const Nota = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:KcOdzVUU/get_notes_user?user_id=${response3.id}` , {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${event.cookies.get('session')}`
      }
  
    })
    event.locals.user= response3
    event.locals.notas = await Nota.json()

    //event.locals.cookies = event.cookies.get('session')

    

    if (event.url.pathname.startsWith('/dashboard')) {
		    if(event.locals.user.message === 'Invalid token.'){

            console.log('Acceso denegado')
            throw redirect(303, '/login')
          }
	  }


	const response = await resolve(event);
	return response;

}