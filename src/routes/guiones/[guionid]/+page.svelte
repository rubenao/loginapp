<script>
    export let data
    export let form
    console.log(data.notas)
    console.log(form)
    import { onMount } from 'svelte';
    import 'trix/dist/trix.css'

    let Trix
    let Trixeditor

    
    onMount(async ()=>{
        Trix = (await import('trix')).default

        Trixeditor =document.querySelector('trix-editor')
    })

</script>


<main class="p-5">

    <h1 class="font-bold text-3xl">Detalle del Guion</h1>

    <form action="?/update" method="POST" class="md:w-2/3 w-full mt-4">


        <label class="form-control w-full max-w-xs mb-4">
            <div class="label">
              <span class="label-text text-base font-bold">Nombre del guión</span>
            </div>
            <input type="text" name="titulo" placeholder="Ejm: Guion smartblends" class="input input-bordered w-full max-w-xs" value={data.notas.titulo}/>
        </label>

        <input id="x" type="hidden" name="contenido" value={data.notas.contenido}>
        <trix-editor class="mt-4" input="x" placeholder="Sabías que el ..."></trix-editor>

        <button type="submit" class="btn btn-primary mt-4 text-base">Actualizar guion</button>



    </form>
  
  
  
  
  </main>