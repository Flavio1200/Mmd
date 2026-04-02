

export function useApiFinance() {
  const config = useRuntimeConfig();
  const apiKey = config.public.FINANCE_API_KEY;


  const getFinanceData = (company) => {
    return $fetch(`https://api.massive.com/v3/reference/tickers/${company.toUpperCase()}?apiKey=${apiKey}`)
  }

  const getInterestRates = (company) => {
    return $fetch(`https://api.massive.com/stocks/v1/short-interest?ticker=${company.toUpperCase()}&limit=10&sort=ticker.asc&apiKey=${apiKey}`)
  }

  const getMarket = () => {
    return $fetch(`https://api.massive.com/v1/marketstatus/now?apiKey=${apiKey}`)
  }

  const getVolume = (company) => {
    return $fetch(`https://api.massive.com/stocks/v1/short-volume?ticker=${company.toUpperCase()}&limit=10&sort=ticker.asc&apiKey=${apiKey}`)
  }
  return { getFinanceData, getInterestRates, getMarket, getVolume };
}