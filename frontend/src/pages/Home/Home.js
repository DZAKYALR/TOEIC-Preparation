import React from 'react'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import MainContent from '../../components/MainContent/MainContent'
import './style.css'

export default function Home() {
    return (
        <React.Fragment>
            <body>
                <HeaderHome />
                <MainContent />
            </body>
        </React.Fragment>
    )
}

