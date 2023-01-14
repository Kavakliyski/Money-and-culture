// react
import { useState, useRef, useEffect } from 'react';

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
const Links1 = styled.h3`
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

    -webkit-user-select: none; /* Chrome, Safari, Opera */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    user-select: none; /* Standard syntax */

`

const LinkDrop = styled.h3`
    color: #d0d9db;
    justify-content: center;
    padding: 20px;
    border: 3px solid transparent;
    border-radius: 15px;
    cursor: pointer;

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

    -webkit-user-select: none; /* Chrome, Safari, Opera */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    user-select: none; /* Standard syntax */
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
        min-height: 14vh;
    }
`

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    left: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    color: #d0d9db !important;

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#d0d9db' : '#d0d9db'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`


export const Header = () => {

    // nav links
    let activeStyle = {
        color: "#878787",
    };

    // dropdown
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("scroll", handleScroll);
        } else {
            window.removeEventListener("scroll", handleScroll);
        }
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen]);

    const handleScroll = () => {
        setIsOpen(false);
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

                <Link to="/">
                    <img src={lang === "bg" ? logo : logo2} alt="" className={styles.logo} />
                </Link>

                <div className={styles.menuToggle}>
                        <StyledBurger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                            <div />
                            <div />
                            <div />
                        </StyledBurger>
                </div>

                <div className={styles.inner_main_menu}>
                    <ul className={`${styles.navbar} ${menuOpen ? styles.open : ''}`}>
                        <li>
                            <NavLink
                                to="/"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                <Links1>{t('home')}</Links1>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="archive"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                <Links1>{t('archive')}</Links1>
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
                                <Links1>{t('guidelines for authors')}</Links1>
                            </NavLink>
                        </li>

                        <li>
                            <div>
                                <LinkDrop
                                    onClick={() => setIsOpen(!isOpen)}
                                >{t('more')}</LinkDrop>
                                {isOpen && (
                                    <div className={styles.DropDownContent}>
                                        <NavLink to="about">{t('about')}</NavLink>
                                        <NavLink to="editorialboard">{t('editorial staff')}</NavLink>
                                        <NavLink to="terms">{t('general terms')}</NavLink>
                                        <NavLink to="policy">{t('privacy policy')}</NavLink>
                                    </div>
                                )}

                            </div>

                        </li>

                    </ul>
                </div>
            </Nav>
        </header>
    )
}
