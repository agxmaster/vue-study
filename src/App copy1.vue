<!-- 组合式 和 申明式 -->
<!-- 
  //选项式api

<script>

//vue实例对象 viewmodel
export default{

  //数据节点存放在data (model)
  data: ()=>({
    account : 'Abc'
  }),

  //方法节点
  methods:{
    changeAccount(){
      //this关键字获取对象
      this.account += '='
    }
  }
}
</script>

-->

<!-- 组合式api用法 script有setup -->
<!-- 大型项目建议使用组合式api -->
<script setup>

  //引用api函数
  import {ref} from 'vue'

  //响应式 数据源
  let account = ref('Abc')
  //方法
  function changeAccount(){
    //响应式数据源用法
    account.value += "="
  }
</script>
 <!-- 模版   view -->
<template>
  <!-- v-model 绑定数据源 -->
 <input type="text" v-model="account">
 <button @click="changeAccount">点我更改</button>
</template>

<style>
</style>
