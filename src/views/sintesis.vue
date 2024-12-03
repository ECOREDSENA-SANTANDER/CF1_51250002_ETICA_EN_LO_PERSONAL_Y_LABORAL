<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-right") El poder de la ética desarrolla competencias para fortalecer relaciones responsables en contextos personales y laborales. Explora principios fundamentales como la integridad, valores universales, derechos y deberes, así como la aplicación de la ética en dilemas cotidianos. Además, destaca la importancia de los códigos de ética y los valores empresariales como guías estratégicas, promoviendo la reflexión ética para una gestión responsable y coherente con las políticas organizacionales.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="La imagen representa un esquema sobre el poder de la ética, organizado en dos categorías principales: ética personal y ética profesional o laboral. Desde la ética personal, se ramifican conceptos como códigos de ética y valores empresariales, mientras que la ética profesional o laboral está vinculada a las guías estratégicas. En el centro del esquema se destacan elementos comunes como la integridad, los valores universales, los derechos y los deberes, que funcionan como pilares compartidos entre ambas dimensiones éticas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
