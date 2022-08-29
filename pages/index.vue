<script setup lang='ts'>
import SignInForm from '~~/components/molecules/SignInForm.vue'; 
import SignUpForm from '~~/components/molecules/SignUpForm.vue';

const user = useSupabaseUser()

watchEffect(() => {
    if (user.value) {
        navigateTo('/urls')
    }
})

const haveAccount = ref(true)
 
</script>
<template>
    <div>
        <div>
            <h3>Welcome, please sign in or if you don't have account sign up</h3>
        </div>
        <div>
            <Component :is="haveAccount ? SignInForm : SignUpForm" />
        </div>
    </div>
</template>


<style scoped>
</style>