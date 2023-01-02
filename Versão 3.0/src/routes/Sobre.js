import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Aboutus from '../components/Sobre'
import NavBar from '../components/NavBar'
import { useTranslation } from "react-i18next";

const Sobre = () => {
    const { t } = useTranslation();
    return (
        <div>
            <NavBar />
            <HeroImage heading='PLANETA PETS' text={t("slogan")}  /> 
            <Aboutus />
            <Footer />
        </div>
    )
}

export default Sobre;
