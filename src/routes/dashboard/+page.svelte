<script >
    export let data
    export let form
    //const {notas}=data
    //console.log(form)
    //console.log(data.user)
    /*async function notes(){
        const response = await fetch('/api/notas')
        const notas=await response.json()
        console.log(notas)
      
    }*/
   
    
</script>


<main class="p-5">

    <h1 class="font-bold text-3xl">Dashboard</h1>

    <a href="/prompt"   class="btn btn-primary mt-3">Crear anuncios</a>

<p class="text-base text-gray-700 leading-relaxed mb-4 font-medium">Bienvenido {data.user.name}</p>

<!--<h2 class="text-2xl font-medium text-gray-700 mb-2">Agrega una tarea</h2>

<form method="POST" action="?/create">

    <div class=" mb-4">
      <input type="text" id="tarea" name="nombre_tarea" placeholder="Ingresa una tarea" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
    </div>
    <button type="submit" class="btn btn-primary font-bold text-base">Agregar tarea</button>
</form>

<h2 class="text-2xl font-medium text-gray-700 mt-5">Tus notas</h2>


{#if data.notas.length >0}
        <ul >
            {#each data.notas as nota }
                <li>
                    <form method="POST" action="?/delete">

                        <div class="flex flex-col gap-4">

                            <input type="hidden" value="{nota.id}" name="id">
                            <a href="/notas/{nota.id}">Tarea {nota.nombre_tarea}</a>
                           
                        </div>

                        <button type="submit" class="btn btn-primary">Eliminar</button>

                    </form>

                    
                </li>
                
            {/each}
        </ul>

{:else}
        <p>No tienes notas, crea una 💡</p>
{/if}

<form method="POST" action="?/logout">

    <div class="mt-4">
        <button type="submit" class="btn btn-primary">Salir</button>
    </div>

</form>-->



</main>



