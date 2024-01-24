<!-- 属性绑定class 控制class 是否生效 -->
<script setup>
import { reactive } from 'vue';
import { ref } from 'vue';

  //通过对象实现
  let btnClassObject = reactive({
      error :false, //主题色
      flat:false //阴影
  })

  let capsult = ref(false); //胶囊
  let block = ref(false); //块


  //通过数组实现
  let btnTheme = ref([])
  

</script>

<template>

 <button :class="btnClassObject" width="200px;">普通按钮</button>

 <button @click="btnClassObject.error=!btnClassObject.error">error-change</button>
 <button @click="btnClassObject.flat=!btnClassObject.flat">falt-change</button>
<br>
<br>
<hr>

<input type="checkbox" v-model="capsult">胶囊
<input type="checkbox" v-model="block">块

<!-- class 是否生效通过 数据true false 控制 -->
<button :class="{'rounded':capsult, 'fullWidth':block}">按钮</button>


<br>
<br>
<hr>

<input type="checkbox" value="error"  v-model="btnTheme">主题
<input type="checkbox" value="flat" v-model="btnTheme">阴影

<!-- class 是否生效通过 数据true false 控制 -->
<button :class="btnTheme">按钮</button>

<br>
<br>
<hr>

</template> 

<style>
.error {
  background-color: red;
  color: aliceblue;
}

.flat {
  box-shadow: 0 0 8px gray;
}

.rounded {
  border-radius: 50%;
}

.fullWidth {
  width: 100px;
}
</style>