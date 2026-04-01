<script setup>
import { ref } from 'vue'

const props = defineProps({
    Nombre: String,
    Ticker: String,
    Ubicacion: String,
    Fundada: String,
    Valoracion: Number,
    Moneda: String
})
</script>

<template>
    <div class="rounded-lg flex-1 general-card">
        <h4 class="text-3xl font-bold italic mb-2 ml-4">{{ Nombre }}</h4>
        <div class="flex flex-col gap-4">
            <div class="py-2 px-4 rounded-2xl bg-[#e4e4e462] border border-[#e4e4e462]">
                <p class="inline-block font-bold text-2xl text-gray-800">Ticker:</p>
                <p class="inline-block text-lg text-gray-800 float-right">{{ Ticker }}</p>
            </div>
            <div class="py-2 px-4 rounded-2xl bg-[#e4e4e462] border border-[#e4e4e462]">
                <p class="inline-block font-bold text-2xl text-gray-800">Ubicación:</p>
                <p class="inline-block text-lg text-gray-800 float-right">{{ Ubicacion }}</p>
            </div>
             <div class="py-2 px-4 rounded-2xl bg-[#e4e4e462] border border-[#e4e4e462]">
                <p class="inline-block font-bold text-2xl text-gray-800">Fundada:</p>
                <p class="inline-block text-lg text-gray-800 float-right">{{ Fundada }}</p>
            </div>
            <div class="py-2 px-4 rounded-2xl bg-[#e4e4e462] border border-[#e4e4e462]">
                <p class="inline-block font-bold text-2xl text-gray-800">Valoración:</p>
                <p class="inline-block text-lg text-gray-800 float-right">{{ Valoracion }} $</p>
            </div>
            <div class="py-2 px-4 rounded-2xl bg-[#e4e4e462] border border-[#e4e4e462]">
                <p class="inline-block font-bold text-2xl text-gray-800">Moneda:</p>
                <p class="inline-block text-lg text-gray-800 float-right">{{ Moneda }}</p>
            </div>
        </div>
    </div>
</template>