// react
import { useState } from 'react';

// images
import logo from '../../assets/logo/pklogo.png'
import logo2 from '../../assets/logo/pklogoen.png'

// styles
import styles from './Header.module.css';
import styled from 'styled-components';

// react router dom
import { NavLink, Link } from 'react-router-dom'

// i18next
import i18n from "i18next";
import { useTranslation } from "react-i18next";


// styled components
const H1 = styled.h3`
    justify-content: center;

    padding: 20px;

    border: 3px solid transparent;
    border-radius: 15px;
    
    &:hover {
        transition: 0.25s;
        border: 3px solid #d0d9db;  
        border-radius: 30px;
    }

    @media screen and (max-width: 880px){
        justify-content: center;

        &:hover{
            border: 3px solid transparent;  
        }
    }

`

const LangButtonEN = styled.button`
    background-color: transparent;
    border: none;
    color: #878787;
    cursor: pointer;
    font-size: 1vw;

    &:hover { background-color: transparent; }
    
    @media screen and (max-width: 880px){
        font-size: 5vw;
    }
`

const LangButtonBG = styled.button`
    background-color: transparent;
    border: none;
    color: #878787;
    cursor: pointer;
    font-size: 1vw;

    &:hover { background-color: transparent; }

    @media screen and (max-width: 880px){
        font-size: 5vw;
    }
`

const Nav = styled.nav`
    height: auto;

    @media (max-width: 600px) {
        height: auto;
        min-height: 10vh;
    }
`

const LogoPik = styled.img`
    top: 50px;
    width: 15vw;
    margin: 0 auto;
    display: block;
    position: absolute;
    left: calc((100% - 15%) / 2);
    // z-index: 10;

    @media screen and (max-width: 920px){
        left: 0;
        // margin: 0;
        position: unset;
        top: 0;
        padding-top: 40px;
        width: 300px;
    }
`


export const Header = () => {

    // nav links
    let activeStyle = {
        color: "#878787",
    };

    // language switching
    const { t } = useTranslation(["navbar"]);
    const [lang, setLang] = useState("en")

    const handleLang = lang => event => {
        setLang(lang);
        i18n.changeLanguage(lang);
    };

    // sandwich
    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <header>
            <Nav>
                <div className={styles.LaguageDiv}>
                    <LangButtonBG
                        onClick={handleLang("bg")}
                        style={{
                            textShadow: lang === "bg" && '0 0 20px #d0d9db',
                            color: lang === "bg" && '#d0d9db'
                        }}
                    >BG</LangButtonBG>
                    |
                    <LangButtonEN
                        onClick={handleLang("en")}
                        style={{
                            textShadow: lang === "en" && '0 0 20px #d0d9db',
                            color: lang === "en" && '#d0d9db'
                        }}
                    >EN</LangButtonEN>
                </div>

                <img src={logo} alt="logo" className={styles.logo} />

                <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>&#9776;</button>

                <div className={styles.inner_main_menu}>

                    <ul className={`${styles.navbar} ${menuOpen ? styles.open : ''}`}>
                        <li>
                            <NavLink
                                to="/"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                <H1>{t('home')}</H1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="archive"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                <H1>{t('archive')}</H1>
                            </NavLink>
                        </li>
                        <li>

                        </li>
                        <li>
                            <NavLink
                                to="authors"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                <H1>{t('guidelines for authors')}</H1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="archive"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                <H1>{t('more')}</H1>
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </Nav>
        </header>
    )
}
