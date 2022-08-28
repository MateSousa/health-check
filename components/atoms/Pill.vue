<script setup lang='ts'>

const props = defineProps({
    color: String,
    text: String
})
</script>
<template>
    <div w-20 max-w-25>
        <div :class="props.color" p-2 b-rd-4 >
            <div text-center text-sm color-white font-bold >
                {{props.text}}
            </div>
        </div>
    </div>
</template>


<style scoped>
</style>