import React, { useContext, useState } from 'react'
import { CountryContext } from '../../context/country-context'
import { ErrorContext } from '../../context/error-context'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import ResultBox from './ResultBox/ResultBox'
import FlagModal from './FlagModal/FlagModal'

const Results = () => {
    const country = useContext(CountryContext)
    const error = useContext(ErrorContext)

    const [showModal, setShowModal] = useState(false)
    const [flagData, setFlagData] = useState(null)

    const onFlagClick = (e) => {
        const flagData = country.countryData
          .filter(country => country.name === e.currentTarget.getAttribute('name'))[0].flag
        setShowModal(true)
        setFlagData(flagData)
    }
    
    const onCloseModal = () => {
        setShowModal(false)
        setFlagData(null)
    }

    return (
        error.error ? <ErrorMessage />
        
        :
        
        <div className='results-container'>
            {!country.countryData ? 
            <h2 className='user-message'>Start typing in the search bar to learn more about countries!</h2> 
            :
            country.countryData.map((country, index) => 
                <ResultBox 
                    country={country}
                    key={index}
                    onFlagClick={(e) => onFlagClick(e)}
                />
            )}
            <FlagModal open={showModal} onClose={onCloseModal} flagData={flagData} />
        </div>
    )
}

export default Results