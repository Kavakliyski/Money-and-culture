
import styles from './PolicyComponent.module.css'

import { useTranslation } from "react-i18next";


export const PolicyComponent = () => {


    const { t } = useTranslation(["policy"]);

    return (
        <div className={styles.PolicyComponentWrapper}>
            <h1>{t('page_title')}</h1>
            <h2>{t('sub_title')}</h2>
        </div>
    )
}
