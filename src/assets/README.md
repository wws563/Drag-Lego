# Drag-Lego
>拖拽生成页面的一个Demo，像乐高一样拼搭，起名Drag-Lego

## 缘起

- 低代码，拖拽生成简单页面是常见需求。
- 通过制作这样一个工具，提升自己的能力。

## 技术栈

- Vue3
- TS
- VARLET组件库

### VARLET组件使用

- 使用VARLET组件推荐的[unplugin-vue-components](https://varlet.gitee.io/varlet-ui/#/zh-CN/importOnDemand)进行自动引入和注册。
- 根据[适配说明](https://varlet.gitee.io/varlet-ui/#/zh-CN/browserAdaptation)进行桌面端适配。

<!-- 图片插入方式 ![Image text](https://raw.githubusercontent.com/hongmaju/light7Local/master/img/productShow/20170518152848.png) -->

## 实现一个拖拽操作

- 参考[MDN Drag说明](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)

> 要使其他的 HTML 元素可拖拽，必须做三件事：
>- 将想要拖拽的元素的 draggable 属性设置成 draggable="true"。
>- 为 dragstart (en-US) 事件添加一个监听程序。
>- 在上一步定义的监听程序中 设置拖拽数据。

### 踩坑记录

1. js的拖拽api在ondragover时需要阻止默认行为（因为默认不让drop），之后才能让ondrop事件正常触发。
2. drop-item的容器在拖入内容（即ondragenter）时，需要给所有子元素增加css——pointer-events:none以禁用内部元素的鼠标事件，避免子元素触发ondragleave事件。该css在ondragleave触发时去除。
3. 生成的dist无法直接部署。[解决办法](https://www.jianshu.com/p/597626a6cb83)

##### 参考文章
[Drag&Drop 拖放API简介以及在React中的实践](https://juejin.cn/post/6844903849115779086)

to be continued......

