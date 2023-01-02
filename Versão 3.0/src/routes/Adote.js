import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import AdoteSection from '../components/Adote'
import NavBar from '../components/NavBar'
import { useTranslation } from "react-i18next";

const Adote = () => {
    const { t } = useTranslation();
    return (
        <div>
            <NavBar />
            <HeroImage heading={t("adotemenu")} text={t("HeroImage")} /> 
            <AdoteSection />
            <Footer />
        </div>
    )
}

export default Adote
