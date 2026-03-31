<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

    const sectionRef = ref(null);
    const cardsRef = ref(null);
    
    const features = ref([
        { icon: "📚", label: "Conocimiento" },
        { icon: "⚡", label: "Velocidad" },
        { icon: "🔒", label: "Privacidad" },
        { icon: "🌐", label: "Accesibilidad" },
    ]);
    
    onMounted(() => {
        const tl = gsap.timeline({ delay: 0.4 });
    
        if (sectionRef.value) {
        tl.fromTo(
            sectionRef.value,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
        );
        }
    
        if (cardsRef.value) {
        tl.fromTo(
            cardsRef.value.children,
            { y: 20, opacity: 0 },
            {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.2,
            },
            "-=0.4"
        );
        }
    });
</script>

<template>
    <section
      ref="sectionRef"
      class="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center"
    >
      <h2 class="text-5xl md:text-5xl font-bold text-foreground">
        Todo lo que necesitas en un solo lugar
      </h2>
      <p class="text-2xl mt-3 md:text-2xl text-foreground/60 max-w-md leading-relaxed">
        Por qué seguir buscando en diferentes sitios si puedes tener todas tus respuestas aquí?
      </p>

      <div ref="cardsRef" class="mt-12 flex flex-wrap justify-center gap-6">
          <div v-for="feature in features" :key="feature.label" class="feature-card" >
            <div class="text-4xl mb-4">{feature.icon}</div>
            <span class="text-sm font-semibold text-foreground">{feature.label}</span>
          </div>
      </div>
    </section>
</template>