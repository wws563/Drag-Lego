<template>
	<div>
		<h1>Home2</h1>
	<!-- <div class="markdown-body" v-html="content"></div> -->
	<!-- <div v-html="redame2"></div> -->
	<readme></readme>
	</div>
</template>

<script lang="ts">
import { defineComponent,Ref,ref } from "vue";
import {marked} from 'marked';
import readme from '@/assets/README.md';

export default defineComponent({
  name: "App",
	components:{
		// readme
	},
	setup(){
		console.log(readme);
		// const content = ref(marked.parse(readme))
		return {
			//content
			// readme2
			}
	},
  // data: () => {
  //   return {
	// 		content:marked("# 11")
  //   }
  // },
	// computed:{
	// 	md2html(){
	// 		return marked(this.content)
	// 	}
	// }
});

</script>