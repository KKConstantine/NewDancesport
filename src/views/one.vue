<template>
    <div>
        我好
        <br>
        <button style="background-color: blanchedalmond;" @click="show">你不好</button>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();
const show = () => {
    router.push('/two')
}

</script>