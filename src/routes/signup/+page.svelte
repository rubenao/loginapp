<script>
    export let form
    //console.log(form.errorData.message)
</script>


<main class="flex items-center justify-center h-screen bg-gray-100">

  
    
    <form method="POST" action="?/signup" class="space-y-4">
      <h2 class="text-3xl font-bold">Registrarse</h2>

        <div>
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
            <input type="text" id="name" name="name" required placeholder="Ingresa tu nombre" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div>
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" required placeholder="Ingresa tu email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div>
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
          <input type="password" id="password" name="password" required placeholder="Ingresa tu contraseña" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
          Iniciar Sesión
        </button>

        <p>Ya una cuenta? <a href="/login" class="underline">Iniciar sesión</a></p>
        {#if form?.incorrect}<p class="text-red-500 text-sm font-medium">Error:{form.errorData.message}</p>{/if}
      </form>
</main>