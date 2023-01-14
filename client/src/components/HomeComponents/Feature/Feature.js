
import { Link } from 'react-router-dom'

import {
    Logo,
    Paragraph,
    Button,
    Wrapper
} from './FeatureElements'

// images
import logo from '../../../assets/logo/pklogo.png'
import logo2 from '../../../assets/logo/pklogoen.png'

// i18next
import { useTranslation } from "react-i18next";
import i18n from 'i18next';


export const Feature = () => {

    const { t } = useTranslation(["feature"]);


    return (
        <>
            <Wrapper>

                <Logo src={i18n.language === "en" ? logo2 : logo} alt="" />

                <Paragraph>{t('par')}</Paragraph>

                <Link to='about'>
                    <Button>{t('button')}</Button>
                </Link>
            </Wrapper>
        </>
    )
}
