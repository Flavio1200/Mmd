<script setup>
    import { ref, watch } from 'vue'
    import { useNewsAPI } from '~/composables/apiNews'


    const { getNews } = useNewsAPI()
    const { getNewsByCategory, getNewsByCountry } = useNewsAPI()

    const news = ref([])
    const loadingNews = ref(false)
    const error = ref(null)
    const selectedCategory = ref("")
    const selectedCountry = ref("")

    const loadNews = async ()=>{
        loadNews.value = true
        error.value = null
        try {
            news.value = await getNews()
        } catch (err) {
            error.value = `Error: ${err.message}`
            console.error(err)
        } finally {
            loadingNews.value = false
        }
    }

    onMounted(()=>{
        loadNews()
    })

    // watch(selectedCategory,()=>{

    // })
</script>

<template>
    <h1>Noticias</h1>
    <div class="filters">
        <input type="text" name="filtro" id="filtro">
        <select name="category" id="" v-model="selectedCategory">
            <options>Bussiness</options>
            <options>Technology</options>
            <options>Sports</options>
            <options>Entertainment</options>
            <options>Health</options>
        </select>
        <select name="country" id="" v-model="selectedCountry">
            <options>Ve</options>
            <options>Co</options>
            <options>Us</options>
            <options>Mx</options>
            <options>It</options>
        </select>
    </div>

    <div class="noticias grid grid-cols-2 gap-x-4 gap-y-2">
        <NewsCard v-for="n in news" :key="n.url" :title="n.title" :article="n.description" :source="n.source"/>
    </div>
</template>