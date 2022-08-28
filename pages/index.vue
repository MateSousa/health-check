<script setup lang='ts'>
import { Url, Log } from '~/utils/interface'

const client = useSupabaseClient()

const { data: urls } = await useAsyncData("urls", async () => {
    const { data, error } = await client.from<Url>("urls").select('*')
    if (error) throw Error(error.message)
    return data
})


const { data: logs } = await useAsyncData('logs', async () => {
    const { data, error } = await client.from<Log>('logs').select('*').order("time", { ascending: false})
    if (error) throw Error(error.message)
    return data
})

const logsFromUrl = (url_id: string) => {
    if(!urls) return []
    return logs.value?.filter((i) => i.url_id === url_id)
} 

 
</script>
<template>
    <div flex flex-col justify-center items-center>
        <Card v-for="url in urls" :key="url.id" :url="url" :log="logsFromUrl(url.id)" />
    </div>
</template>


<style scoped>
</style>