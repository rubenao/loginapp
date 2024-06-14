<script >
    import { fly, slide } from 'svelte/transition';
    export let data
    console.log(data)
    //export let form
    //const {notas}=data
    //console.log(form)
    //console.log(data.user)
    /*async function notes(){
        const response = await fetch('/api/notas')
        const notas=await response.json()
        console.log(notas)
      
    }*/

    $: url = data.anunciosResponse.anuncios

    console.log(url)
   
    
</script>


<main class="p-5">

    <!--<p class="text-base text-gray-700 leading-relaxed mb-4 font-medium">Bienvenido {data.user.name}</p>-->


    <div class="flex flex-col gap-10 mt-4">
        <h1 class="font-bold text-3xl">Inspírate de estos anuncios </h1>
        <div class="columns-2 md:columns-3 lg:columns-4" in:fly={{ y: 40, duration: 1000}}>

            <!--{#each data.anunciosResponse.result1 as anuncio }
            <div class="mb-4" >
                <img class="w-96"src={anuncio.imagen_anuncio.url} alt="imagen de anuncio" in:fly={{ y: 20, duration: 1000}}>
                <video src={anuncio.video_anuncio.url} class="aspect-auto" in:fly={{ y: 20, duration: 1000}} out:slide>
                    <track kind="captions">
                </video>
            </div>
            {/each}
            {#each data.anunciosResponse.anuncios_videos as anuncio }
            <div class="mb-4" >
                <video src={anuncio.video_anuncio.url} class="aspect-auto" in:fly={{ y: 20, duration: 1000}} out:slide controls>
                    <track kind="captions">
                </video>
            </div>
            {/each} -->

            {#each url as url1}
                {#if url1.includes("mp4")}

                    <!--<p>Contiene mp4</p>-->

                    <div class="mb-4" >
                        <video src={url1} class="aspect-auto" in:fly={{ y: 20, duration: 1000}} out:slide controls>
                            <track kind="captions">
                        </video>
                    </div>

                {:else}

                    <div class="mb-4" >
                        <img class="w-96"src={url1} alt="imagen de anuncio" in:fly={{ y: 20, duration: 1000}}>
                        <!--<video src={anuncio.video_anuncio.url} class="aspect-auto" in:fly={{ y: 20, duration: 1000}} out:slide>
                            <track kind="captions">
                        </video>-->
                    </div>

                    <!--<p>No Contiene mp4</p>-->

                {/if}


            {/each}
        </div>
        
    </div>


   





</main>



