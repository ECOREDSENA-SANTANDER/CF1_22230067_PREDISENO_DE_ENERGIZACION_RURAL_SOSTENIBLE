<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5(data-aos="fade-right")         
      .col-lg-12
        img(src='@/assets/curso/intro/1.png')
    
    p.mb-lg-5.mb-4(data-aos="fade-left") Bienvenidos al componente virtual “Diagnóstico social y energético de usuario rural”. Este documento ha sido elaborado con el propósito de orientar de manera clara y estructurada el desarrollo del proceso formativo, brindando la información necesaria para comprender y aprovechar integralmente este programa de formación

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/intro/2.png')
      .col-lg-7
        p.mb-4 En su contenido se presentan los objetivos de aprendizaje, la estructura y organización de los contenidos, las actividades formativas que se desarrollarán, los criterios y métodos de evaluación, así como los recursos de apoyo disponibles para acompañar el proceso de aprendizaje.
        .bg1.p-4
          p.mb-0 Este componente aborda de manera articulada el análisis social y energético del usuario rural, destacando la importancia del contexto comunitario, las condiciones socioeconómicas y los patrones de consumo energético como insumos fundamentales para la formulación de soluciones de energización sostenibles. A través de herramientas metodológicas y técnicas, se promueve el desarrollo de competencias para el levantamiento y análisis de información, la estimación de la demanda energética y la toma de decisiones fundamentadas, orientadas a la planificación responsable y sostenible de proyectos de energización en entornos rurales.

    .row.justify-content-center.align-items-center(data-aos="fade-left")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/96mU7iEYc7U?si=2HgUocfwDMRiIkhl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Diagnóstico social y energético de usuario rural

</template>

<script>
export default {
  name: 'Introduccion',
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
