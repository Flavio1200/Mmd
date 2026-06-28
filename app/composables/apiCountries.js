
export const useCountriesAPI = () => {
  const getCountries = async () => {
    return $fetch('/api/countries')
  }

  const getCountryByName = async (name) => {
    if (!name) {
      return []
    }

    return $fetch(`/api/countries?name=${encodeURIComponent(name)}`)
  }

  return { getCountries, getCountryByName }
}