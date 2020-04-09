import React, { useState } from 'react'

export const LoadingContext = React.createContext({loading: false})

const LoadingProvider = props => {
    const [loading, setLoading] = useState(false)

    return (
        <LoadingContext.Provider value={{loading: loading, setLoading: setLoading}}>
            {props.children}
        </LoadingContext.Provider>
    )
}

export default LoadingProvider