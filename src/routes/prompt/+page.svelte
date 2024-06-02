<script>
    import { enhance } from '$app/forms';
    import { fly, slide } from 'svelte/transition';
    import { fade } from 'svelte/transition';
    export let form

    //export let data
    console.log(form)
    //console.log(form.anuncios)
    let formLoading = false;
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
</script>


<main class="p-5">

    <h1>Crea el guion de tu anuncio</h1>

    <form method="POST" action="?/prompt" use:enhance={() => {
        formLoading = true;
        return async ({ update }) => {
            formLoading = false;
            update();
        };
    }}>

        <div class="mt-4">
            <input type="text" id="producto" name="producto" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
        </div>
        <button type="submit" class="btn btn-primary mt-4">Crear guion</button>


    </form>

    {#if formLoading}

        <span id="loader" class="loading loading-spinner loading-sm mt-4"></span>

    {:else}

        {#if !form}

            <h1 class="mt-4">Comienza a crear guiones ✍️</h1>

        {:else}

            <div class="flex md:flex-row flex-col md:gap-9">

                <h6 in:fly={{ y: 20, duration: 1000}} out:slide class="mt-4 flex flex-col gap-8">
                    <button class="btn btn-primary mt-4 w-48"   on:click={copyToClipboard}>Copiar guion</button>
                    <p>
                        {form.api1.response.result.choices[0].message.content}
                    </p>
                    
                </h6>
    
                <h6 in:fly={{ y: 20, duration: 1000}} out:slide class="mt-4 flex flex-col gap-3">
                    <button class="btn btn-primary mt-4 w-48"   on:click={copyToClipboard2}>Copiar guion</button>
                    <p>
                        {form.api2.response.result.choices[0].message.content}
                    </p>
                    
                </h6>





            </div>

            
            <div class="flex flex-col gap-10 mt-4">
                <h1 class="font-bold text-3xl">Inspírate de estos ejemplos </h1>
                <div class="flex flex-wrap gap-16">

                    {#each form.anuncios as anuncio }
                    <img class="w-96"src={anuncio.imagen_anuncio.url} alt="imagen de anuncio" in:fly={{ y: 20, duration: 1000}} out:slide>
                    {/each}
                </div>
                
            </div>

            
           
        {/if}
    {/if}

         
</main>
