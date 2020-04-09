import axios from 'axios'

const apiUrl = 'https://restcountries.eu/rest/v2'

export const get = async (url) => {
    try {
        const results = await axios.get(`${apiUrl}/${url}`)
        return results.data
    }
    catch(error) {
        return ({error: error})
    }
}