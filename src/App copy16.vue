<!-- 计算属性 函数是显示调用 计算属性是以来数据源变更调用 -->
<script setup>
import { computed, ref } from 'vue';

let age = ref(20)


//年龄阶段 计算属性
let ageStage = computed(() => {
  if (age.value < 18){
    return '未成年'
  }else if (age.value < 30){
    return '中年'
  }else{
    return '老年'
  }
})



let birthday = ref('')
let constellation = computed(()=>{
  let birArr = birthday.value.split('-')
  let month = parseInt(birArr[1])
  let day = parseInt(birArr[2])

  switch(month){
    case 1:
    if (day<=19){
      return '摩羯座'
    }else{
      return '其他星座'
    }
    default:
      return '其他星座'
  }
})
</script>
<template>

  <div>
    年龄: <input type="number" v-model.lazy="age">

    <!-- 模版中写表达式  但是不建议 -->
    <h4> 年龄阶段: {{ age < 18 ? '未成年' : '成年' }}</h4>
  </div>

  <hr>
  <div>
    年龄: <input type="number" v-model.lazy="age">

    <!-- 模版中写表达式  但是不建议 -->
    <h4> 年龄阶段: {{ ageStage }}</h4>
  </div>

  <hr>
  <div>
    <input type="date" v-model="birthday">
    <h4>星座: {{ constellation }}</h4>
  </div>
</template>