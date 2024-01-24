<!-- 事件绑定v-on 或者 @  修饰符-->
<script setup>
import { ref } from 'vue';

function say(name){
  window.alert("你好" + name)
}

function say2(name){
  console.log("你好" + name)
}

function eventPrevent(){
  //阻止事件默认行为
  event.preventDefault()
}
 
</script>

<template>

<!-- .prevent 修饰符 阻止了超链接的默认行为 -->
<a href="http://www.baidu.com" @click.prevent="say('baidu')">baidu</a>


<!-- 产生了事件冒泡 dev 和button都执行了say2 -->
<div class="divArea" @:click="say2('div')"> 
  <button v-on:click="say2('button')">冒泡</button>
</div>

<!-- .stop 防止事件冒泡 -->
<div class="divArea" @:click="say2('div')"> 
  <button v-on:click.stop="say2('button')">阻止冒泡</button>
</div>

<hr>

<!-- .self 只在该元素上点击有效  子元素无效-->
<div class="divArea"  @:click.self="say('div-1')">
  <button>普通按钮</button>
</div>

<hr>
<div class="divArea"  @:click="say2('div-3')">
  <!-- .capture 添加监听器， 当产生冒泡时先触发该元素事件 如果有多个该修饰符 则由外向内触发 -->
  <div class="divArea"  @:click.capture="say2('div-2')">
    <div class="divArea"  @:click.capture="say2('div-1')">
      <button>普通按钮</button>
    </div>
  </div>
</div>

<hr>

<a href="http://www.baidu.com" @click="eventPrevent">baidu</a>
<br>
<!-- 不阻止浏览器默认行为 -->
<a href="http://www.baidu.com" @click.passive="eventPrevent">baidu</a>


</template>




<style>
.divArea{
  border : 1px solid blue;
  padding :30px;
}
</style>