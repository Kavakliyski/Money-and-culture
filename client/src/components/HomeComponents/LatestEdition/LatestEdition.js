
import { Link } from 'react-router-dom'

import cover from '../../../assets/editions/korica4-01.jpg'

import styles from "./LatestEdition.module.css";
import styled from 'styled-components'

import { useTranslation } from "react-i18next";


const StyledImg = styled.img`
    width: 400px;

    @media all and (max-width: 880px) {
        max-width: 300px;
        width: auto;
    }
`

const StyledPar = styled.p`
    font-size: 24px;

    @media all and (max-width: 880px) {
        font-size: 18px;
    }

`
const Button = styled.button`
    font-size: 24px;
    padding: 14px 40px;
    border-radius: 15px;
    background: #111A1B;
    color: #D0D9DB;
    cursor: pointer;

    &:hover {
        background: #111a1bc7;
    }

    @media all and (max-width: 880px) {
        font-size: 18px;
    }

`


export const LatestEdition = () => {

    const { t } = useTranslation(["latest_edition"]);


    return (



        <div className={styles.LatestEditionWrapper}>
            <div className={styles.LatestEditionImage}>
                <StyledImg src={cover} alt="" />
            </div>
            <div className={styles.LatestEditionInfo}>
                <div className={styles.HeaderAndSubheader}>
                    <h1><strong>{t('heading')}</strong></h1>
                    <h2><i>{t('issue')} 1/2022</i></h2>
                </div>
                <div className={styles.Description}>
                    <StyledPar>{t('par1')}</StyledPar>
                    <StyledPar>{t('par2')}</StyledPar>
                    <StyledPar>{t('par3')}</StyledPar>
                </div>
                <div className={styles.ReadMoreButton}>
                    <Link to='archive'>
                        <Button>{t('read here')}</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
