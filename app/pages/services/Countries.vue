<script setup>
import CountryCard from '~/components/CountryCard.vue';
import { useCountriesAPI } from '~/composables/apiCountries';
import { ref, onMounted } from 'vue'

const { getCountries } = useCountriesAPI()

const countries = ref([])
const loadingCountries = ref(false)
const error = ref(null)

const loadCountries = async () => {
  loadingCountries.value = true
  error.value = null
  
  try {
    countries.value = await getCountries()
    countries.value.sort((a, b) => a.name.common.localeCompare(b.name.common))
  } catch (err) {
    error.value = `Error al cargar países: ${err.message}`
    console.error(err)
  } finally {
    loadingCountries.value = false
  }
}

onMounted(() => {
  loadCountries()
})

const search = ref("")
    watch(search,()=>{
        countries.value = countries.value.filter(n => n.name.common.toLowerCase().includes(search.value.toLowerCase()))
    })

</script>

<template>
    <div class=" px-4 py-20 gradient-bg-features">
        <h1 class="text-3xl font-bold mb-6 text-center">Países</h1>
        <p class="text-lg text-gray-700 mb-4 text-center">Aquí puedes encontrar información sobre diferentes países.</p>
        <div class="cont">
            <input type="text" v-model.trim="search" placeholder="Buscar país..." class="border border-gray-300 rounded-md px-4 py-2 w-full mb-4 outline-none" />
        </div>
        <div class="countries-list flex flex-wrap justify-center gap-6">
            <CountryCard v-for="country in countries" :key="country.cca3" :flag="country.flags.png" :name="country.name.common" :capital="country.capital[0]" :population="country.population" :region="country.region" />
        </div>
    </div>
</template>