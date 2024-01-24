<!-- v-if v-else-if v-else  v-show -->
<script>
export default{
  data : () => ({
    isShow :false, //是否现实
    age:20,
    week:1
  })
}


</script>

<template>
    是否现实: <input type="checkbox" v-model="isShow"> <br>
  <h3 v-if="isShow">标题h3</h3>
<hr>
 
年龄{{age}}: <input type="range" min="0" max="100" v-model="age">
<h3 v-if="age < 18">未成年</h3>
<h3 v-else-if="age < 35">中年</h3>
<h3 v-else>老年</h3>




<hr>

年龄{{week}}: <input type="range" min="0" max="7" v-model="week">

<!-- v-if 可以作用在template上 template作为包装元素不起任何效果 -->
<template v-if="week == 1 || week==5">
<h1>可以游泳</h1>
</template>
<template v-else>
<h1>不可以游泳</h1>
</template>

<hr>
 <!-- v-show = false是设置 display:none -->
 <h3 v-show="isShow">标题h3</h3>
  <hr>

</template> 


<style>
button{
  border : none;
  padding :15px 20px;
}
</style>