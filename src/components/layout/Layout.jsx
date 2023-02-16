import React, { Children } from 'react'

//components
import Footer from '../footer/Footer'
import TopBar from '../topBar/TopBar'

const Layout = ({ children }) => {
    return (
        <div>
            <TopBar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout