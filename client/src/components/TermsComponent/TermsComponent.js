
import styles from './TermsComponent.module.css'

import { useTranslation } from "react-i18next";


export const TermsComponent = () => {


    const { t } = useTranslation(["terms"]);

    return (
        <div className={styles.TermsComponentWrapper}>
            <h1>{t('page_title')}</h1>
            <h2>{t('sub_title')}</h2>
        </div>
    )
}
