<!-- 组件注册  组件需要注册 分全局和局部 -->
<!-- 父组件向子组件传递属性 子组件中属性为只读 -->
<!-- <script>
import Login from './components/Login.vue';

export default{
  // 局部注册 在当前文件可用
  components:{
    "MyLogin": Login
  }
}
</script> -->

<script setup>

  // 不需要组册直接使用
  import MyLogin from './components/Login.vue';
  import ButtonVue from './components/Button.vue'
  import { ref } from 'vue';
  
  let isError = ref(false)
  let isFlat = ref(true)
  let btnText = ref('普通按钮')

</script>

<template>
  <!-- 使用注册的组件 -->
  <MyLogin />
<hr>
  <!-- 父组件传递属性 -->
  <ButtonVue title="提交" :error="false" :flat="true" />

<hr>

主题: <input type="checkbox" v-model="isError">
阴影: <input type="checkbox" v-model="isFlat">
文本: <input type="text" v-model="btnText">

<ButtonVue :title="btnText" :error="isError" :flat="isFlat" />


</template>