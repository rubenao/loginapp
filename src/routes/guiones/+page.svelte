<script>
    import { fly, slide } from 'svelte/transition';
    import { enhance } from '$app/forms';
    import toast from 'svelte-french-toast';
    export let data
    export let form
    console.log(data.notas)
    console.log(form)

    function showmodal(){

        const alerta = document.getElementById('alert')
        //alerta.classList.remove('hidden')

        setTimeout(() => {
        alerta.classList.add('hidden')
    }, 2000);
    }


    const submitDeleteNote = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Se ha eliminado la nota!');
					break;
				default:
					break;
			}
			await update();
		};
	};
</script>



<main class="sm:px-6 lg:px-8 px-4 py-4">

            <!--<h1 class="font-bold text-3xl">Guiones</h1>

            {#if data.notas.length >0}
            <ul >
                {#each data.notas as nota }
                    <li>
                        <form method="POST" action="?/delete">

                            <div class="flex flex-col gap-4">

                                <input type="hidden" value="{nota.id}" name="id">
                                <a href="/guiones/{nota.id}">{nota.titulo}</a>
                            
                            </div>

                            <button type="submit" class="btn btn-primary">Eliminar</button>

                        </form>

                        
                    </li>
                    
                {/each}
            </ul>

        {:else}
            <p>No tienes notas, crea una 💡</p>
        {/if}-->

    {#if form?.dialogo}

        {showmodal()}

        <!--<dialog id="my_modal_3" class="modal">
        <div class="modal-box">
            <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="font-bold text-lg">Hello!</h3>
            <p class="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
        </dialog>-->
        
        <div role="alert" class="alert alert-success w-72 absolute bottom-10 left-10" in:fly={{ y: 20 }} out:slide id="alert">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Se ha eliminado el guión!</span>
        </div>
    {/if}  

    <h1 class="text-3xl font-bold" >Tus guiones</h1>

    <div class="overflow-x-auto">
            {#if data.notas.result1.length >0}
        
        <table class="table">
            <!-- head -->
           
            <thead>
                <tr>
                <th>Id</th>
                <th>Título</th>
                <th>Descripción</th>
                <th>Fecha</th>
                <th>Acciones</th>
                </tr>
            </thead>
            
                <tbody>
                    <!-- row 1 -->
                
                    
                {#each data.notas.result1 as nota }
                    <tr class="hover:bg-slate-200" in:fly={{ y: 20 }} out:slide>
                        <th>{nota.id}</th>
                        <td>{nota.titulo}</td>
                        <td> {nota.contenido}</td>
                        <td>{nota.created_at}</td>
                        <td class="flex flex-col gap-2 md:flex-row"> 
                            <a href="/guiones/{nota.id}">
                                
                                <button class="btn btn-primary">Editar</button> 
                        
                            </a>
                            
                            <form method="POST" action="?/delete" use:enhance={submitDeleteNote}>
                                    <input type="hidden" value="{nota.id}" name="id">
                                    <button type="submit" class="btn btn-error">Eliminar</button>
                            </form>
                        </td>
                                  
                    </tr>
                {/each}
                   
                    
                 </tbody>
            
            </table>
        {:else}
        <p>No tienes guiones, crea uno 💡</p>
        {/if}
    </div>

  
  
</main>