<!-- 按键修饰符 -->
<script setup>
 function showMessage(message){
  window.alert(message)
 }
</script>

<template>
  <!-- 按键别名 .enter .tab .esc .space .up .down .left .right .delete  -->
  <!-- 系统修饰符 .ctrl .alt .shift .meta  -->
  <!-- 精准修饰符 .exact  -->


按键中包含enter:<input type="text" @keydown.enter="showMessage('enter')">
<hr>

按键中包含shift + enter:<input type="text" @keydown.enter.shift="showMessage('shift + enter')">
<hr>
按键只有shift + enter:<input type="text" @keydown.enter.shift.exact="showMessage('shift + enter')">

<hr>
<hr>
<!-- 鼠标按键别名 .left .right .middle -->
<button @mousedown.left="showMessage('mouse left ')"> 按键包含鼠标左键 </button>
<hr>
<button @mousedown.right="showMessage('mouse right ')"> 按键只有鼠标左键 </button>



</template>




<style>
.divArea{
  border : 1px solid blue;
  padding :30px;
}
</style>