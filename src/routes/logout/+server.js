
import { redirect } from "@sveltejs/kit";


export const POST = async ({ cookies }) => {
	console.log('logout')
	cookies.delete('session', {path: '/'})
	throw redirect(303, "/")
}
