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


<main class="p-5 bg-slate-100">

    <!--<p class="text-base text-gray-700 leading-relaxed mb-4 font-medium">Bienvenido {data.user.name}</p>-->


    <div class="flex flex-col gap-8 mt-20">
        <h1 class="font-extrabold text-3xl">No más bloqueos creativos! </h1>
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
                        <div class="card w-full bg-base-100 shadow-xl" in:fly={{ y: 20, duration: 1000}} out:slide>
                            <div class="card-body flex-row p-5">
                                <video src={url1} class="aspect-auto" in:fly={{ y: 20, duration: 1000}} out:slide controls>
                                    <track kind="captions">
                                </video>
                            
                            </div>
                        </div>
                        
                    </div>

                {:else}

                    <div class="mb-4" >

                        <div class="card w-full bg-base-100 shadow-xl" in:fly={{ y: 20, duration: 1000}} out:slide>
                            <div class="card-body flex-row p-5">
                                <img class="w-96"src={url1} alt="imagen de anuncio" in:fly={{ y: 20, duration: 1000}}>
                            
                            </div>
                        </div>
                        
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



