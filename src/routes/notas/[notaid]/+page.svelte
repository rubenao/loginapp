<script>
    export let data
    export let form
    console.log(data.notas)
    console.log(form)
</script>

<svelte:head>

  <title>Notas</title>
	<meta name="description" content="La herramienta para crear anuncios efectivos con IA" />


</svelte:head>


<main class="p-5">

  <a href="/dashboard" class="btn btn-primary">Regresar</a>
  <h1 class="font-bold text-3xl">Detalle de nota</h1>

  <h3>Titulo: {data.notas.nombre_tarea}</h3>
  <h6>Usuario: {data.notas._user.name}</h6>

  <form method="POST" action="?/update">
      <div class="mt-4">
        <input type="text" id="tarea" name="nombre_tarea"  value="{data.notas.nombre_tarea}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
      </div>
      <button type="submit" class="btn btn-primary mt-4">Actualizar tarea</button>
  </form>




</main>

