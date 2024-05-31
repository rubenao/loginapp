<script>
    export let data
    console.log(data)
</script>


<h1 class="font-bold text-3xl">Suscripción</h1>

<p class="font-bold">Nombre: {data.user.name}</p>
<p class="font-bold">Fecha inicio plan: {data.resultado.fecha_inicio}</p>
<p class="font-bold">Fecha reinicio palabras: {data.resultado.fecha_reinicio}</p>

<p class="font-bold">Cantidad de palabras: {data.resultado.prompts1[0].prompts_cantidad_palabras}</p>