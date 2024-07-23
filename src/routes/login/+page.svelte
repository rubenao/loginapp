<script>
    export let form
    export let data
    console.log(form)
    console.log(data)
</script>

<svelte:head>

  <title>Iniciar sesión</title>
	<meta name="description" content="La herramienta para crear anuncios efectivos con IA" />


</svelte:head>


<main class="flex items-center justify-center h-screen bg-gray-100 dark:bg-slate-800">

  

<form method="POST" action="?/login" class="space-y-4">
  <h2 class="text-3xl font-bold dark:text-white">Iniciar Sesión</h2>
    <div>
      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input type="email" id="email" name="email"  placeholder="Ingresa tu email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    </div>
    <div>
      <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
      <input type="password" id="password" name="password"  placeholder="Ingresa tu contraseña" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight foczus:outline-none focus:shadow-outline">
    </div>
    <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
      Iniciar Sesión
    </button>
    <p class="dark:text-slate-400">Todavia no tienes una cuenta? <a href="/signup" class="underline">Registrarse</a></p>
    <p class="dark:text-slate-400">Olvidaste tu contraseña? <a href="/forgot-password" class="underline">Cambiar</a></p>
    {#if form?.missing}<p class="error text-red-700 font-bold">Completa todos los campos</p>{/if}
    {#if form?.incorrect}<p class="error text-red-700 font-bold">Credenciales incorrectas!</p>{/if}
  </form>
</main>