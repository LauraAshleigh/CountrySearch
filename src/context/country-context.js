import React, { useState } from 'react'

export const CountryContext = React.createContext({countryData: null})

const CountryProvider = props => {
    const [countryData, setCountryData] = useState(null)

    return (
        <CountryContext.Provider value={{countryData: countryData, setCountryData: setCountryData}}>
            {props.children}
        </CountryContext.Provider>
    )
}

export default CountryProvider