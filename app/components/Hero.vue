<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

  const titleRef = ref(null);
  const subtitleRef = ref(null);

  onMounted(() => {
    const tl = gsap.timeline({ delay: 0.4 });

    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
      );
    }

    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      );
    }
  }, []);
</script>

<template>
     <section id="inicio" class="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 ref={{titleRef}} class="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-tight">
        Tu Micro Mundo Digital
      </h1>
      <p ref={{subtitleRef}} class="mt-4 text-base md:text-2xl text-foreground/70 font-medium">
        El futuro de la información
      </p>
    </section>
</template>