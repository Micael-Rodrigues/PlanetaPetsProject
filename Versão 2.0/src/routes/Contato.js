import React from 'react'
import Contato from '../components/Contato'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'


const contato = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='CONTATO' text='Planeta Pets' /> 
            <Contato /> 
            <Footer />
        </div>
    )
}

export default contato;
