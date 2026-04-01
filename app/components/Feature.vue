<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

    const sectionRef = ref(null);
    const cardsRef = ref(null);
    
    const features = ref([
        { icon: "💲", title: "Finanzas", description: "Conoce los movimientos financieros en tiempo real y toma decisiones informadas" },
        { icon: "🌎", title: "Países", description: "Averigua toda la información necesaria sobre el país que más te guste" },
        { icon: "🌡️", title: "Clima (próximamente)", description: "Entérate de las condiciones climáticas en tu ubicación o en cualquier otro lugar del mundo!" },
        { icon: "📰", title: "Noticias (próximamente)", description: "Las últimas noticias sobre temas de interés." },
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
      <h2 class="text-3xl md:text-5xl font-bold text-foreground">
        Todo lo que necesitas en un solo lugar
      </h2>
      <p class="text-xl mt-3 md:text-2xl text-foreground/60 max-w-lg leading-relaxed">
        Por qué seguir buscando en diferentes sitios si puedes tener todas tus respuestas aquí?
      </p>

      <div ref="cardsRef" class="mt-12 flex flex-wrap justify-center gap-6">
          <div v-for="feature in features" :key="feature.title" class="feature-card" >
            <div>
              <div class="text-4xl mb-4 inline-block">{{ feature.icon }}</div>
              <h3 class="text-xl font-bold text-foreground inline-block">{{ feature.title }}</h3>
            </div>
            <p class="text-foreground/60">{{ feature.description }}</p>
          </div>
      </div>
    </section>
</template>