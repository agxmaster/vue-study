<!-- 普通类型数据 不具备响应式 -->
<script setup>
 
 //普通变量的数据源
 let account = 'Abc'

 //修改普通数据源，不会修改view的数据，不具备响应式
 function changeAccount(){
  account += '='
  console.log(account)
 }

 //普通数据源对象
 let emp ={
  salary : 7000,
  name : 'Jack'
 }
 
 function changeEmp(){
  emp.salary += 100
  console.log(emp)
 }
</script>

<template>
  <h1>{{ account }}</h1>
  <button @click="changeAccount">点我改账号</button>
  <h1>{{ emp }}</h1>
  <button @click="changeEmp">点我改薪资</button>

</template>
