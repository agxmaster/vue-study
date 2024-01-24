<!-- app.17 -->
<script setup>
import { ref } from 'vue';


// defineProps声明接受父组件传递的属性值: 自定义属性
// 字符串数据申明 
// let propsData = defineProps(['title','error','flat'])

// 通过map接受可以定义类型 默认值 是否必填 校验函数
let propsData = defineProps({
     title:{
        type: String,
        default: 'btn',
        reqired: false,
        validator: function(){
           
        }
     },
     error:Boolean,
     flat:{
        type: Boolean,
        default: false,
        validator: function(value){
           return [false,true].includes(value)
        }
     },
     tips:{
        type:String,
        default:'tips'
     }

})
function showProps(){
    console.log(propsData.error)
    console.log(propsData.title)
    console.log(propsData.flat)
    changeErrorProps()
}

function changeErrorProps(){
    //子组件无法修改属性值 只读 waring
    propsData.error = !propsData.error
}

</script>

<template>

<button :class="{error,flat}" @click="showProps" :title="tips ">{{ title }}</button>

</template>

<style>
button{
    border:none;
    padding:  12px 25px;
}

.error{
    background-color: red;
    color: white;
}
.flat{
    box-shadow: 0 0 10px grey;
}

</style>

