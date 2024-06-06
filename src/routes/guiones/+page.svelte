<script>
    export let data
    export let form
    console.log(data.notas)
    console.log(form)
</script>



<main class="p-5">

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

    <h1 class="text-3xl font-bold" >Tus guiones</h1>

    <div class="overflow-x-auto">
            {#if data.notas.result1.length >0}
        
        <table class="table-lg">
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
                    <tr class="hover:bg-slate-400">
                        <th>{nota.id}</th>
                        <td>{nota.titulo}</td>
                        <td> {nota.contenido}</td>
                        <td>{nota.created_at}</td>
                        <td class="flex flex-col gap-2 md:flex-row"> 
                            <a href="/guiones/{nota.id}">
                                
                                <button class="btn btn-primary">Editar</button> 
                        
                            </a>
                            
                            <form method="POST" action="?/delete">
                                    <input type="hidden" value="{nota.id}" name="id">
                                    <button type="submit" class="btn btn-error">Eliminar</button>
                            </form>
                        </td>
                                  
                    </tr>
                {/each}
                   
                    
                 </tbody>
            
            </table>
        {:else}
        <p>No tienes notas, crea una 💡</p>
        {/if}
    </div>
  
  
</main>