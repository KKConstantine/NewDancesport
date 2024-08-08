<template>
    <div>
        早上坏
        <br>
        <button style="background-color: aqua;" @click="show">晚上坏</button>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();
const show = () => {
    router.push('/One')
}

</script>