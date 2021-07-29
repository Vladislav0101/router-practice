<template>
  <div class="box">
    <router-view />
    <router-view name="info" />

    <router-link :to="`${$route.params.id}/info`">(nested) info</router-link>

    <router-link :to="{name: 'info', params: {id: $route.params.id}}">(named) info</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style scoped>
.box{
  display: grid;
}
</style>
