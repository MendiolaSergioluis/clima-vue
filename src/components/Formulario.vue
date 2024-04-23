<script setup lang="ts">
import { reactive } from "vue"

type Pais = {
  codigo: string;
  nombre: string;
}
type Busqueda = {
  pais: string;
  ciudad: string;
}
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
</script>

<template>
  <form class="formulario">
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
        <option value=""> Seleccione el País </option>
        <option v-for="pais in paises" :value="pais.codigo">{{ pais.nombre }}</option>
      </select>
    </div>
    <input type="submit" value="Consultar Clima">
  </form>
</template>

<style scoped>

</style>