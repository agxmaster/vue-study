<!-- 事件绑定 v-on 或者 @ -->
<script setup>
import { ref } from 'vue';

 let volume = ref(5)

 function addvolume(){
  if(volume.value === 10){
    return 
  }
  volume.value ++
 }

</script>

<template>

<h3>当前音量 {{ volume }}</h3>

<button v-on:click="addvolume">添加音量</button>
</template> 


<style>
button{
  border : none;
  padding :15px 20px;
}
</style>