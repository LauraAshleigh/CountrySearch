import axios from 'axios'

class ApiCalls {
  apiUrl = 'https://restcountries.eu/rest/v2'

  searchByCountry = (searchString) => {
    return new Promise((resolve) => {
      axios.get(`${this.apiUrl}/name/${searchString}`).then(response => {
        resolve(response.data)
      })
      .catch(() => {
        resolve('Error')
      })
    })
  }

  searchByCurrency = (searchString) => {
    return new Promise((resolve) => {
      axios.get(`${this.apiUrl}/currency/${searchString}`).then(response => {
        resolve(response.data)
      })
      .catch(() => {
        resolve('Error')
      })
    })
  }

  searchByRegion = (searchString) => {
    return new Promise((resolve) => {
      axios.get(`${this.apiUrl}/region/${searchString}`).then(response => {
        resolve(response.data)
      })
      .catch(() => {
        resolve('Error')
      })
    })
  }

  searchByLanguage = (searchString) => {
    return new Promise((resolve) => {
      axios.get(`${this.apiUrl}/lang/${searchString}`).then(response => {
        resolve(response.data)
      })
      .catch(() => {
        resolve('Error')
      })
    })
  }
}

export default ApiCalls