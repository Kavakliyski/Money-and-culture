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

`

const DropdownButton = styled.h3`
    color: #d0d9db;
    justify-content: center;
    padding: 20px;
    border: 3px solid transparent;
    border-radius: 15px;
    cursor: help;

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


export const Header = () => {

    // nav links
    let activeStyle = {
        color: "#878787",
    };

    // dropdown
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = event => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        };
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

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
                            <div className={styles.moreDropdown}>
                                <DropdownButton
                                    onClick={() => setIsOpen(!isOpen)}
                                    ref={dropdownRef}
                                >{t('more')}
                                </DropdownButton>
                                {isOpen && (
                                    <ul className={styles.moreDropdownContent}>
                                        <li >Option 1</li>
                                        <li>Option 2</li>
                                        <li>Option 3</li>
                                    </ul>
                                )}
                            </div>
                        </li>

                    </ul>
                </div>
            </Nav>
        </header>
    )
}
