<script setup>
import { ref } from 'vue';


let account= ref('')
let password= ref('')

</script>
<template>
<input type="text" v-model="account"><br>
<input type="password" v-model="password"><br>
<button>登陆</button>
</template>

<style>
</style>