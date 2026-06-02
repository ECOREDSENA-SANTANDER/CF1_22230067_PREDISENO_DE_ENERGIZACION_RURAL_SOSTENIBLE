<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-left") El componente de formación tiene como propósito fundamental desarrollar la capacidad para elaborar la prefactibilidad integral de proyectos de Energización Rural Sostenible (ERS) en las Zonas No Interconectadas (ZNI) de Colombia. Se estructura en tres ejes estratégicos: el marco regulatorio, en el cual se analizan las funciones de entidades como el IPSE y el FAZNI y se sustenta el uso de Fuentes No Convencionales de Energía Renovable (FNCER); el diagnóstico de la demanda, orientado a la cuantificación de las necesidades energéticas en Wh/día y a la identificación del pico de potencia (Ppico); y, finalmente, el diseño y la gestión, que integra conceptos como el Factor de Seguridad (FS) y las Horas Solares Pico (HSP) para el predimensionamiento técnico del sistema y la formulación del Modelo de Gestión y Operación (MGO). Este enfoque integral permite asegurar la viabilidad social, técnica y económica de los proyectos, facilitando su estructuración para procesos de postulación y financiación.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.png", alt="Mapa conceptual del diagnóstico social y energético de usuario rural, que integra los fundamentos de la energización rural sostenible, el diagnóstico social comunitario, el análisis de la demanda energética, los principios de predimensionamiento y la viabilidad ambiental inicial.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
