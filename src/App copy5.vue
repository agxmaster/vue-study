<!-- 双向绑定 方式及v-model 修饰符 -->

<script setup>
 import { reactive } from 'vue';
 import { ref } from 'vue';

 let student = reactive({
  name:"jack",
  desc :"<h3> 我式来自中国的小朋友！</h3>"
 })

 let age = ref(20)
 let nickname = ref("jack")
</script>

<template>
 <!-- v-text 将数据采用纯文方式填充到空元素  -->
 <div v-text="student.name"></div>

 <!-- html标签会直接输出 -->
 <div v-text="student.desc"></div>

 <!-- v-text填充的必须是空元素 非空会报错  -->
 <!-- <div v-text="student.desc">水电费水电费都是</div> -->

 <!-- v-html 会渲染html标签 -->
 <div v-html="student.desc"></div>

 <!-- {{  }} 插值表达式 直接输出 不会渲染 同v-text 但是不要求空标签 -->
 <div>这是一个div {{ student.desc }}</div>

 <!-- v-model 双向绑定数据 视图和model数据源同步，一般在表单中使用 -->
 <div>v-model<input type="text" v-model="student.name"></div>

 <!-- view修改后age变成string -->
 <div>v-model <input type="text" v-model="age"></div>
 <!-- .number 可以转成number 如果输入无法转成数字则不会修改数据源 -->
 <div>v-model.number <input type="text" v-model.number="age"></div>
 <!-- html语法 type="number" 同 v-model.number 一样的效果-->
 <div>type="number" <input type="number" v-model="age"></div>

 <!-- v-model.trim 去掉收尾空白字符 -->
 <div>v-model.trim <input type="text" v-model.trim="nickname"></div>

 <!-- .lazy onchange时修改而不是在oninput时修改数据源 -->
 <div>v-model.lazy <input type="text" v-model.lazy="nickname"></div>

</template> 
