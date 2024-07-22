<script>
  export let form
  //console.log(form.errorData.message)
</script>


<main class="flex items-center justify-center h-screen bg-gray-100 dark:bg-slate-800">

  

    <form method="POST" action="?/reset" class="space-y-4">
      <h2 class="text-3xl font-bold dark:text-white">Coloca tu nueva contraseña</h2>
    
        <div>
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
          <input type="password" id="password" name="password"  placeholder="Ingresa tu contraseña" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight foczus:outline-none focus:shadow-outline">
        </div>
        <div>
            <label for="confirm_password" class="block text-gray-700 text-sm font-bold mb-2">Confirma tu Contraseña</label>
            <input type="password" id="confirm_password" name="confirm_password"  placeholder="vuelve a ingresar tu contraseña" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight foczus:outline-none focus:shadow-outline">
          </div>
        <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
          Iniciar Sesión
        </button>
        {#if form?.incorrect}<p class="text-red-500 text-sm font-medium">Error:{form.errorData.message}</p>{/if}
        <!--{#if form?.missing}<p class="error text-red-700 font-bold">Completa todos los campos</p>{/if}
        {#if form?.incorrect}<p class="error text-red-700 font-bold">Credenciales incorrectas!</p>{/if}-->
      </form>
    </main>