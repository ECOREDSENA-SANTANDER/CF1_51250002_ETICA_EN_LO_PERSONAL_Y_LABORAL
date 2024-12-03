<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ética profesional y laboral
    
    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 Ética profesional
    
    p.mb-5(data-aos="fade-right") Se refiere al conjunto de actitudes y comportamientos que un individuo adopta al formar parte de una organización, basados en normas y valores que deben respetarse para promover un ambiente de trabajo íntegro y armonioso.

    .row.fondo1.align-items-center.p-3.mb-5(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
    
        .row.justify-content-center.align-items-center
          .col-lg-12.p-2
            .titulo-sexto.color-secundario.mb-4
              h5 Figura 2. 
              | Ética profesional
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-11
                img.mb-3(src='@/assets/curso/temas/img17.png', alt='La imagen presenta una organización conceptual sobre la ética profesional, estructurada en cuatro áreas principales: valores empresariales, principios empresariales, misión y visión corporativa, y recursos humanos. Incluye aspectos como honestidad, transparencia, igualdad, calidad y profesionalidad, que guían el comportamiento corporativo. También se destacan las reglas básicas de las empresas, que abarcan cuestiones personales, sociales, políticas internas y relaciones con accionistas, todas incluidas en el reglamento interno como derechos y obligaciones de los trabajadores.')
                figcaption Fuente: SENA
       
        .row.justify-content-center.align-items-center(data-aos="fade-right")
          .col-lg-12
            .bg4.p-lg-4.p-md-5.p-5
              .row.justify-content-around.align-items-center
                .col-lg-12
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-3.d-none.d-lg-block.ps-lg-5
                      img.img-a.img-t.mbt(src="@/assets/curso/temas/img18.svg")
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0
                          h3.mb-3 ¿Qué es la ética profesional?
                          p.mb-2 Para complementar este tema diríjase al video ¿Que es la ética profesional?
                        .col-lg-auto.pe-lg-5
                          a.boton.color-acento-botones(href="https://youtu.be/xsXtge7aCyc?si=xh0jJ01hSYmqcZHg" target="_blank")
                            span.ps-2.pe-2 Ir al sitio
                            i.fas.fa-video
        
    .etiqueta.p-2.d-flex.mb-4(data-aos="fade-left")
      h4.mb-0.ps-5.pe-5 Ética laboral
    
    p.mb-4(data-aos="fade-right") Desde la perspectiva filosófica, la ética es entendida como una guía que orienta al ser humano hacia decisiones justas y encaminadas a la búsqueda de la felicidad. En el contexto empresarial, la ética laboral se traduce en la búsqueda inteligente del bienestar tanto de los empleados como de los demás grupos de interés, conocidos como #[em stakeholders], que incluyen tantos actores internos como externos relacionados con la organización.
    p.mb-5(data-aos="fade-left") Las cuestiones éticas son esenciales en toda organización, ya que guían las decisiones y acciones hacia empleados, sociedad y accionistas. En ellas explora su impacto en ámbitos personales, sociales y corporativos, destacando la importancia de actuar con integridad y responsabilidad.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-6.col-7.mb-4.pe-0(data-aos="fade-left" data-aos-delay="500")
          img(data-aos="zoom-in-left")(src="@/assets/curso/temas/img21.png", alt='Imagen decorativa.')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Cuestiones personales")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Estas cuestiones surgen en el ámbito individual dentro de cualquier organización y plantean dilemas éticos fundamentales. Se abordan a través de dos preguntas clave: ¿Es correcto tratar a las personas como meros medios para alcanzar fines? ¿Es posible abstenerse de hacerlo? Estas interrogantes reflejan la necesidad de equilibrar el respeto por la dignidad humana con los objetivos organizacionales.
          .row.col-xl-11.m-auto(titulo="Cuestiones sociales")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 En este nivel, las cuestiones éticas están vinculadas con las instituciones fundamentales de la sociedad. Se formulan preguntas sobre la legitimidad de ciertas acciones en contextos sociopolíticos, como: ¿Es ético que el gobierno chino encarcele o elimine a quienes se oponen a su régimen? ¿Es adecuado que Estados Unidos mantenga relaciones comerciales normales y permanentes con China, considerando sus violaciones a los derechos humanos? Estas cuestiones examinan las implicaciones éticas de las decisiones políticas y económicas en la esfera global.
          .row.col-xl-11.m-auto(titulo="Cuestiones de políticas internas")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Se relacionan con el establecimiento de directrices y prácticas éticas dentro de una organización en sus relaciones con empleados, proveedores, clientes, accionistas y otros grupos de interés. Estas cuestiones incluyen ejemplos como la obligación de informar a los clientes sobre posibles riesgos asociados con los productos. El objetivo es garantizar un tratamiento justo y transparente en las interacciones comerciales y laborales.
          .row.col-xl-11.m-auto(titulo="Cuestiones referentes a los accionistas")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Enfocadas específicamente en la relación y el tratamiento ético hacia los accionistas, tenedores de bonos y otros inversores, estas cuestiones buscan asegurar políticas empresariales que protejan sus intereses. Ejemplos incluyen garantizar la divulgación de información sobre posibles riesgos y mantener una comunicación honesta y oportuna. Este enfoque subraya la importancia de la responsabilidad corporativa hacia quienes confían en la empresa para invertir su capital.
          
    .row.fondo2.align-items-center.p-3(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
     
        .etiqueta1.p-2.d-flex.mb-4(data-aos="fade-left")
          h4.mb-0.ps-5.pe-5 La empresa y los reglamentos internos
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5(data-aos="fade-right")
            p.mb-4 Una empresa es una organización conformada por personas que trabajan en conjunto para alcanzar objetivos específicos, con el propósito de obtener beneficios mutuos.
            p.mb-4 El marco que regula las relaciones laborales dentro de la organización se establece en un documento denominado reglamento interno, este instrumento define las normas que garantizan un ambiente de respeto, orden y armonía en el entorno laboral.
            .bg2.p-4.p-lg-4.p-md-4
              p.mb-0 Los reglamentos internos son de cumplimiento obligatorio para los trabajadores e incluyen tanto obligaciones como prohibiciones, su objetivo principal es mantener el equilibrio necesario para la sostenibilidad y el buen funcionamiento de la organización.
          .col-lg-5(data-aos="fade-left")
            .titulo-sexto.color-secundario.mb-4
              h5 Figura 3. 
              | Reglamento interno
            img.mb-3(src='@/assets/curso/temas/img22.png', alt='La imagen presenta una estructura relacionada con el reglamento interno, destacando aspectos fundamentales organizados en tres categorías. La primera aborda la admisión o ingreso de los trabajadores, especificando aspectos como jornadas laborales, normas de asistencia y designación de personal encargado de asuntos laborales. Las otras dos secciones se enfocan en normas de permanencia en el puesto, incluyendo permisos, licencias, inasistencias, descansos semanales, derechos y obligaciones tanto del empleador como del empleado, y normas esenciales de seguridad e higiene en el entorno laboral. ')
            figcaption Fuente: SENA

    separador
    #t_2_1.titulo-segundo.mb-4
      h2 2.1 Los valores y principios empresariales
    
    p.mb-4(data-aos="fade-right") El proyecto de cualquier organización se fundamenta en aspectos tangibles e intangibles, los cuales le permiten definir:

    .row.fondo3.align-items-center.p-3.mb-5(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

        .row.justify-content-center.align-items-center(data-aos="fade-right")
          .col-lg-3.col-md-7.col-7
            img.img-a.img-t.mbt1.d-none.d-lg-block(src="@/assets/curso/temas/img23.png")
          .col-lg-5
            ul.lista-ul.mb-4
              li.d-flex.mb-1
                i.fas.fa-circle
                p.mb-0 ¿A dónde quiere llegar?
              li.d-flex.mb-1
                i.fas.fa-circle
                p.mb-0 ¿Qué desea ser?
              li.d-flex.mb-1
                i.fas.fa-circle
                p.mb-0 ¿Cómo alcanzar sus metas?
              li.d-flex.mb-1
                i.fas.fa-circle
                p.mb-0 ¿Qué estrategias empleará para lograrlas?
            p.mb-4 Los aspectos intangibles adquieren una relevancia crucial, ya que son la base para alcanzar el éxito en las diversas áreas de la empresa, estos aspectos se manifiestan en los valores y principios empresariales, que no solo orientan la conducta de las personas, sino que también reflejan, de manera particular, el liderazgo del gerente.

    .cajon.color-primario.p-4.mb-5(data-aos="fade-right")
      p.mb-0 La declaración de principios y valores empresariales actúa como una guía estratégica que permite a las organizaciones moldear su identidad, determinar cómo actuarán y establecer con claridad las conductas y prácticas que no serán aceptadas en su interior. Este marco contribuye a consolidar una cultura organizacional coherente y alineada con sus objetivos.

    .row.fondo2.align-items-center.p-3(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
     
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            .titulo-sexto.color-secundario.mb-4
              h5 Figura 4. 
              | Valores y principios empresariales
            .row.justify-content-center.align-items-center
              .col-lg-6
                img.mb-3(src='@/assets/curso/temas/img24.png', alt='La imagen organiza dos listas relacionadas con los valores y principios fundamentales en el ámbito organizacional. Los valores incluyen honestidad, transparencia, integridad, lealtad, respeto, innovación, atención al cliente, calidez, responsabilidad, y ética y moral. Los principios abarcan igualdad, imparcialidad, continuidad, calidad, mejora continua, participación, eficiencia, eficacia y celeridad. Ambos conceptos se presentan como pilares clave para la misión empresarial según la fuente, identificada como un concepto de misión de Promonegocios.')
                figcaption Fuente: SENA
</template>

<script>
export default {
  name: 'Tema2',
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
