<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Principios de predimensionamiento
    
    .bg7.p-lg-5.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.col-md-2.col-4
          img.mb-4.mb-lg-0.mb-md-0(src="@/assets/curso/tema4/1.svg")
        .col-lg-11.col-md-9.col-11
          p.mb-0 El prediseño es el proceso de determinar el tamaño preliminar de los componentes del sistema solar fotovoltaico (FV) aislado (#[em Off - Grid]) a partir de la demanda energética diaria y el recurso solar local.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema2/sub.svg')")
      h3.mb-0 El factor de seguridad (FS) y pérdidas del sistema
    
    p.mb-5(data-aos="fade-right") Antes de dimensionar cualquier componente, es crucial ajustar la demanda bruta para tener en cuenta las ineficiencias y los riesgos operativos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        TabsC.color-primario
          .bg8.p-lg-5.p-4(titulo="Pérdidas por Eficiencia (PE)")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-12
                .row.justify-content-center.align-items-start.my-lg-0.my-4
                  .col-lg-5.col-md-8.col-10.mb-lg-0.mb-4
                    img(src='@/assets/curso/tema4/2.png')
                  .col-lg-7
                    p.mb-4 En un sistema fotovoltaico real, la energía se pierde en cada etapa de conversión. Estas pérdidas deben ser compensadas aumentando la demanda de diseño:
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Pérdidas del banco de baterías:] la carga y descarga de las baterías no es 100 % eficiente (pérdidas por el ciclo de Coulomb).
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Pérdidas del inversor:] la conversión de DC a AC introduce pérdidas (generalmente 5 % al 15 %).
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Pérdidas por cableado:] resistencia de los cables (generalmente 2 % al 3 %).
          .bg8.p-lg-5.p-4(titulo="Factor de Seguridad (FS)")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-12
                .row.justify-content-center.align-items-start.my-lg-0.my-4
                  .col-lg-5.col-md-8.col-10.mb-lg-0.mb-4
                    img(src='@/assets/curso/tema4/3.png')
                  .col-lg-7
                    p.mb-4 Degradación del módulo: Los paneles solares pierden eficiencia con el tiempo (típicamente se espera una pérdida de 0.5 % a 1 % anual).
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Juntas de Acción Comunal (JAC):] a menudo son el vehículo legal y social para el manejo de los sistemas.
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Suciedad y sombras (#[em mismatches]):] polvo, hojas y pequeñas sombras que reducen la producción real.
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 #[b Imprevisión de demanda:] pequeños aumentos de consumo no previstos en el diagnóstico.

    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema2/sub.svg')")
      h3.mb-0 Cálculo de la demanda de diseño (WhD)
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-5.mb-lg-0.mb-4
        .bg10.p-4
          p.mb-4.my-lg-4 La demanda bruta calculada se ajusta por estas pérdidas para obtener la demanda neta que la matriz solar debe generar:
          .bg8.p-4.mb-lg-3
            h4.mb-0 Demanda de Diseño (WhD) = Demanda Bruta (WhBruta) × (1 + FS)  / (1 − Pérd.)
      .col-lg-3.col-md-7.col-10
        img.mb-lg-0.mb-4(src='@/assets/curso/tema4/4.svg')
      .col-lg-4
        img.mb-5.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/5.svg')
        p.mb-0 En la práctica, se suele utilizar un factor global de pérdidas que oscila entre el 20 % y el 30 % para dimensionar la matriz solar y el banco de baterías.

    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1 Recurso crítico: Horas Solares Pico (HSP)
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-9
        p.mb-5 El principal insumo para dimensionar la matriz solar es el recurso solar disponible en la ubicación del proyecto.
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-5.pe-lg-0.col-md-7.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/6.svg')
          .col-lg-7.ps-lg-0.mb-0
            .bg8.p-4
              ul.lista-ul.mb-0.mx-lg-2.mt-lg-1.mb-lg-0
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Definición de HSP (kWh/m#[sup 2]/día):] las Horas Solares Pico (HSP) son el número de horas equivalentes en las que la irradiancia solar tiene una intensidad constante de 1000 W/m#[sup 2]. Es una métrica estandarizada para cuantificar el recurso solar diario.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Obtención del dato:] las HSP se obtienen de bases de datos meteorológicas globales (ejemplo: NASA SSE, atlas de radiación solar) y se promedian mensualmente.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Criterio de diseño:] para garantizar el suministro durante todo el año, el diseñador utiliza el valor de HSP correspondiente al mes de menor radiación (el mes crítico o peor caso).
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema4/7.png')

    .row.justify-content-center.align-items-stretch.mb-0(data-aos="fade-left")
      .col-lg-5.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4.mb-md-0
        .bg3.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema4/8.png')
          h3.mb-4.text-center.text-white Predimensionamiento de la matriz solar (paneles FV)
          p.mb-0.text-white El tamaño de la matriz solar (potencia pico en Wp) se determina relacionando la demanda de diseño (WhD) con el recurso solar (HSP).
      .col-lg-5.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-0
        .bg4.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema4/9.png')
          h3.mb-4.text-center Predimensionamiento del banco de baterías
          p.mb-lg-4 El banco de baterías determina la autonomía (cuántos días puede operar el sistema sin sol).
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Días de autonomía:] generalmente 1 a 3 días en ZNI.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b DoD:] porcentaje máximo de la capacidad de la batería que se utiliza (ejemplo 50 % para plomo - ácido, 80 – 90 % para litio).

</template>

<script>
export default {
  name: 'Tema4',
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
