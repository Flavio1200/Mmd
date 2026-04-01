export const useNewsAPI = () => {
    const getNews =()=> $fetch('https://newsdata.io/api/1/latest?apikey=' + process.env.NEWS_API_KEY + '&language=es')

    const getNewsByCategory = (category) => {
        return $fetch('https://newsdata.io/api/1/latest?apikey=' + process.env.NEWS_API_KEY + '&language=es&category=' + category)
    }

    const getNewsByCountry = (country) => {
        return $fetch('https://newsdata.io/api/1/latest?apikey=' + process.env.NEWS_API_KEY + '&language=es&country=' + country)
    }

    return { getNews, getNewsByCategory, getNewsByCountry }
}