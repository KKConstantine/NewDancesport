<template>
    <div>
        你好
        <br>
        <button style="background-color: aqua;" @click="show">你坏</button>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();
const show = () => {
    router.push('/')
}

</script>