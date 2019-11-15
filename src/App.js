import React, { Component } from 'react'
import './App.css'
import './MediaQueries.css'
import { BrowserRouter } from 'react-router-dom'
import globe from './globe.png'
import Main from './Main/Main'
import ResultBox from './ResultBox/ResultBox'
import FlagModal from './FlagModal/FlagModal'
import ApiCalls from './ApiCalls/ApiCalls'

class App extends Component {
  state = {
    loading: false,
    searchString: '',
    selectValue: null,
    countryData: null,
    flagModal:{showModal:false, flagData:null}
  }

  componentDidMount() {
    this.apiCalls = new ApiCalls()
  }

  onUpdateSearchField = (e) => {
    this.setState({searchString: e.target.value})
  }

  onSearchByCountry = (e) => {
    if(this.state.searchString.trim() !== '' && e.key === 'Enter') {
      this.setState({loading:true})
      this.apiCalls.searchByCountry(this.state.searchString).then(data => {
        this.setState({loading:false, countryData: data})
      })
    }
  }

  onSearchByCurrency = (e) => {
    this.setState({selectValue: e, loading:true}, () => {
      this.apiCalls.searchByCurrency(e.value).then(data => {
        this.setState({loading:false, countryData: data})
      })
    })
  }

  onSearchByRegion = (e) => {
    this.setState({loading: true, searchString: e.target.value})
    this.apiCalls.searchByRegion(e.target.value).then(data => {
      this.setState({loading:false, countryData: data})
    })
  }

  onSearchByLanguage = (e) => {
    this.setState({selectValue: e, loading:true}, () => {
      this.apiCalls.searchByLanguage(e.value).then(data => {
        this.setState({loading:false, countryData: data})
      })
    })
  }

  onFlagClick = (e) => {
    const flagData = this.state.countryData
      .filter(country => country.name === e.currentTarget.getAttribute('name'))[0].flag
    this.setState({flagModal:{showModal:true, flagData:flagData}})
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className='loading-wheel-container'>
            <img className='loading-wheel' src={globe} alt='loading'
              style={{display: this.state.loading ? 'block' : 'none'}}
            />
          </div>
          <Main 
            onUpdateSearchField={(e) => this.onUpdateSearchField(e)} 
            onHandleSelectChange={this.onHandleSelectChange}
            onSearchByCountry={(e) => this.onSearchByCountry(e)}
            onSearchByCurrency={(e) => this.onSearchByCurrency(e)}
            onSearchByRegion={(e) => this.onSearchByRegion(e)}
            onSearchByLanguage={(e) => this.onSearchByLanguage(e)}
            searchString={this.state.searchString}
            selectValue={this.state.selectValue}
            countryData={this.state.countryData}
          />
          <div className='results-container'>
          {!this.state.countryData ? null :
             this.state.countryData.map((country, key) => 
                <ResultBox 
                    country={country}
                    key={key}
                    onFlagClick={(e) => this.onFlagClick(e)}
                />
            )}
          </div>
          <FlagModal 
            open={this.state.flagModal.showModal}
            close={()=>this.setState({flagModal:{showModal:false, flagData:null}})}
            flagData={this.state.flagModal.flagData}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
