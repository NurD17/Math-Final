import React, { useContext } from 'react'
import Navbar from '../components/header/navbar'
import Content from '../components/main/content'
import Footer from '../components/footer/footer'
import { ProjectContext } from '../Context/ProjectContext'

function HomePage() {
    console.log(useContext(ProjectContext))
    return (
        <>
            <Navbar />
            <Content />
            <Footer />
        </>
    )
}

export default HomePage