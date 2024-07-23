<script>
    import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
    import { fly, slide } from 'svelte/transition';
    import toast from 'svelte-french-toast';
    import { goto } from '$app/navigation';
    import { fade } from 'svelte/transition';
    import { fail, redirect } from '@sveltejs/kit';
    //import Trix from "trix"
    import 'trix/dist/trix.css'

    export let form

    let Trix
    let Trixeditor 


    //export let data
    console.log(form)
    let formLoading = false;
    let modal = false
    let formresult = false

    function showmodal(){

        document.getElementById('my_modal_3').showModal()
    }

    function copyToClipboard() {
    navigator.clipboard.writeText(JSON.stringify(form.api1.response.result.choices[0].message.content))
      .then(() => alert('Guion copiado!'))
      .catch(err => alert('Failed to copy data: ', err));
    }

    function copyToClipboard2() {
    navigator.clipboard.writeText(JSON.stringify(form.api2.response.result.choices[0].message.content))
      .then(() => alert('Guion copiado!'))
      .catch(err => alert('Failed to copy data: ', err));
    }
    //console.log(form.api1.response.result.choices[0].message.content)

    onMount(async ()=>{
        Trix = (await import('trix')).default

        Trixeditor =document.querySelector('trix-editor')

       

    })

    const submitNote = ({data}) => {
        console.log(data)
		return async ({ result, update }) => {
            
            console.log(result.type)
			switch (result.type) {
				case 'redirect':
                
					toast.success('Se ha creado la nota!', {
		duration: 1000,
        
	        })
            form.reset()
            await applyAction(result)
            await invalidateAll()
            //update();
            
            ;
					break;
				default:
					break;
			}
			await update();
		};
	};
</script>

<svelte:head>

  <title>Crea tu guión!</title>
	<meta name="description" content="La herramienta para crear anuncios efectivos con IA" />


</svelte:head>


<main class="p-5">

    <h1 class="mt-20">Crea el guion de tu anuncio</h1>

    <form method="POST" action="?/prompt" use:enhance={() => {
        formLoading = true;
        modal = false
        //formresult = false
        return async ({ update, result }) => {
            modal = true
            formLoading = false;
            console.log(result.type)
            //formresult = true
                    switch (result.type) {
                        case 'redirect':
                            showmodal();
                            await update();
                    ;
                            break;
                        default:
                            break;
                    }
                    await update();
		    };
            
            
        }
    }>

        <div class="mt-4">
            <input type="text" id="producto" name="producto" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required placeholder="Escribe el nombre de tu producto ejm: matcha"/>
        </div>
        <button type="submit" class="btn btn-primary mt-4 text-base">Crear guion</button>


    </form>

    {#if form?.missing}

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
    {/if}  

    {#if formLoading}

        <span id="loader" class="loading loading-spinner loading-sm mt-4"></span>

            <!--{#if modal}

            {showmodal()}

            <dialog id="my_modal_3" class="modal">
            <div class="modal-box">
                <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 class="font-bold text-lg">Hello!</h3>
                <p class="py-4">Press ESC key or click on ✕ button to close</p>
            </div>
            </dialog>
            {/if} -->


    {/if}

    {#if form}

        
            <div class="flex md:flex-row flex-col md:gap-9 gap-9">

                <div class="card md:w-1/2 w-full bg-base-100 shadow-xl" in:fly={{ y: 20, duration: 1000}} out:slide>
                    <div class="card-body">
                    <h2 class="card-title">Guión 1</h2>
                    <p>{form.api1.response.result.choices[0].message.content}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary" on:click={copyToClipboard}>Copiar guion</button>
                    </div>
                    </div>
                </div>


                <div class="card md:w-1/2 w-full bg-base-100 shadow-xl" in:fly={{ y: 20, duration: 1000}} out:slide>
                    <div class="card-body">
                    <h2 class="card-title">Guión 2</h2>
                    <p>{form.api2.response.result.choices[0].message.content}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary" on:click={copyToClipboard2}>Copiar guion</button>
                    </div>
                    </div>
                </div>
            </div>


           <!--<div class="flex flex-col gap-10 mt-4">
                <h1 class="font-bold text-3xl">Inspírate de estos anuncios </h1>
                <div class="columns-2 md:columns-3 lg:columns-4" in:fly={{ y: 40, duration: 1000}}>

                    {#each form.anunciosResponse.anuncios as url1}
                        {#if url1.includes("mp4")}

                            <p>Contiene mp4</p>

                            <div class="mb-4" >
                                <video src={url1} class="aspect-auto" in:fly={{ y: 20, duration: 1000}} out:slide controls>
                                    <track kind="captions">
                                </video>
                            </div>

                        {:else}

                            <div class="mb-4" >
                                <img class="w-96"src={url1} alt="imagen de anuncio" in:fly={{ y: 20, duration: 1000}}>
                                <video src={anuncio.video_anuncio.url} class="aspect-auto" in:fly={{ y: 20, duration: 1000}} out:slide>
                                    <track kind="captions">
                                </video>
                            </div>

            

                        {/if}


                    {/each}





               </div> 
            </div>  --> 

            
            <!--<div class="flex flex-col gap-10 mt-4">
                <h1 class="font-bold text-3xl">Inspírate de estos ejemplos </h1>
                <div class="columns-2 md:columns-3 lg:columns-4">

                    {#each form.anuncios as anuncio }
                    <div class="mb-4">
                        <img class="w-96"src={anuncio.imagen_anuncio.url} alt="imagen de anuncio" in:fly={{ y: 20, duration: 1000}} out:slide>
                    </div>
                    
                    {/each}
                </div>
                
            </div>-->

        {:else}

        <h1 class="mt-4">Comienza a crear guiones ✍️</h1>

    {/if}
  
    

    <!-- You can open the modal using ID.showModal() method 
    <button class="btn" onclick="my_modal_3.showModal()">open modal</button>-->
    <dialog id="my_modal_3" class="modal">
    <div class="modal-box">
        <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="font-bold text-lg">Ups!</h3>
        <p class="py-4">Excediste el limite de palabras!</p>
        <button class="btn btn-primary"><a href="/suscripcion">Actualizar plan</a></button>

    </div>
    </dialog>

    <form action="?/save" method="POST" class="md:w-2/3 w-full mt-4"  >

        <!--use:enhance={submitNote}-->
        <label class="form-control w-full max-w-xs mb-4">
            <div class="label">
              <span class="label-text text-base font-bold">Nombre del guión</span>
            </div>
            <input type="text" name="titulo" placeholder="Ejm: Guion smartblends" class="input input-bordered w-full max-w-xs" />
        </label>

        <input id="x" type="hidden" name="contenido">
        <trix-editor class="mt-4" input="x" placeholder="Sabías que el ..."></trix-editor>

        <button type="submit" class="btn btn-primary mt-4 text-base">Guardar guion</button>



    </form>

    

         
</main>
