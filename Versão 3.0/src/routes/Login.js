import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import NavBar from '../components/NavBar/index'
import Form from '../components/Form/Login'
import { useTranslation } from "react-i18next";

const Entrar = () => {
    const { t } = useTranslation();
    return (
        <div>
            <NavBar />
           <HeroImage heading={t("login")} text={t("HeroImage")}  /> 
            <Form />
            <Footer/>
        </div>
    )
}

export default Entrar
