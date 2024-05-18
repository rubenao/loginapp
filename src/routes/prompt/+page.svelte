<script>
    import { enhance } from '$app/forms';
    import { fly, slide } from 'svelte/transition';
    export let form

    //export let data
    console.log(form)
    let formLoading = false;
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

            <h1 class="mt-4">Crea tu primer guion :)</h1>

        {:else}

            <h6 in:fly={{ y: 20, duration: 1000}} out:slide class="mt-4">
                {form.api1.response.result.choices[0].message.content}
            </h6>
        {/if}
    {/if}

         
</main>
