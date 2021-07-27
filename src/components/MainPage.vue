<template>
 <div class="box">
  <router-view name='header'/>

  <p>Hello, welcome to main page!</p>

  <input type="text" v-model="userId" />

  <router-link :to="`/user/${userId}`">
    Go to the user using the nested route
  </router-link>

  <router-link :to="{ name: 'user', params: { id: userId }}">
   Go to the user using the named route
  </router-link>
 </div>
</template>

<script>
export default {
  data() {
    return {
      userId: 'Vlad',
    };
  },
};
</script>

<style scoped>
.box {
  display: grid;
}

.box input {
  width: 200px;
}
</style>
