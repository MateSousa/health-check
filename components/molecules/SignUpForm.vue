<script setup lang='ts'>
    
const { auth } = useSupabaseClient()

const form = ref({
    email: '',
    password: ''
})

const handleSubmit = async () => {
    const { user, error} = await auth.signUp({
        email: form.value.email,
        password: form.value.password
    })
    if (error) throw Error(error.message)
    console.log(user)
}

</script>
<template>
    <div>
        <form  @submit.prevent="handleSubmit">
            <input type="email" v-model="form.email" placeholder="Your e-mail" />
            <input type="password" v-model="form.password" placeholder="Your password" />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>


<style scoped>
</style>