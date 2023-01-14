
import styles from './ForAuth.module.css'

import { useTranslation } from "react-i18next";


export const ForAuth = () => {

    const { t } = useTranslation(["for_authors"]);

    return (
        <div className={styles.ForAuthWrapper}>
            <h1><strong>{t('for authors')}</strong></h1>

            <h2><i>{t('subHeading1')}</i></h2>
            <p>{t('sh1par1')}</p>
            <p>{t('sh1par2')}</p>
            <p>{t('sh1par3')}</p>

            <hr />

            <h2><i>{t('subHeading2')}</i></h2>
            <p>{t('sh2par1')}</p>
            <p>{t('sh2par2')}</p>

            <hr />

            <h2><i>{t('subHeading3')}</i></h2>
            <h3>{t('subSubHeading1')}</h3>
            <p>{t('shShpar1')}</p>
            <h3>{t('subSubHeading2')}</h3>
            <p>{t('shShpar2')}</p>
            <h3>{t('subSubHeading3')}</h3>
            <p>{t('shShpar3')}</p>
            <h3>{t('subSubHeading4')}</h3>
            <p>{t('shShpar4')}</p>
            <h3>{t('subSubHeading5')}</h3>
            <p>{t('shShpar5')}</p>
            <h3>{t('subSubHeading6')}</h3>
            <p>{t('shShpar6')}</p>

            <hr />

            <h2><i>{t('subHeading4')}</i></h2>
            <p>{t('sh4par1')}</p>
            <p>{t('sh4par2')}</p>
            <p>{t('sh4par3')}</p>
            <p>{t('sh4par4')}</p>
            <p>{t('sh4par5')}</p>
            <p>{t('sh4par6')}</p>
        </div>
    )
}
