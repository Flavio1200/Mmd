<script setup>
import { ref } from 'vue'

const props = defineProps({
    Nombre: String,
    Radio: Number,
    Ubicacion: String,
    Fundada: String,
    Valoracion: Number,
    Volumen: Number
})
</script>

<template>
    <div class="rounded-lg flex-1 general-card">
        <h4>{{ Nombre }}</h4>
        <div class="flex flex-col gap-4">
            <div class="py-2 px-4 rounded-2xl bg-[#e4e4e462] border border-[#e4e4e462]">
                <p class="inline-block font-bold text-2xl text-gray-800">Radio:</p>
                <p class="inline-block text-lg text-gray-800 float-right">{{ Radio }}</p>
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
                <p class="inline-block text-lg text-gray-800 float-right">{{ Valoracion }}</p>
            </div>
            <div class="py-2 px-4 rounded-2xl bg-[#e4e4e462] border border-[#e4e4e462]">
                <p class="inline-block font-bold text-2xl text-gray-800">Volumen:</p>
                <p class="inline-block text-lg text-gray-800 float-right">{{ Volumen }}</p>
            </div>
        </div>
    </div>
</template>