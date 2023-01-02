import React from 'react';
import { Link } from 'react-router-dom';
import './VideoStyles.css';
import { useTranslation } from "react-i18next";
import backVideo from '../../assets/background.mp4';
import backVideo2 from '../../assets/background2.mp4';

const Video = () => {
    const { t } = useTranslation();
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                {
                    localStorage.getItem('user_token') ?
                    <>
                     <source src={backVideo2} type='video/mp4' />
                    </>
                    :
                    <>
                    <source src={backVideo} type='video/mp4' />
                    </>
                }
               
            </video>
            <div className='content-video'>
                {
                    localStorage.getItem('user_token') ?
                        <>
                            <h1>Planeta Pets</h1>
                            <p>{t("slogan")}</p>
                            <div className='btns'>
                                <Link to='/adote' className='btn'>{t("adotemenu")}</Link>
                                <Link to='/sobre' className='btn'>{t("sobremenu")}</Link>
                            </div>
                        </>
                        :
                        <>
                            <h1>Planeta Pets</h1>
                            <p>{t("slogan")}</p>
                            <div className='btns'>
                                <Link to='/adote' className='btn'>{t("adotemenu")}</Link>
                                <Link to='/login' className='btn'>{t("login")}</Link>
                            </div>
                        </>
                }

            </div>
        </div>
    )
}

export default Video
