// images
import logo from '../../assets/logo/pklogo.png'
import logo2 from '../../assets/logo/pklogoen.png'
import logoVUZF from '../../assets/logo/vuzflogo.png'

// styles
import styles from './Footer.module.css'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

// i18next
import i18n from "i18next";
import { useTranslation } from "react-i18next";

console.log(i18n.language)

const StyledHr = styled.hr`
    border-top: 4px solid #d0d9db;
    border-bottom: none;
    /* min-width: 30px; */
    width: auto;

    @media screen and (max-width: 880px){
        max-width: 30px;
    }
`

const StyledUl = styled.ul`
    list-style-type: none;
    padding: 5px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 40%;
    
    @media all and (max-width: 880px) {
        font-size: 10px;
    }

`

const StyledImgVuzf = styled.img`
    max-width: 150px;

    @media all and (max-width: 880px) {
        max-width: 60px;
    }
`
const StyledImgPik = styled.img`
    max-width: 350px;

    @media screen and (max-width: 880px) {
        max-width: 220px;
    }
`


export const Footer = () => {

    const { t } = useTranslation(["navbar"]);


    return (
        <div className={styles.FooterWrapper}>
            <div className={styles.FooterDivCopyRight}>
                <p>Copyright 2020</p>
                <p>{t('vuzf')}</p>
                <p>{t('copy right')}</p>
            </div>
            <div className={styles.FooterDivNavigation}>
                <br />
                <div className={styles.FooterPikLogo}>
                    <Link to="/">
                        <StyledImgPik src={i18n.language === "en" ? logo2 : logo} alt="" />
                    </Link>
                </div>
                <div className={styles.FooterLinks}>

                    <div className={styles.FooterItem}>
                        <StyledHr />
                        <StyledUl>
                            <li><Link to="/">{t('home')}</Link></li>
                            <li><Link to="about">{t('for the magazine')}</Link></li>
                            <li><Link to="archive">{t('archive')}</Link></li>
                            <li><Link to="authors">{t('guidelines for authors')}</Link></li>
                        </StyledUl>
                    </div>

                    <div className={styles.FooterItem}>
                        <StyledHr />
                        <StyledUl>
                            <li><Link to="terms">{t('general terms')}</Link></li>
                            <li><Link to="policy">{t('privacy policy')}</Link></li>
                        </StyledUl>
                    </div>

                    <div className={styles.FooterItem}>
                        <StyledHr />
                        <StyledUl>
                            <a href="http://vuzf.bg" target="_blank" rel="noreferrer">
                                <li><StyledImgVuzf src={logoVUZF} alt="" /></li>
                                <li>{t('vuzf')}</li>
                            </a>
                        </StyledUl>
                    </div>
                </div>
            </div>
        </div>

    )
}
