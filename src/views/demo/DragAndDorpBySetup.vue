<template>
  <div>
    <h1>使用setup重写</h1>
  </div>
  <div class="main">
    <div class="part">
      <div class="title">from</div>
      <div class="drag-container">
        <div
          v-for="(item, index) in dragList"
          :key="index"
          draggable="true"
          class="item drag-item"
          id="dragFirst"
          @dragstart="onDragStart(item)"
          @dragend="onDragEnd"
        >
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>

    <div class="part">
      <div class="title">to</div>
      <div
        class="drag-container drop-container"
        :class="{ actived: isDrapOver }"
        @dragenter="onDragEnter"
        @dragleave="onDragLeave"
        @dragover="onDragOver"
        @drop="onDrop"
      >
        <div v-for="item in dropList" :key="item.id" class="item drop-item"
          @mouseenter="activedDropItemId = item.id"
          @mouseleave="activedDropItemId = '-1'"
        >
          <!--关键点—— @mouseout="activedDropItemId = null"mouseleave  
          和 mouseout (en-US) 是相似的，但是两者的不同在于mouseleave 不会冒泡而mouseout 会冒泡。
          使用mouseout因为冒泡，虽然icon是item的子元素，但是从item进入icon，icon会因为mouseout触发而无法正常显示
          -->
          <var-icon
            v-show="activedDropItemId == item.id"
            class="icon-close"
            name="window-close"
            @click="onDelete(item.id)"
          />
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, reactive } from "vue";
import { Dialog } from "@varlet/ui";
import { Snackbar } from "@varlet/ui";

interface interTestData {
  id: string,
  text: string
}

export default defineComponent({
  name: "DragAndDorpBySetup",
  components: {
    //HelloWorld
  },
  setup(){
    // 获取初始数据
    const dragList:interTestData[] = reactive([
        { id: "1", text: "foo" },
        { id: "2", text: "bar" },
      ])
    const dropList:interTestData[] = reactive([])
    // 实现拖拽功能
    // const activedDragItem:Ref<interTestData> = ref({id:"",text:""}) // 疑问?如何初始化为空
    const activedDragItem:Ref<interTestData> = ref({id:'',text:''}) // 临时解决方案:赋值初始值
    const isDrapOver:Ref<boolean> = ref(false)
    const activedDropItemId:Ref<string> = ref('-1')

    const onDragStart = (item:interTestData):void => {
      activedDragItem.value = item;
      console.log(activedDragItem.value);
    }
    const onDragEnd = ():void =>{
      isDrapOver.value = false;
      activedDragItem.value = {id:'',text:''};
      console.log(activedDragItem.value);
    }
    const onDragEnter = ():void => {
      isDrapOver.value = true;
    }
    const onDragLeave = ():void => {
      isDrapOver.value = false;
    }
    const onDragOver = (e: DragEvent):void => {
      //关键点——dragover中需要阻止默认事件，才能正常监听到drop事件
      e.preventDefault();
    }
    const onDrop = ():void => {
      let dropItem = { ...activedDragItem.value }; //关键点——使用...达到复制的目的，不然就是修改引用
      dropItem.id = new Date().valueOf().toString();
      dropList.push(dropItem);
      console.log(dropList);
    }
    const onDelete = async (id: string):Promise<void> => {
      const actions = {
        confirm: () => {
          let delIndex = dropList.findIndex((d) => (d.id = id));
          dropList.splice(delIndex, 1);
          Snackbar.success("删除成功！");
        },
        cancel: () => {return},
        close: () => {return},
      };
      actions[await Dialog("是否删除？")]();
    }

    return {
      dragList,
      dropList,
      activedDragItem,
      isDrapOver,
      activedDropItemId,
      onDragStart,
      onDragEnd,
      onDragEnter,
      onDragLeave,
      onDragOver,
      onDrop,
      onDelete     
    }
  }
});
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
}
.drag-container {
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  padding: 20px;
  margin: 10px;
  width: 300px;
  height: 300px;
  background-color: rgb(226, 113, 13);

  &.actived{
     background-color: blueviolet;

    // 关键点——pointer-events禁用drag-container内部元素的鼠标事件，避免子元素触发onDragLeave事件
    & * {
      pointer-events: none;
    }
  }
}
.item {
  position: relative;
  height: 80px;
  width: 80px;
  background-color: #002234;
  margin: 10px;

  &.drag-item{
    cursor: grab;
  }
  span {
    color: #ffffff;
  }

  .icon-close {
    cursor: pointer;
    top: -10px;
    right: -8px;
    position: absolute;
    color: #ffffff;
    background-color: red;
    border-radius: 200px;
  }
}
</style>
