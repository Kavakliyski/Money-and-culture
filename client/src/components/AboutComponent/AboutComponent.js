
import styles from './AboutComponent.module.css'

import { useTranslation } from "react-i18next";

export const AboutComponent = () => {

    const { t } = useTranslation(["about"]);


    return (
        <div className={styles.AboutComponentWrapper}>
            <h1><strong>{t('page_title')}</strong></h1>

            <p>{t('par1')}</p>
            <p>{t('par2')}</p>
            <p>{t('par3')}</p>
            <p>{t('par4')}</p>

            <hr />

            <p>{t('par5')}</p>
            <p>{t('par6')}</p>
            <p>{t('par7')}</p>

            <hr />

            <p>{t('par8')}</p>

            <hr />

            <p>{t('par9')}</p>
        </div>
    )
}
