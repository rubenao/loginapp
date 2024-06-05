<script>
  import "../app.css";
  import { onMount, onDestroy } from 'svelte';
  import logo from '$lib/assets/logo_blanco.svg';
  import { browser } from '$app/environment';
  import { fade } from 'svelte/transition';
  let isOpen = false;
  let menuButton ;
  let menu ;

  import { page } from '$app/stores';
  import { get } from 'svelte/store';

  // Usamos un watcher reactivo para obtener la ruta actual
  $: path = get(page).url.pathname;
  console.log(path)

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function closeMenu() {
    isOpen = false;
  }
  if (browser) {

    function handleClickOutside(event) {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
      isOpen = false;
    }
  }

    onMount(() => {
    document.addEventListener('click', handleClickOutside);
  });

    onDestroy(() => {
    document.removeEventListener('click', handleClickOutside);
  });

  }
    export let data
    //console.log(data.cookie)
      
</script>


<nav class="bg-gray-800 text-white">
  <div class="flex max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
    <div class="flex h-16 justify-between w-full">
      <div class="flex justify-between w-full">
        <!-- Logotipo y links para pantallas grandes -->
        <div class="flex-shrink-0 flex items-center">
          <!--<h1 class="text-xl font-bold"><a href="/">Anuncio ai</a></h1>-->
          <a href="/"><img class="block lg:hidden h-16 w-auto" src={logo} alt="Your Logo"></a>
          <a href="/"><img class="hidden lg:block h-16 w-auto" src={logo} alt="Your Logo"></a>
        </div>
        <div class="hidden md:flex items-center">
          {#if data.cookie}
          <a href="/prompt" class={path === '/prompt' ? 'px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white' : 'px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white'}>Crear anuncios</a>

          <a href="/dashboard" class={path === '/dashboard' ? 'px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white' : 'px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white'}>Dashboard</a>

          <a href="/suscripcion" class={path === '/suscripcion' ? 'px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white' : 'px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white'}>Suscripcion</a>
          <a href="/guiones" class={path === '/guiones' ? 'px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white' : 'px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white'}>Guiones</a>
          <form action="/logout" method="POST">
            <button on:click={closeMenu} class="w-full text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">Salir</button>
          </form>
          {:else}
          <a href="/signup" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">Registrarse</a>
          <a href="/login" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">Login</a>
          
          {/if}
        </div>
        <!-- Botón para dispositivos móviles -->
        <div class="flex items-center md:hidden">
          <button
            on:click={toggleMenu}
            class="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
            bind:this={menuButton}>
            <!-- Icono del menú (hamburguesa) -->
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Menú para dispositivos móviles -->
  {#if isOpen}
    <div transition:fade={{ delay: 0, duration: 100 }} class="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3" bind:this={menu}>
      {#if data.cookie}
      <a href="/dashboard" on:click={closeMenu} class={path === '/dashboard' ? 'px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white' : 'px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white'}>Dashboard</a>
      <a href="/prompt" on:click={closeMenu} class={path === '/prompt' ? 'px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white' : 'px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white'}>Crear anuncio</a>
      <a href="/suscripcion" on:click={closeMenu} class={path === '/suscripcion' ? 'px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white' : 'px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white'}>Suscripción</a>
      <a href="/guiones" on:click={closeMenu} class={path === '/guiones' ? 'px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white' : 'px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white'}>Guiones</a>
      <form action="/logout" method="POST">
        <button on:click={closeMenu} class="w-full text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">Salir</button>
      </form>
      {:else}
      <a href="/signup" on:click={closeMenu} class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Registrarse</a>
      <a href="/login" on:click={closeMenu} class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Login</a>
      
      {/if}
    </div>
  {/if}
</nav>



  
  <slot />