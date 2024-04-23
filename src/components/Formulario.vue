<script setup lang="ts">
type Pais = {
  codigo: string;
  nombre: string;
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
</script>

<template>
  <form class="formulario">
    <div class="campo">
      <label for="ciudad">Ciudad</label>
      <input
          type="text"
          id="ciudad"
          placeholder="Ciudad"
      >
    </div>
    <div class="campo">
      <label for="pais">País</label>
      <select id="pais">
        <option value=""> Seleccione el País </option>
        <option v-for="pais in paises" :value="pais.codigo">{{ pais.nombre }}</option>
      </select>
    </div>
    <input type="submit" value="Consultar Clima">
  </form>
</template>

<style scoped>

</style>