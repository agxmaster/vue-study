<!-- 组合式  监听器 watchs(source, callback, options)-->
<script setup>
import { onMounted, reactive, ref, watch, watchEffect, watchPostEffect } from 'vue';


let account = ref('Abc')
let account2 = ref('Abc')
let account3 = ref('Abc1')
let account4 = ref('Abc2')
let account5 = ref('Abc2')

let emp =reactive({
  name: "jack",
  salary : 7000
})

let dept = reactive({
  id : '101',
  name : '销售部'
})

let region = reactive({
  id :'201',
  name :'北美洲'
})
//监听基础类型数据
watch(account, (newData,oldData) =>{
  console.log("====账号新旧值=====")
  console.log(newData);
  console.log(oldData);
})
// 监听对象属性写法 用到了getter函数
watch(
  () => emp.salary,
 (newData,oldData) =>{
  console.log("====薪资新旧值=====")
  console.log(newData);
  console.log(oldData);
})

//侦听对象
watch(
  // 如果嵌套属性值变化，也会触发该回调，但是old和new是相等的。
  emp,
 (newData,oldData) =>{
  console.log("====员工新旧值=====")
  console.log(newData);
  console.log(oldData);
})

//侦听对象 (getter)
watch(
  // 如果嵌套属性值变化，默认不会触发该回调
  ()=> dept,
 (newData,oldData) =>{
  console.log("====员工新旧值=====")
  console.log(newData);
  console.log(oldData);
})

//侦听对象 (getter)
watch(
  // 如果嵌套属性值变化，增加deep:true ，会触发该回调，但是old和new是相等的。
  ()=> region,
 (newData,oldData) =>{
  console.log("====区域新旧值=====")
  console.log(newData);
  console.log(oldData);
},{deep:true})

//多数据源监听 
watch(
  [account,region,()=> emp.salary,dept],
 ([newAccount,newRegion,newSalary,newDept],[oldAccount,oldRegion,oldSalary,oldDept])  =>{
  console.log("====组合监听新旧值=====")
  console.log("====账号新旧值=====")
  console.log(newAccount);
  console.log(oldAccount);
  console.log("====区域新旧值=====")
  console.log(newRegion);
  console.log(oldRegion);
  console.log("====薪资新旧值=====")
  console.log(newSalary);
  console.log(oldSalary);
  console.log("====部门新旧值=====")
  console.log(newDept);
  console.log(oldDept);
})


//监听基础类型数据
let stopWatchAccount2 = watch(account2, (newData,oldData) =>{
  console.log("====账号新旧值=====")
  console.log(newData);
  console.log(oldData);
})

//创建成功立即执行监听 并立即触发一次
watchEffect(()=>{
  //监听account3
  console.log(account3.value)
})


//创建成功立即执行监听 并立即触发一次
// 会报错 因为watchEffect再dom生成前执行的
// watchEffect(()=>{
//   //监听account3
//   console.log(document.getElementById("titleAccount").innerHTML)
// })

//当视图渲染成功后
onMounted(()=>{
  watchEffect(()=>{
    console.log("======account4=====")
    console.log(account4.value)
    console.log(document.getElementById("titleAccount").innerHTML)
  })

  watchEffect(()=>{
    console.log("======account5=====")
    console.log(account5.value)
    console.log(document.getElementById("titleAccount5").innerHTML)
  },{flush:"post"})

  //同{flush:"post"}
  watchPostEffect(()=>{
    console.log("======account5=====")
    console.log(account5.value)
    console.log(document.getElementById("titleAccount5").innerHTML)
  })
})
</script>

<template>
<h3>组合式监听</h3>
账号: <input type="text" v-model="account"><br>
员工薪资: <input type="text" v-model="emp.salary"><br>

<hr>
<h3>组合式监听 监听对象属性</h3>
部门名称:<input type="text" v-model="dept.name"><br>

<hr>
<h3>组合式监听 带options</h3>

区域名称:<input type="text" v-model="region.name"><br>

<hr>
<h3>组合式监听 停止监听</h3>

账号: <input type="text" v-model="account2"><br>
<button @:click="stopWatchAccount2">停止监听</button>

<hr>
<h3>组合式监听 watchEffect 创建成功立即执行一遍 并监听用到的数据源</h3>

账号: <input type="text" v-model="account3"><br>


<hr>
<h3>watchEffect 回调函数触发机制是在dom更新前</h3>

<h4 id="titleAccount"> <i>{{ account4 }}</i></h4>
账号: <input type="text" v-model="account4"><br>

<hr>
<h3>watchEffect 增加flush:"post" 回调函数触发机制是在dom后</h3>

<h4 id="titleAccount5"> <i>{{ account5 }}</i></h4>
账号: <input type="text" v-model="account5"><br>

</template>
