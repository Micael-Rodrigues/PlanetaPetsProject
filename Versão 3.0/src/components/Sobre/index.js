import { Fragment, React, useState } from 'react';
import './About.css';
import img from '../../assets/img/Logo2.png';
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();
    const [toggleTab, setToggleTab] = useState(3)
    const toggleState = (index) => {
        setToggleTab(index)
    }

    return (
        <Fragment>
            <section className='about'>
                <div className='row'>

                    <div className='column'>
                        <div className='about-img'>
                            <img className='img' src={img} />
                        </div>
                    </div>

                    <div className='column'>
                        <div className='tabs'>
                            <div className={toggleTab === 3 ? "single-tab active-tab" : "single-tab"}
                                onClick={() => toggleState(3)}
                            >
                                <h2>{t("sobre")}</h2>
                            </div>

                        </div>

                        <div className='tab-content'>
                            {/* Experience Context */}
                            <div className={toggleTab === 3 ? "content active-content" : "content"}>
                                <div className='exp-column'>
                                    <h3>Planeta Pets</h3>
                                    <span>{t("slogan")}</span>
                                    <p>{t("sobre2")}</p>
                                </div>

                                <div className='exp-column'>
                                    <h3>{t("sobre1")}</h3>
                                    <span>Idea Developer - 2022</span>
                                    <p>{t("sobre3")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default About;
