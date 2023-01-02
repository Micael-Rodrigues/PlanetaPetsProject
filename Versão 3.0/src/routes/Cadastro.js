import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import NavBar from '../components/NavBar'
import Cadastro from '../components/Form/Cadastro'
import { useTranslation } from "react-i18next";

const Singup = () => {
    const { t } = useTranslation();
    return (
        <div>
            <NavBar />
            <HeroImage heading={t("cadastromenu")} text={t("HeroImage")}  /> 
            <Cadastro />
            <Footer />
        </div>
    )
}

export default Singup;
