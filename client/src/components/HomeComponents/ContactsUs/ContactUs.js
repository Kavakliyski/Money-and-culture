/* eslint-disable jsx-a11y/iframe-has-title */

// svg
import { ReactComponent as AdrSvg } from '../../../assets/svg/location.svg'
import { ReactComponent as PhoneSvg } from '../../../assets/svg/phone.svg'
import { ReactComponent as MailSvg } from '../../../assets/svg/mail.svg'

// styles
import styles from './ContactUs.module.css'

import { useTranslation } from "react-i18next";


export const ContactUs = () => {

    const { t } = useTranslation(["contact_us"]);


    return (
        <div className={styles.ContactUsWrapper}>
            <div className={styles.ContactUsInnerWrapper}>
                <div className={styles.ContactUsIFrame}>
                    <iframe
                        width={752}
                        height={445}
                        src="https://maps.google.com/maps?q=VUZF&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder={0}
                    />
                </div>
                <div className={styles.ContactUsContactInfo}>
                    <h1><strong>{t('contacts')}</strong></h1>

                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <AdrSvg width="70px" />
                                </td>
                                <td>
                                    {t('adr')}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <PhoneSvg width="70px" />
                                </td>
                                <td>00359 2 40 15 809</td>
                            </tr>
                            <tr>
                                <td>
                                    <MailSvg width="70px" />
                                </td>
                                <td>
                                    <a href="mailto:pariikultura@vuzf.bg?">pariikultura@vuzf.bg</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
