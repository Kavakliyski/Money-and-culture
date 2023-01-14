// react
import { useState } from 'react';
import * as React from 'react';

// styles
import styles from './NavigationBar.module.css';
import styled from 'styled-components';

// images
import logo from '../../assets/logo/pklogo.png'
import logo2 from '../../assets/logo/pklogoen.png'

// react router dom
import { NavLink, Link } from 'react-router-dom'

// mui
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// i18next
import i18n from "i18next";
import { useTranslation } from "react-i18next";


const MuiDropDown = styled.div`
    
    Button{
        color: #d0d9db;
        border: 3px solid transparent;  
        height: 69px;
        border-radius: 30px;
        width: 200px;
        
        top: 5px;

        &:hover{
            border: 3px solid #d0d9db;  
            border-radius: 30px;
            transition: 0.2s;
            width: 200px;
        }
    }

    @media screen and (max-width: 880px){
        justify-content: center;
    }

`

const Nav = styled.nav`
    background: #162123;
    height: auto;

    @media all and (max-width: 880px) {
        display: grid;
        height: auto;
        padding: 0px;
        padding-bottom: 10px;
        margin: 0px;
    }
`

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

export const NavigationBar = () => {


    let activeStyle = {
        color: "#878787",
    };

    // language switching
    const [lang, setLang] = useState("en")

    const handleLang = lang => event => {

        setLang(lang);
        i18n.changeLanguage(lang);
    };

    const { t } = useTranslation(["navbar"]);


    //mui
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <Nav>
                <div className={styles.main_menu}>
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
                        <LogoPik src={lang === "bg" ? logo : logo2} alt="" />
                    </Link>

                    <div className={styles.inner_main_menu}>

                        <ul>
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
                                {/* mui */}
                                <MuiDropDown>
                                    <Button
                                        style={{
                                            textTransform: 'none',
                                            fontSize: '26px',
                                            padding: '0px',
                                            fontWeight: 'bold',
                                            fontFamily: ['Noto Serif HK', 'serif']

                                        }}
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        {t('more')}</Button>

                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >

                                        <Link to="/about">
                                            <MenuItem
                                                style={{
                                                    color: "black",
                                                }}
                                                onClick={handleClose}>{t('for the magazine')}</MenuItem>
                                        </Link>

                                        <Link to="/editorialboard">
                                            <MenuItem
                                                style={{
                                                    color: "black",
                                                }}
                                                onClick={handleClose}>{t('editorial staff')}</MenuItem>
                                        </Link>
                                    </Menu>
                                </MuiDropDown>
                                {/* mui */}

                            </li>
                        </ul>
                    </div>
                </div>
            </Nav>
        </>
    )
}