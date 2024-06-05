<script>
    export let data
    export let form
    console.log(data.notas)
    console.log(form)
</script>



<main class="p-5">

    <h1 class="font-bold text-3xl">Guiones</h1>

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
{/if}
  
  
  
  
  </main>