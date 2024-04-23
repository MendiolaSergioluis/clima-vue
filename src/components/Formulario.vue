<script setup lang="ts">
import {reactive, ref} from "vue"
import type {Busqueda, Pais} from "@/helpers/Types";
import Alerta from "@/components/Alerta.vue";

const emit = defineEmits<{
  (e: 'obtener-clima', payload: Busqueda): void
}>()

const error = ref<string>('')
const paises: Pais[] = [
  {codigo: 'US', nombre: 'Estados Unidos'},
  {codigo: 'MX', nombre: 'México'},
  {codigo: 'AR', nombre: 'Argentina'},
  {codigo: 'CL', nombre: 'Chile'},
  {codigo: 'CO', nombre: 'Colombia'},
  {codigo: 'CR', nombre: 'Costa Rica'},
  {codigo: 'ES', nombre: 'España'},
  {codigo: 'PE', nombre: 'Perú'}
]
const busqueda: Busqueda = reactive({
  ciudad: '',
  pais: '',
})
const consultarClima = (): void => {
  if (Object.values(busqueda).includes('')) {
    error.value = 'Todos los campos son obligatorios'
    setTimeout(() => {
      error.value = ''
    }, 3000)
    return
  }
  // Código para traer los datos de la API
  emit('obtener-clima', busqueda)
}
</script>

<template>
  <form class="formulario" @submit.prevent="consultarClima">
    <div class="campo">
      <label for="ciudad">Ciudad</label>
      <input
          type="text"
          id="ciudad"
          placeholder="Ciudad"
          v-model="busqueda.ciudad"
      >
    </div>
    <div class="campo">
      <label for="pais">País</label>
      <select id="pais" v-model="busqueda.pais">
        <option value=""> Seleccione el País</option>
        <option v-for="pais in paises" :value="pais.codigo">{{ pais.nombre }}</option>
      </select>
    </div>
    <input type="submit" value="Consultar Clima">
  </form>
  <Alerta v-if="error">{{ error }}</Alerta>
</template>

<style scoped>

</style>