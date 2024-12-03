<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4(data-aos="fade-right") La ética, tanto en el ámbito personal como laboral, constituye un pilar fundamental para interactuar de manera efectiva con clientes y fortalecer las relaciones con el entorno. En este contexto, es esencial comprender los principios éticos que rigen el comportamiento humano y cómo estos influyen en las relaciones interpersonales y profesionales, con este enfoque no solo permite generar vínculos sólidos y respetuosos, sino también alinear las acciones individuales con las políticas y estrategias de servicio de la organización, asegurando una gestión ética que fomente la confianza y el bienestar colectivo.
    
    .row
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gcGdP0ctgZM?si=8mqhXqBq8D-bsbvG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video. El poder de la ética
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
