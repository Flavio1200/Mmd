<script setup>
import { ref } from 'vue'
const servicesOpen = ref(false);
const dropdownRef = ref(null);
function closeDropdown() {
    servicesOpen.value = false;
}
</script>

<template>
    <header>
        <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
            <NuxtLink to="/" class="nav-button">
                Inicio
            </NuxtLink>
            <div class="relative">
                <button class="nav-button flex items-center gap-1" @click="servicesOpen = !servicesOpen">
                    Servicios
                </button>
                <div v-if="servicesOpen">
                    <div ref={dropdownRef} class="absolute flex top-full mt-2 left-1/2 -translate-x-1/2 glass-card rounded-xl py-2 min-w-40">
                        <NuxtLink to="/services/finance" class="w-full px-4 py-2.5 text-sm text-left hover:bg-white/20 transition-colors rounded-lg">
                            Finanzas
                        </NuxtLink>
                        <NuxtLink to="/services/countries" class="w-full px-4 py-2.5 text-sm text-left hover:bg-white/20 transition-colors rounded-lg">
                            Países
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>