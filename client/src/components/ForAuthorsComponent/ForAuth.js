
import styles from './ForAuth.module.css'

export const ForAuth = () => {
    return (
        <div className={styles.ForAuthWrapper}>
            <h1><strong>НАСОКИ ЗА АВТОРИТЕ</strong></h1>
            <h2><i>ГЛАВНА ИНФОРМАЦИЯ</i></h2>
            <p>Списанието публикува резултати от изследвания в области: финанси, финансови пазари, банково дело, маркетинг, застраховане, счетоводство и контрол, бизнес, предприемачество, приложение на математиката и ИКТ в икономиката. Фокус и обхват по-подробно.</p>
            <p>Статиите, представени в списанието Пари и култура, трябва да бъдат оригинални и с непубликувани приноси и не трябва да се разглеждат едновременно в други списания. Ръкописът трябва да бъде написан на български, руски или английски език. Отговорността за съдържанието на материалите е на авторите, а не на редакторите или издателя.</p>
            <p>Документите трябва да бъдат подготвени според етичните стандарти при публикуването.</p>
            <hr />
            <h2><i>Процесът на преглед</i></h2>
            <p>Преглед (експертна оценка) на ръкописи на научни статии се извършва с цел поддържане на високо научно и теоретично ниво на списанието и подбор на най-ценните и уместни научни доклади. Пари и култура използва Double-Blind Peer Review. Процесът на преглед е безплатен.</p>
            <p>Списанието не приема никакви форми на плагиатство и има свои специални методи за идентификация. Пари и култура използва софтуер за откриване на случаи на припокриване и подобен текст в представените ръкописи. Ръкописите, в които са намерени плагиатство или текстови заемки без позоваване на първоначалния източник, се отхвърлят от редакционната колегия на списанието.</p>
            <hr />
            <h2><i>Структура на статията</i></h2>
            <h3>Номерация на секций</h3>
            <p>Разделете статията си на ясно дефинирани и номерирани секции. Подразделите трябва да бъдат номерирани с 1.1 (след това 1.1.1, 1.1.2, ...), 1.2 и т.н., имайте предвид, че абстрактът не е включен в номерирането на секциите.</p>
            <h3>Въведение</h3>
            <p>В уводната част авторите трябва внимателно да прегледат литературата и да посочат причината защо трябва да направим това изследване. Авторите трябва също така ясно да посочат новостта на статията в тази част и да посочат разликите между тази работа и публикуваните по-рано произведения.</p>
            <h3>Резултати</h3>
            <p>Резултатите трябва да бъдат напълно ясни. Ако авторът (ите) предложи нов метод срещу друг съществуващ, би било полезно справедливо сравнение между новите резултати и старите.</p>
            <h3>Дискусия</h3>
            <p>Тази част трябва да обясни значението на резултатите от работата. Предотвратявайте обширни цитати и обсъждане на публикувана литература.</p>
            <h3>Заключения</h3>
            <p>Основните изводи от работата могат да бъдат представени в кратък раздел със заключения.</p>
            <h3>Приложения</h3>
            <p>Ако произведението съдържа повече от едно приложение, идентифицирайте ги като A, B и др. Формулите и уравненията в приложенията трябва да бъдат дадени с отделна номерация: Eq. (A.1), уравнение (A.2) и др .; в следващо приложение, уравнение (Б.1) и т.н.</p>
            <hr />
            <h2><i>ОСНОВНА ИНФОРМАЦИЯ ЗА ЗАГЛАВНАТА СТРАНИЦА</i></h2>
            <p>Заглавие. Заглавията трябва да са информативни, за да се използват в системите за извличане на информация. Избягвайте съкращенията и формулите, когато е възможно.</p>
            <p>Резюме. Резюмето трябва да посочи накратко целта на изследването, основните резултати и основните изводи.</p>
            <p>Ключови думи. Веднага след резюмето, посочете максимум 6 ключови думи.</p>
            <p>Благодарности. поставете благодарностите в отделен раздел в края на статията преди препратките.</p>
            <p>Бележки под линия. Номерирайте ги последователно в цялата статия, използвайки суперскриптни арабски номера. Посочете всяка бележка под линия в таблица със суперскриптна малка буква.</p>
            <p>Моля, използвайте само шрифт Times New Romans, използвайте изображенията с добро качество.</p>
        </div>
    )
}