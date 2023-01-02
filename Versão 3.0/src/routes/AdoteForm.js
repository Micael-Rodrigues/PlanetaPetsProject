import React from 'react'
import Footer from '../components/Footer'
import AdoteformCards from '../components/AdoteForm/index'
import HeroImage from '../components/HeroImage'
import NavBar from '../components/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import { useTranslation } from "react-i18next";

const Adoteform = () => {
    const { t } = useTranslation();
    return (
        <div>
            <NavBar />
            <ChakraProvider>
            <HeroImage heading={t("adoteformmenu")} text={t("HeroImage")} /> 
            <AdoteformCards />
            <Footer />
            </ChakraProvider>
        </div>
        
    )
}

export default Adoteform