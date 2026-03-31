export const useCountriesAPI = () => {
  
  const getCountries = () => {
    return $fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region')
  }
  
  const getCountryByName = (name) => {
    return $fetch(`https://restcountries.com/v3.1/name/${name}`)
  }
  
  return { getCountries, getCountryByName }
}