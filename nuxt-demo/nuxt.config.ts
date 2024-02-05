// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app:{
    head:{
      title:'nuxt dojo',
      meta: [
        {name: 'description', content:'sfsdf'}

      ]
    }
  }
})