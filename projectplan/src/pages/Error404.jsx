import React from 'react'
import { useLocation } from 'react-router-dom'

function Error404() {
    const location = useLocation();

    console.log('Error404')
    console.log('Error404 -location', location)

    return (
        <h1>Error404</h1>
    )
}

export default Error404