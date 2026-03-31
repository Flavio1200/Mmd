<script setup>
    
</script>

<template>
    <div class="gradient-bg-hero py-16 px-4 h-screen ">
        <h1 class="text-3xl font-bold mb-4 text-center">Datos Financieros</h1>
        <p class="text-lg text-slate-700 text-center">
            Busca información detallada sobre tendencias financieras, análisis de mercado y datos económicos actualizados.
        </p>
        <div class="cont-info">

        </div>
        <div class="info-empresa">
            <h3>Información de la Empresa</h3>
            <div class="company-info flex gap-2">
                <GeneralInfo
                    Nombre="Apple Inc."
                    :Radio=1.5
                    Ubicacion="Cupertino, California, USA"
                    Fundada="1976"
                    :Valoracion=4.5
                    :Volumen=2000000
                />
                <Share />
            </div>
        </div>
    </div>
</template>