import React, { useState } from 'react'

export const ErrorContext = React.createContext({error: false})

const ErrorProvider = props => {
    const [error, setError] = useState(false)

    return (
        <ErrorContext.Provider value={{error: error, setError: setError}}>
            {props.children}
        </ErrorContext.Provider>
    )
}

export default ErrorProvider