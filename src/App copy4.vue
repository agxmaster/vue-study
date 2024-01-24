<!-- 双向绑定 -->

<script setup>
 
 //引入reactive函数 来申明响应式对象 只对 对象、数组、map、set 有效
 import {reactive} from 'vue'
 
 //引入ref 来申明任意类型响应式数据 需要通过.value获取数据
 import { ref } from 'vue';


  //使用reactive 函数申明基础类型不具备响应式
  //let account = reactive('Abc')
  
  let account = ref('Abc')


 //修改普通数据源，不会修改view的数据，不具备响应式
 function changeAccount(){
  // ref申明后 account 无法直接使用
  // account += '='
  account.value += '='
  console.log(account)
 }

 //使用 reactive函数来申明对象类型数据源 具备响应式
 let emp =reactive({
  salary : 7000,
  name : 'Jack'
 })

 function changeEmp(){
  emp.salary += 100
  console.log(emp)
 }

  //ref 申明对象 也具备响应式
 let stu = ref({
  name :"jack",
  age :30
 })
 
 function changeStuAge(){
  stu.value.age ++
 }
</script>

<template>
  <h1>{{ account }}</h1>
  <button @click="changeAccount">点我改账号</button>
  <h1>{{ emp }}</h1>
  <button @click="changeEmp">点我改薪资</button>
  <h1>{{ stu }}</h1>
  <button @click="changeStuAge">点我改年龄</button>

</template>
