<script setup lang="ts">
import Formulario from "@/components/Formulario.vue";
import Clima from "@/components/Clima.vue";
import useClima from "@/composables/useClima";
import Alerta from "@/components/Alerta.vue";
import Spinner from "@/components/Spinner.vue";

const {obtenerClima, cargando, clima, mostrarClima, error} = useClima()

</script>

<template>
  <h1 class="titulo">Buscador de Clima</h1>
  <div class="contenedor buscador-clima">
    <Formulario
        @obtener-clima="obtenerClima"
    />
    <Spinner v-if="cargando"/>
    <Alerta v-if="error">{{ error }}</Alerta>
    <Clima
        v-if="mostrarClima && !cargando"
        :clima="clima"
    />

  </div>
</template>
<style scoped>

</style>
