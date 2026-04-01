

export function useApiFinance() {
  const apiKey = "0kS3qAkjNxfpmphtRL2kYExYSKajzKBQ";


  const getFinanceData = (company) => {
    return $fetch(`https://api.massive.com/v3/reference/tickers/${company.toUpperCase()}?apiKey=${apiKey}`)
  }

  const getInterestRates = (company) => {
    return $fetch(`https://api.massive.com/stocks/v1/dividends?ticker=${company.toUpperCase()}&limit=100&sort=ticker.asc&apiKey=${apiKey}`)
  }

  const getMarket = () => {
    return $fetch(`https://api.massive.com/v1/marketstatus/now?apiKey=${apiKey}`)
  }

  const getVolume = (company) => {
    return $fetch(`https://api.massive.com/stocks/v1/short-volume?ticker=${company.toUpperCase()}&limit=10&sort=ticker.asc&apiKey=${apiKey}`)
  }
  return { getFinanceData, getInterestRates, getMarket, getVolume };
}