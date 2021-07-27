<template>
  <header>
    Header
    <router-link :to="{name: 'main'}" />
  </header>
</template>

<style scoped>
header{
  width: 100vw;
  height: 80px;
  background-color: aqua;
  color: brown;
  text-align: center;
}
</style>
