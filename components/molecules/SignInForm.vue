<script setup lang='ts'>    
const { auth } = useSupabaseClient()
    
const form = ref({
    email: '',
    password: ''
})

const hasError = ref(false)
const showConfirmEmailBox = ref(false)

    
const handleSubmit = async () => {
    const { user, error} = await auth.signIn({
        email: form.value.email,
        password: form.value.password
    })
    if (error) {
        if (error.message = 'Email not confirmed') {
            hasError.value = true
            showConfirmEmailBox.value = true
        } else if (error.message = 'Invalid login credentials') {
            console.log('Invalid login credentials')
        }
    }
    navigateTo('/urls')
}
    
</script>


<template>
    <div>
        <form  @submit.prevent="handleSubmit" v-if="!hasError">
            <input type="email" v-model="form.email" placeholder="Your e-mail" />
            <input type="password" v-model="form.password" placeholder="Your password" />
            <button type="submit">Submit</button>
        </form>
        <ConfirmEmail v-show="showConfirmEmailBox" />
    </div>
</template>
    
    
