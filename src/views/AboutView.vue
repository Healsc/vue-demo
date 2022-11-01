<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{a}}</div>
  </div>
</template>

<script setup>
const a = 1;
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
