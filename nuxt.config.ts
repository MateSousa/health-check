import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    components: [{ path: '@/components', pathPrefix: false }],
    modules: ['@nuxtjs/supabase', '@unocss/nuxt',],
})
