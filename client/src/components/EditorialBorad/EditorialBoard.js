
import styles from "./EditorialBoard.module.css"
import { EditorialBoardCard } from './EditorialBoardCard'

import { useTranslation } from "react-i18next";

import grigorij_vaozv from '../../assets/EditorialBoardImages/editor1.jpg'
import grigor_dimitrov from '../../assets/EditorialBoardImages/grigor_dimitrov.jpg'
import rumen_trifonov from '../../assets/EditorialBoardImages/rumen_trifonov.jpg'
import vzhelyazkova from '../../assets/EditorialBoardImages/vzhelyazkova.jpg'
import ognyana_stoichkova from '../../assets/EditorialBoardImages/ognyana_stoichkova.jpg'
import yakim_kitanov from '../../assets/EditorialBoardImages/yakim_kitanov.jpg'
import desislava_yosifova from '../../assets/EditorialBoardImages/desislava_yosifova.jpg'
import z_hristozov from '../../assets/EditorialBoardImages/z_hristozov.jpg'
import sdimitrov from '../../assets/EditorialBoardImages/sdimitrov.jpg'
import d_bobeba from '../../assets/EditorialBoardImages/d_bobeba.jpg'
import ali_veisel from '../../assets/EditorialBoardImages/ali_veisel.jpg'
import j_dobreva from '../../assets/EditorialBoardImages/j_dobreva.jpg'
import d_ilieva from '../../assets/EditorialBoardImages/d_ilieva.jpg'
import manumoravenov from '../../assets/EditorialBoardImages/manumoravenov.jpg'
import krasimir_todorov from '../../assets/EditorialBoardImages/krasimir_todorov.jpg'
import natalia_futekova from '../../assets/EditorialBoardImages/natalia_futekova.jpg'
import t_lazarova from '../../assets/EditorialBoardImages/t_lazarova.jpg'
import lubka_cenova from '../../assets/EditorialBoardImages/lubka_cenova.jpg'
import b_jekov from '../../assets/EditorialBoardImages/b_jekov.jpg'
import r_vazov from '../../assets/EditorialBoardImages/r_vazov.jpg'
import b_rajnov from '../../assets/EditorialBoardImages/b_rajnov.jpg'
import y_dimitrov from '../../assets/EditorialBoardImages/y_dimitrov.jpg'
import plamen_ivanov from '../../assets/EditorialBoardImages/plamen_ivanov.jpg'
import elina_kurpacheva from '../../assets/EditorialBoardImages/elina_kurpacheva.jpeg'
import nikola_dimitrov from '../../assets/EditorialBoardImages/nikola_dimitrov.jpg'


const editors = [
    {
        'id': 1,
        'name': 'доц. д-р. Григорий Вазов',
        'hyperlink': 'https://vuzflab.eu/grigoriivazov/',
        'image': grigorij_vaozv,
    },
    {
        'id': 2,
        'name': 'проф. д-р Григор Димитров',
        'hyperlink': 'https://vuzflab.eu/grigor_dimitrov/',
        'image': grigor_dimitrov,
    },
    {
        'id': 3,
        'name': 'проф. д-р Румен Трифонов',
        'hyperlink': 'https://vuzflab.eu/dr-rumen_trifonov/',
        'image': rumen_trifonov,
    },
    {
        'id': 4,
        'name': 'проф. д-р Виржиния Желязкова',
        'hyperlink': 'https://vuzflab.eu/vjeliazkova/',
        'image': vzhelyazkova,
    },
    {
        'id': 5,
        'name': 'проф. д-р Огняна Стоичкова',
        'hyperlink': 'https://vuzflab.eu/ognyana_stoichkova/',
        'image': ognyana_stoichkova,
    },
    {
        'id': 6,
        'name': 'Доц. д-р Яким Китанов',
        'hyperlink': 'https://vuzflab.eu/%D0%B4%D0%BE%D1%86-%D0%B4-%D1%80-%D1%8F%D0%BA%D0%B8%D0%BC-%D0%BA%D0%B8%D1%82%D0%B0%D0%BD%D0%BE%D0%B2/',
        'image': yakim_kitanov,
    },
    {
        'id': 7,
        'name': 'проф. д-р Десислава Йосифова',
        'hyperlink': 'https://vuzflab.eu/%d0%b4%d0%be%d1%86-%d0%b4-%d1%80-%d0%b4%d0%b5%d1%81%d0%b8%d1%81%d0%bb%d0%b0%d0%b2%d0%b0-%d0%b9%d0%be%d1%81%d0%b8%d1%84%d0%be%d0%b2%d0%b0/',
        'image': desislava_yosifova
    },
    {
        'id': 8,
        'name': 'Доц. д-р Жельо Христозов',
        'hyperlink': 'https://vuzflab.eu/%d0%b4%d0%be%d1%86-%d0%b4-%d1%80-%d0%b6%d0%b5%d0%bb%d1%8c%d0%be-%d1%85%d1%80%d0%b8%d1%81%d1%82%d0%be%d0%b7%d0%be%d0%b2/',
        'image': z_hristozov
    },
    {
        'id': 9,
        'name': 'Доц. д-р Станислав Димитров',
        'hyperlink': 'https://vuzflab.eu/2020/10/23/%d0%b4%d0%be%d1%86-%d0%b4-%d1%80-%d1%81%d1%82%d0%b0%d0%bd%d0%b8%d1%81%d0%bb%d0%b0%d0%b2-%d0%b4%d0%b8%d0%bc%d0%b8%d1%82%d1%80%d0%be%d0%b2-%d0%b2%d1%83%d0%b7%d1%84-%d0%b1%d1%8a%d0%bb%d0%b3%d0%b0/',
        'image': sdimitrov
    },
    {
        'id': 10,
        'name': 'Проф. д-р Даниела Бобева',
        'hyperlink': 'https://vuzflab.eu/%D0%B4%D0%BE%D1%86-%D0%B4-%D1%80-%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%D0%BB%D0%B0-%D0%B1%D0%BE%D0%B1%D0%B5%D0%B2%D0%B0/',
        'image': d_bobeba
    },
    {
        'id': 11,
        'name': 'проф. д-р Али Вейсел',
        'hyperlink': 'https://vuzflab.eu/aliveisel/',
        'image': ali_veisel
    },
    {
        'id': 19,
        'name': 'доц. д-р Радостин Вазов',
        'hyperlink': 'https://vuzflab.eu/radostin_vazov/',
        'image': r_vazov
    },
    {
        'id': 12,
        'name': 'проф. д-р Юлия Добрева',
        'hyperlink': 'https://vuzflab.eu/dobreva/',
        'image': j_dobreva
    },
    {
        'id': 13,
        'name': 'проф. д-р Даниела Илиева',
        'hyperlink': 'https://vuzflab.eu/dkoleva/',
        'image': d_ilieva
    },
    {
        'id': 14,
        'name': 'доц. д-р Маню Моравенов',
        'hyperlink': 'https://vuzflab.eu/manumoravenov/',
        'image': manumoravenov
    },
    {
        'id': 15,
        'name': 'проф. д. ик. н. Красимир Тодоров',
        'hyperlink': 'https://vuzflab.eu/krasimirtodorov/',
        'image': krasimir_todorov
    },
    {
        'id': 16,
        'name': 'доц. д-р Наталия Футекова',
        'hyperlink': 'https://vuzflab.eu/nataliafutekova/',
        'image': natalia_futekova
    },
    {
        'id': 17,
        'name': 'проф. д-р Теодора Лазарова',
        'hyperlink': 'https://vuzflab.eu/%D0%B4%D0%BE%D1%86-%D0%B4-%D1%80-%D1%82%D0%B5%D0%BE%D0%B4%D0%BE%D1%80%D0%B0-%D0%BB%D0%B0%D0%B7%D0%B0%D1%80%D0%BE%D0%B2%D0%B0/',
        'image': t_lazarova
    },
    {
        'id': 18,
        'name': 'проф. д-р Любка Ценова',
        'hyperlink': 'https://vuzflab.eu/lubka_cenova/',
        'image': lubka_cenova
    },
    {
        'id': 20,
        'name': 'доц. д-р Боян Жеков',
        'hyperlink': 'https://vuzflab.eu/bjekov/',
        'image': b_jekov
    },

    {
        'id': 21,
        'name': 'гл. ас. д-р Бисер Райнов',
        'hyperlink': 'https://vuzflab.eu/%D0%B4-%D1%80-%D0%B1%D0%B8%D1%81%D0%B5%D1%80-%D1%80%D0%B0%D0%B9%D0%BD%D0%BE%D0%B2/',
        'image': b_rajnov
    },
    {
        'id': 22,
        'name': 'д-р Ясен Димитров',
        'hyperlink': 'https://vuzflab.eu/%D0%B4-%D1%80-%D1%8F%D1%81%D0%B5%D0%BD-%D0%B4%D0%B8%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D0%B2/',
        'image': y_dimitrov
    },
    {
        'id': 23,
        'name': 'д-р Пламен Иванов',
        'hyperlink': 'https://vuzflab.eu/dr-plamen-ivanov/',
        'image': plamen_ivanov
    },
    {
        'id': 24,
        'name': 'д-р Елина Кърпачева',
        'hyperlink': 'https://vuzflab.eu/%D0%B4-%D1%80-%D0%B5%D0%BB%D0%B8%D0%BD%D0%B0-%D0%BA%D1%8A%D1%80%D0%BF%D0%B0%D1%87%D0%B5%D0%B2%D0%B0/',
        'image': elina_kurpacheva
    },
    {
        'id': 25,
        'name': 'ас. Никола Димитров',
        'hyperlink': 'https://vuzflab.eu/%D0%BD%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0-%D0%B4%D0%B8%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D0%B2/',
        'image': nikola_dimitrov
    },
    {
        'id': 26,
        'name': 'Гл. ас. д-р Росица Тончева',
        'hyperlink': 'https://vuzflab.eu/гл-ас-д-р-росица-тончева/',
        'image': 'none'
    }

]

export const EditorialBoard = () => {

    const { t } = useTranslation(["editorial_team"]);


    return (

        <div className={styles.EditorialBoardWrapper}>
            <br />
            <h1>{t('editorial team')}</h1>

            <div className={styles.EditorialBoard}>
                <div className={styles.EditorialBoardCards}>

                    {editors.map((editor) => (
                        <EditorialBoardCard
                            key={editor.id}
                            title={editor.name}
                            hyperlink={editor.hyperlink}
                            picture={editor.image} />
                    ))}

                </div>
            </div>
        </div>

    )
}
