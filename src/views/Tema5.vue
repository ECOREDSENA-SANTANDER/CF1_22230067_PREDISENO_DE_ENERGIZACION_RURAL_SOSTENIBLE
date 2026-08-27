<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Viabilidad ambiental inicial
    
    .row.mb-5(data-aos="fade-right")          
      .col-lg-12
        img(src='@/assets/curso/tema5/1.png')

    p.mb-5(data-aos="fade-left") La prefactibilidad integral es un documento técnico económico formal que consolida los hallazgos del diagnóstico y el prediseño para determinar si el proyecto de Energización Rural Sostenible (ERS) es viable antes de invertir en la ingeniería de detalle (fase de factibilidad). Su estructura debe ser coherente con los requisitos de entidades financiadoras como el IPSE y el FAZNI en Colombia.

    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema2/sub.svg')")
      h3.mb-0 Componente social y legal (viabilidad social)

    p.mb-5(data-aos="fade-left") Esta sección demuestra que el proyecto es necesario, aceptado y que cuenta con un marco legal para su operación futura.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Descripción del área de influencia")
            .row.justify-content-center.align-items-center
              .col-lg-12
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Ubicación geográfica, demografía y características culturales de la comunidad.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Resultados del diagnóstico social: inclusión del mapeo de actores clave y la validación comunitaria del proyecto.
          .tarjeta.color-a.p-4(titulo="Modelo de Gestión y Operación")
            .row.justify-content-center.align-items-center
              .col-lg-12
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Propuesta sobre quién operará el sistema a largo plazo (ejemplo: una cooperativa, una JAC con apoyo técnico externo).
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Propuesta de recaudo para el mantenimiento.
          .tarjeta.color-a.p-4(titulo="Viabilidad legal")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-0 Verificación de la propiedad del predio donde se instalarán los equipos y existencia de acuerdos de servidumbre (si aplica).

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema2/sub.svg')")
      h3.mb-0 Componente técnico (viabilidad técnica)

    p.mb-4(data-aos="fade-right") Aquí se justifican las soluciones tecnológicas y se demuestra que el prediseño es robusto y cumple con la normativa.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        PasosA.color-primario.mb-0(tipo="l")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7
              h4 Resumen del diagnóstico energético
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 Presentación de la demanda energética diaria total (Wh/día).
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Presentación de la curva de demanda y la potencia Máxima Instantánea (PPico).
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema5/2.png')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema5/3.png')
            .col-lg-7.text-start
              h4 Selección y justificación tecnológica
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 Justificación de la elección de la tecnología FNCER (ejemplo: solar FV, híbrido).
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Argumentación basada en recurso disponible (HSP) y la demanda.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7.text-start
              h4 Predimensionamiento de componentes
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 Cálculo de la potencia de la Matriz Solar (Wp) y número de paneles requeridos.
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 Cálculo de la capacidad del banco de baterías (autonomía y profundidad de descarga).
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Selección preliminar del inversor y controlador de carga.
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema5/4.png')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema5/5.png')
            .col-lg-7.text-start
              h4 Especificaciones técnicas preliminares
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 Analiza densidad poblacional y tipo de necesidad.
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 Alta demanda concentrada: microrred.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Baja demanda dispersa: sistema individual.
            
    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema2/sub.svg')")
      h3.mb-0 Componente económico y financiero (viabilidad económica)

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-8.mb-lg-0.mb-4
        p.mb-4 Esta es la sección donde el proyecto se traduce en costos e indicadores de rentabilidad social.
        LineaTiempoD.color-secundario.activo
          .row.justify-content-center.align-items-center.mb-0(numero="1" titulo="Estimación de inversión (CAPEX)")
            .col-lg-12
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 Costo de los equipos (módulos, baterías, inversor, cableado).
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 Costos de montaje y mano de obra.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Costos de interventoría y gestión.
          .row.justify-content-center.align-items-center.mb-0(numero="2" titulo="Estimación de Costos de Operación y Mantenimiento (OPEX)")
            .col-lg-12
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-circle-check
                  p.mb-0 Costos anuales de reemplazo de baterías y mantenimiento preventivo.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Costos administrativos del modelo de gestión propuesto.
          .row.justify-content-center.align-items-center.mb-0(numero="3" titulo="Análisis costo - beneficio (ACB)")
            .col-lg-12
              ul.lista-ul.mb-0
                li.d-flex.mb-4
                  i.fas.fa-circle-check
                  p.mb-0 Cálculo del Valor Presente Neto (VPN) y Tasa Interna de Retorno (TIR) del proyecto.
                .bg11.p-4
                  p.mb-0 #[b Nota:] en proyectos de ERS con alto impacto social y bajos ingresos, los cálculos financieros a menudo se enfocan en la Viabilidad Social del Gasto y la capacidad de apalancamiento con fondos públicos (FAZNI), más que en la rentabilidad privada.
          .row.justify-content-center.align-items-center.mb-0(numero="4" titulo="Presupuesto consolidado y solicitud de financiación")
            .col-lg-12
              p.mb-0 Resumen de los montos requeridos y la fuente de financiación a la que se postulará.
      .col-lg-4.col-md-7.col-10
        img(src='@/assets/curso/tema5/6.png')

</template>

<script>
export default {
  name: 'Tema5',
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
