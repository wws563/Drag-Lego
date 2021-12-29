<template>
  <div>
    <var-tabs
      class="vertical-tabs"
      elevation
      color="#2979ff"
      active-color="#fff"
      inactive-color="hsla(0, 0%, 100%, .6)"
      v-model:active="active"
    >
      <var-tab>从一个容器移动到另一个容器</var-tab>
      <var-tab>从一个容器移动到另一个容器（bySetup）</var-tab>
      <var-tab>选项3</var-tab>
    </var-tabs>
    <var-tabs-items
      class="tab-item-continer"
      :can-swipe="false"
      v-model:active="active"
    >
      <var-tab-item>
        <DragAndDorp />
      </var-tab-item>
      <var-tab-item>
        <DragAndDorpBySetup />
      </var-tab-item>
      <var-tab-item> 3 </var-tab-item>
    </var-tabs-items>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DragAndDorp from "./views/demo/DragAndDorp.vue";
import DragAndDorpBySetup from "./views/demo/DragAndDorpBySetup.vue";

export default defineComponent({
  name: "App",
  data: () => {
    return {
      active: 0,
    };
  },
  components: {
    DragAndDorp,
    DragAndDorpBySetup,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tab-item-continer {
  background-color: #cccccc;
}
</style>
