<script>
    //import {atlantisCoordinates} from '$lib/server/secret.js'
    export let data
    const {notas}=data
    console.log(data.notas)
    console.log(data)

</script>


<h1 class="text-3xl font-bold underline">Todo App</h1>

<a href="/login" class="btn btn-primary">Login</a>
<a href="/dashboard" class="btn btn-secondary">Dashboard</a>

<h2>Bienvenido, {data.user.name}</h2>
<h2>Tus notas</h2>


{#if notas.length > 0}
        <ul>
            {#each data.notas as nota }
                <li>

                    Tarea {nota.nombre_tarea}
                </li>
                
            {/each}
        </ul>

{:else}
        <p>You have no notes.</p>
{/if}
