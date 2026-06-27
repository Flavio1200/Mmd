
export const useCountriesAPI = () => {
  const apiKey = 'rc_live_ea352ed3c2be456d86b4395150cd0ae9'
  const baseUrl = 'https://api.restcountries.com/countries/v5'
  const responseFields = 'names.common,codes.alpha_3,capitals,population,region,flag.url_png'

  const normalizeCountry = (country) => {
    const capitalName = Array.isArray(country.capitals) && country.capitals.length > 0
      ? country.capitals[0].name || country.capitals[0]
      : ''

    return {
      name: { common: country['names.common'] || country.names?.common || '' },
      capital: capitalName ? [capitalName] : [],
      population: country.population || 0,
      region: country.region || '',
      flags: { png: country['flag.url_png'] || country.flag?.url_png || '' },
      cca3: country['codes.alpha_3'] || country.codes?.alpha_3 || ''
    }
  }

  const getCountries = async () => {
    const response = await $fetch(`${baseUrl}?response_fields=${responseFields}&limit=100`, {
      headers: { Authorization: `Bearer ${apiKey}` }
    })

    const objects = response?.data?.objects || []
    return objects.map(normalizeCountry)
  }

  const getCountryByName = async (name) => {
    if (!name) {
      return []
    }

    const response = await $fetch(`${baseUrl}/names.common?q=${encodeURIComponent(name)}&response_fields=${responseFields}&limit=100`, {
      headers: { Authorization: `Bearer ${apiKey}` }
    })

    const objects = response?.data?.objects || []
    return objects.map(normalizeCountry)
  }

  return { getCountries, getCountryByName }
}