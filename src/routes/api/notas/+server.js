export const GET = async ({cookies})=>{

    const cookie = cookies.get('session')

    const res = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:KcOdzVUU/todo' , {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookie}`}
      })
    
    const notes = await res.json()
    return new Response(JSON.stringify(notes), {status:200})
    //return json(res)
    
}
