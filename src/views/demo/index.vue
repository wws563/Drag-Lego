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
        <DragAndDrop />
      </var-tab-item>
      <var-tab-item>
        <DragAndDropBySetup />
      </var-tab-item>
      <var-tab-item> 3 </var-tab-item>
    </var-tabs-items>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DragAndDrop from "@/components/dragdrop/DragAndDrop.vue";
import DragAndDropBySetup from "@/components/dragdrop/DragAndDropBySetup.vue";

export default defineComponent({
  name: "App",
  data: () => {
    return {
      active: 0,
    };
  },
  components: {
    DragAndDrop,
    DragAndDropBySetup,
  },
});

</script>

<style lang="scss">

.tab-item-continer {
  background-color: #cccccc;
  padding-bottom:30px
}
</style>
