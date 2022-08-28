<script setup lang='ts'>
import { PropType } from 'vue';
import { Url, Log } from '~/utils/interface'

const props = defineProps({
    url: Object as PropType<Url>,
    log: Object as PropType<Log[]>
})


const lastLogReceived = computed(() => {
    console.log(props.log)
    if (props.log.length === 0) {
        return {
            status: 'Not yet received',
        }
    }
    return props.log.slice(-1)[0]
})
    
</script>
<template>
    <div w-150 h-auto>
        <div>
            <div flex justify-between items-center>                
                <div flex justify-center items-center gap-10>
                    <h2>{{props.url.title}}</h2>
                    <Pill :color="lastLogReceived.status === 'success' ? 'bg-green' : 'bg-red'" :text="lastLogReceived.status" />
                </div>
                <div>
                    <a :href="props.url.url" target="_blank">Check the website</a>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
</style>