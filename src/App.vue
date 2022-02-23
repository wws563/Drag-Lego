<template>
  <div>
    <div>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/demo">Go to demo</router-link>
    </div>   
    <!-- <div v-for="(item,index) in router" :key="index">{{item.name}}</div> -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from './router';

export default defineComponent({
  name: "App",
  data: () => {
    return {
      active: 0,
      router: router.getRoutes()
    };
  }
});

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.tab-item-continer {
  background-color: #cccccc;
  padding-bottom:30px
}
</style>
