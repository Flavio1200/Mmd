<script setup>
    import { useApiFinance } from '~/composables/apiFInance';
    const { getFinanceData, getMarket, getInterestRates, getVolume } = useApiFinance();

    const financeData = ref({});
    const marketData = ref({});
    const interestRatesData = ref({});
    const volumeData = ref({});

    const company = ref("");
    const loadingFinance = ref(false);

    const loadFinanceData = async () => {
        loadingFinance.value = true;
        try {
            financeData.value = await getFinanceData(company.value);
            marketData.value = await getMarket(company.value);
            interestRatesData.value = await getInterestRates(company.value);
            volumeData.value = await getVolume(company.value);
        } catch (err) {
            console.error('Error al cargar datos financieros:', err);
        } finally {
            loadingFinance.value = false;
        }
    };
</script>

<template>
    <div class="bg-orange-50 py-16 px-4 h-screen ">
        <h1 class="text-3xl font-bold my-4 text-center">Datos Financieros</h1>
        <p class="text-lg text-slate-700 text-center">
            Busca información detallada sobre tendencias financieras, análisis de mercado y datos económicos actualizados.
        </p>
        <div class="flex gap-3">
            <input type="text" class=" flex-1 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" v-model="company">
            <button @click="loadFinanceData" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buscar</button>
        </div>
        <div v-if="loadingFinance" class="text-center">Cargando...</div>
        <div class="cont-info flex gap-4 mt-8 mb-8" v-else-if="interestRatesData.results && volumeData.results">
            <FinanceCard title="Interest Rates" :value1="interestRatesData.results[0].short_interest" :value2="interestRatesData.results[0].days_to_cover" />
            <FinanceCard title="Short Volume" :value1="volumeData.results[0].total_volume" :value2="volumeData.results[0].short_volume" />
        </div>
        <div class="info-empresa">
            <h3 class="text-center text-2xl mb-4 text-slate-700">Información de la Empresa</h3>
            <div v-if="loadingFinance" class="text-center">Cargando...</div>
            <div class="company-info flex gap-2" v-else-if="financeData.results && marketData">
                <GeneralInfo
                    :Nombre="financeData.results.name"
                    :Ticker="financeData.results.ticker_root"
                    :Ubicacion="financeData.results.address.city"
                    :Fundada="financeData.list_date"
                    :Valoracion="financeData.results.market_cap"
                    :Moneda="financeData.results.currency_name"
                />
                <Share :status="marketData.market" :index1="marketData.indicesGroups.nasdaq" :index2="marketData.indicesGroups.dow_jones" />
            </div>
            <div v-else-if="!loadingFinance && !financeData.results" class="text-center">No se encontraron datos para esta empresa.</div>
        </div>
    </div>
</template>