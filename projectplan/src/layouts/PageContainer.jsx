import React from 'react'
import AppRouter from '../services/AppRouter'

function PageContainer(props) {
    console.log("Page Container  ")
    console.log(JSON.stringify(props.children.props))
    return (
        <> {props.children} </>
    )
}

export default PageContainer