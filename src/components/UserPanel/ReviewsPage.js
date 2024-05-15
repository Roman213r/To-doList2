import React, { useState, useEffect } from 'react';
import {Link, NavLink} from 'react-router-dom';
import imgList from '../Images/imgList.png';
import ilustationImage from '../Images/importantThing.png';
import startImage from '../Images/questions.jpg';
import timeImage from '../Images/backgroundTodo.png';
import loadingImage from '../Images/avatar-red.gif'; // Make sure to import your loading image
import Footer from "../Common/Footer";
import '../Styles/Styles.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import {FaChevronDown, FaComments, FaExternalLinkAlt, FaQuestionCircle} from "react-icons/fa";
const ReviewsPage = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const toggleQuestion = () => {
        setIsOpen1(!isOpen1);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(false);
    };

    const toggleQuestion2 = () => {
        setIsOpen2(!isOpen2);
        setIsOpen1(false);
        setIsOpen3(false);
        setIsOpen4(false);
    };

    const toggleQuestion3 = () => {
        setIsOpen3(!isOpen3);
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen4(false);
    };

    const toggleQuestion4 = () => {
        setIsOpen4(!isOpen4);
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(false);
    };
    const toggleQuestion5 = () => {
        setIsOpen5(!isOpen5);
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(false);
    };
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };
    const [scrolled, setScrolled] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between', /* Рівномірний розподіл елементів з обох сторін */
        alignItems: 'center',
        /* Додаткові стилі */
        /* Наприклад, виберіть потрібні кольори, шрифти, розміри і т. д. */
        transition: 'background-color 0.3s ease'
    };

    const navScrolledStyle = {
        ...navStyle,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        justifyContent: 'flex-end' /* Розмістити елементи зправа */
    };
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navClass = scrolled ? 'navScrolled' : '';
    useEffect(() => {
        // Simulate an asynchronous operation (e.g., fetching data) with a timeout
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Cleanup the timeout to avoid memory leaks
        return () => clearTimeout(loadingTimeout);
    }, []);
    const linkStylesAdd = {
        fontSize: '14px',
        color: '#9A0000FF',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginBottom: '10px',
    };
    const containerStyle = {
        overflowX: 'hidden',
        position: 'relative',
        height: '100vh',
    };
    const handleNavLinkClick = () => {
        window.scrollTo({
            top: 1000,
            behavior: 'smooth' // Зробить прокрутку плавною
        });
    };
    const labelStyle = {
        position: 'absolute',
        top: '15px',
        left: '90px',
        color: '#9a0000',
        fontSize: '34px',
        zIndex: 4,
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease',
        fontFamily: 'Chiller',
    };
    const contextStartImage = {
        position: 'absolute',
        top: '1020px',
        left: '100px',
        marginRight: '800px',
        width: '500px',
        height: '500px',
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease',
    };
    const contextTwoImage = {
        position: 'absolute',
        top: '1450px',
        right: '800px',
        marginRight: '200px',
        width: '500px',
        height: '500px',
        transition: 'opacity 0.5s ease',
    };
    const contextThreeImage = {
        position: 'absolute',
        top: '2260px',
        right: '0',
        marginRight: '150px',
        width: '500px',
        height: '400px',
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease',
    };
    const imageStyle = {
        position: 'absolute',
        top: '15px',
        left: '20px',
        width: '40px',
        height: '40px',
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease',
    };
    const dropdownPanelStyles = {
        display: showDropdown ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'left',
        position: 'absolute',
        top: '50px',
        left: '20px',
        width: '250px',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: '1',
    };

    const loadingImageStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: isLoading ? 'block' : 'none',
        width: '70px', // Adjust the width of the loading image
        height: '70px', // Adjust the height of the loading image
    };

    const contentStyle = {
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)',
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease',
    };

    const navContainerStyle = {
        position: 'absolute',
        top: '20px',
        right: '0',  // Змініть координати, якщо потрібно
        display: 'flex',
        marginRight: '30px',
    };
    const contentContainer = {
        maxWidth: '800px',
        margin: '0 auto',
    };
    const containerStyleDiv = {
        marginLeft: '100px',  // Додайте відступ зліва
        marginRight: '100px', // Додайте відступ справа
        textAlign: 'left',
        marginTop: '650px',
    };
    const containerStyleDivEnd = {
        marginLeft: '100px',  // Додайте відступ зліва
        marginRight: '100px', // Додайте відступ справа
        textAlign: 'left',
        marginTop: '1000px',
    };
    const containerDivStart = {
        marginLeft: '3vh',  // Додайте відступ зліва// Додайте відступ справа
        // Center the content horizontally
        marginTop: '300px',   // Add top margin for spacing
    };
    const containerDivContent = {
        marginLeft: '950px',  // Додайте відступ зліва// Додайте відступ справа
        textAlign: 'left',
        // Center the content horizontally
        marginTop: '300px',   // Add top margin for spacing
    };
    const headingStyle = {
        maxWidth: '400px',    // Set a maximum width for the heading
        left: '150px', // Adjust the left position as needed// Adjust the top position as needed// Center the heading within the container

    };
    const headingStyleQuestion = {
        maxWidth: '600px',    // Set a maximum width for the heading
        marginLeft:'100px', // Adjust the left position as needed// Adjust the top position as needed// Center the heading within the container
        marginBottom: '30px'
    };
    const paragraphStyle = {
        maxWidth: '400px',    // Set a maximum width for the heading
        right: '150px',
        color:'#646464',
        fontSize: '19px',
    };

    const dropdownContentStyle = {
        borderTop: 'none', // Видаляємо верхню рамку випадаючого списку
    };


    const linkContainerHoverStyles = {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '8px'
    };
    const borderOverlayStyles = {
        position: 'absolute',
        top: 0,
        right: '10px', // Змінено значення left
        width: '100%',
        height: '100%',
        content: '',
        clipPath: 'inset(1px round 4px)',
        background: 'rgba(255, 0, 0, 0)',
        transition: 'border 0.3s ease, background 0.3s ease',
        pointerEvents: 'none',
    };
    const borderOverlayStylesDiferent = {
        position: 'absolute',
        top: 0,
        right: '10px', // Змінено значення left
        width: '100%',
        height: '80%',
        content: '',
        clipPath: 'inset(1px round 4px)',
        background: 'rgba(255, 0, 0, 0)',
        transition: 'border 0.2s ease, background 0.3s ease',
        pointerEvents: 'none',
    };

    return (
        <div>
            <div style={containerStyle}>
                <label style={labelStyle}>To-Do List</label>
                <img src={imgList} alt="To-Do List" style={imageStyle} />
                <img src={loadingImage} alt="Loading" style={loadingImageStyle} />
                <div style={contentStyle}>
                    {isLoading ? (
                        <p></p>
                    ) : (
                        <>
                            <div>
                                <h1 className="headerStyle">Часті запитання,</h1>
                                <h1 className="headerStyle">To-do List</h1>
                            </div>
                            <div style={contentContainer}>
                                <p>

                                    Набір питань та відповідей, які найчастіше виникають у користувачів щодо використання програми. Вони призначені для того, щоб надати користувачам швидку та зручну інформацію щодо основних аспектів використання To-do List.
                                </p>
                            </div>
                        </>
                    )}
                </div>

                <div style={navContainerStyle}>
                    {isLoading ? (
                        <p></p>
                    ) : (
                        <>
                            {/* Додайте три посилання зверху */}
                            <nav className={`navbar ${navClass}`} style={scrolled ? navScrolledStyle : navStyle}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <NavLink to="/mainpage" className="navLinkStyle">Головна</NavLink>
                                    <NavLink to="/aboutpage" className="navLinkStyle">Дізнатись більше</NavLink>
                                    <NavLink to="" className="navLinkStyle" onClick={handleNavLinkClick}>Можливості</NavLink>
                                    <div className="dropdown" style={{ position: 'relative' }}>
                                        <span className="navLinkStyle" onClick={handleDropdownToggle}>Ресурси <FaChevronDown style={{ marginLeft: '4px' }} /></span>
                                        <div className="dropdown-content" style={dropdownPanelStyles}>
                                            <NavLink to="/reviews" className="navLinkStyleRed" style={{ dropdownContentStyle, marginTop:'10px', marginBottom: '20px', marginLeft: '20px' }}>
                                                <FaQuestionCircle style={{ marginRight: '5px' }} /> Часті запитання
                                                <div style={{color: 'gray', marginLeft: '20px',fontSize: '0.7rem' }}>Набір питань та відповідей</div>
                                            </NavLink>
                                            <Link to="/support" className="navLinkStyle" style={{ ...dropdownContentStyle, marginLeft: '20px' }}    onMouseEnter={(e) => {
                                                const borderOverlay = e.currentTarget.querySelector('.border-overlay');
                                                if (borderOverlay) {
                                                    e.currentTarget.style.color = 'red';
                                                    borderOverlay.style.border = '2px solid rgba(255, 0, 0, 0.5)';
                                                    borderOverlay.style.background = 'rgba(255, 0, 0, 0.1)';
                                                }
                                            }}
                                                  onMouseLeave={(e) => {
                                                      const borderOverlay = e.currentTarget.querySelector('.border-overlay');
                                                      if (borderOverlay) {
                                                          e.currentTarget.style.color = 'inherit';
                                                          borderOverlay.style.border = '2px solid rgba(255, 0, 0, 0)';
                                                          borderOverlay.style.background = 'rgba(255, 0, 0, 0)';
                                                      }
                                                  }}>
                                                <div style={linkContainerHoverStyles}>
                                                    <span className="border-overlay" style={borderOverlayStylesDiferent}></span>
                                                    <FaComments style={{ marginRight: '5px' }} /> Підтримка
                                                    <div style={{ marginBottom:'15px',color: 'gray', marginLeft: '20px', fontSize: '0.7rem' }}>Підтримка користувачів</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <NavLink to="/adminlogin" className="navLinkStyle">Адміністратор</NavLink>
                                </div>
                                <div className="lineStyle"></div>
                                <a href="/login" style={{ backgroundColor: '#7c0000', color: 'white', padding: '5px 20px', borderRadius: '5px', textDecoration: 'none' }}>
                                    Вхід
                                </a>
                            </nav>
                        </>
                    )}
                </div>
            </div>
            {isLoading ? (
                <p></p>
            ) : (
                <>
                    <div style={containerDivContent}>
                        <h1 style={headingStyle}>Часті запитання(FAQ) </h1>
                        <img src={startImage} alt="To-Do List" style={contextStartImage} />
                        <p style={paragraphStyle}>Часті запитання(FAQ) - це список питань та відповідей, які найчастіше виникають у користувачів стосовно певної теми, продукту або послуги. Це інструмент, який допомагає забезпечити користувачам швидкий доступ до необхідної інформації та вирішити їхні поточні питання без необхідності звертатися до підтримки або інших джерел. Основна мета FAQ - це забезпечити користувачам зручний та ефективний спосіб отримання відповідей на найпоширеніші запитання безпосередньо на веб-сайті або у програмі. Такий підхід дозволяє зекономити час як для користувачів, так і для служби підтримки.</p>
                        {/* Add your other content here */}
                    </div>
                    {/* Scrollable Section 1 */}
                    <div style={containerDivStart}>
                        <h1 style={headingStyleQuestion}>Відповіді на поширені питання</h1>
                        {/* Add your other content here */}
                        <div>
                            <div onClick={toggleQuestion} style={{ marginLeft: '40px',cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                {isOpen1 ? <FaMinus style={{color: 'rgb(0,71,124)', fontSize: '28px' }} /> : <FaPlus style={{color: 'rgb(0,71,124)', fontSize: '28px' }} />}
                                <p style={{ marginTop: '10px',marginLeft: '40px', fontWeight: 'bold', color: 'rgb(0,71,124)', fontSize: '20px' }}>Що таке To-do List?</p>
                            </div>
                            {isOpen1 && (
                                <p style={{  maxWidth: '1000px', marginLeft: '30px', fontSize: '20px' }}>
                                    To-do List - це інструмент для планування та відстеження різних завдань і обов'язків. Він дозволяє користувачам створювати список задач, встановлювати пріоритети, вказувати терміни виконання та відстежувати їх виконання. Цей інструмент є дуже корисним для організації робочих або особистих справ, що допомагає підвищити продуктивність та знизити стрес. Крім того, To-do List може бути використаний для спільної роботи у команді або спільного планування проектів. Використання To-do List допомагає зберігати час, організовувати робочий процес та досягати поставлених цілей.
                                </p>
                            )}
                        </div>
                        <div>
                            <div onClick={toggleQuestion2} style={{ marginLeft: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                {isOpen2 ? <FaMinus style={{ color: 'rgb(0,71,124)', fontSize: '28px' }} /> : <FaPlus style={{ color: 'rgb(0,71,124)', fontSize: '28px' }} />}
                                <p style={{ marginTop: '10px', marginLeft: '40px', fontWeight: 'bold', color: 'rgb(0,71,124)', fontSize: '20px' }}>Як зареєструватися у To-do List? Як увійти до свого облікового запису?</p>
                            </div>
                            {isOpen2 && (
                                <>
                                    <p style={{ maxWidth: '1000px', marginLeft: '30px', fontSize: '20px' }}>
                                        Щоб зареєструватися в To-do List, слід перейти на головну сторінку додатка і натиснути на кнопку "Реєстрація" або "Зареєструватися". Після цього, вам буде запропоновано ввести свою електронну адресу та обрати надійний пароль для вашого облікового запису. Після успішної реєстрації ви зможете увійти до свого облікового запису, використовуючи ці ж облікові дані, які ви ввели під час реєстрації.Для входу потрібно перейти на головну сторінку додатка і натиснути на кнопку "Увійти" або "Вхід". Після цього, вам буде запропоновано ввести свою електронну адресу та пароль
                                    </p>
                                </>
                            )}
                        </div>
                        <div >
                            <div onClick={toggleQuestion3} style={{ marginLeft: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                {isOpen3 ? <FaMinus style={{ color: 'rgb(0, 71, 124)', fontSize: '28px' }} /> : <FaPlus style={{ color: 'rgb(0, 71, 124)', fontSize: '28px' }} />}
                                <p style={{ marginTop: '10px',marginLeft: '40px', fontWeight: 'bold', color: 'rgb(0, 71, 124)', fontSize: '20px' }}>Як шукати певне завдання у списку? Як сортувати завдання за датою, пріоритетом чи категорією?</p>
                            </div>
                            {isOpen3 && (
                                <p style={{  maxWidth: '1000px', marginLeft: '30px', fontSize: '20px' }}>
                                    Для пошуку конкретного завдання у списку використовуйте функцію пошуку або фільтрації, яка зазвичай доступна у To-do List програмах. Щодо сортування, багато програм надають можливість сортувати завдання за датою, пріоритетом чи категорією. Щоб сортувати за датою, використовуйте опцію сортування за датою завершення або датою створення. Для сортування за пріоритетом, програми можуть мати опцію сортування за важливістю або за рівнем важливості завдань. Щодо сортування за категорією, ви можете використовувати теги або мітки, щоб розділити завдання на різні категорії і потім сортувати їх за цими категоріями.
                                </p>
                            )}
                        </div>
                        <div>
                            <div onClick={toggleQuestion4} style={{ marginLeft: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                {isOpen4 ? <FaMinus style={{ color: 'rgb(0,71,124)', fontSize: '28px' }} /> : <FaPlus style={{ color: 'rgb(0,71,124)', fontSize: '28px' }} />}
                                <p style={{ marginTop: '10px', marginLeft: '40px', fontWeight: 'bold', color: 'rgb(0,71,124)', fontSize: '20px' }}>Як додати нове завдання до списку? Як вказати дату, опис чи пріоритет завдання?</p>
                            </div>
                            {isOpen4 && (
                                <>
                                    <p style={{ maxWidth: '1000px', marginLeft: '30px', fontSize: '20px' }}>
                                        Щоб додати нове завдання до списку в To-do List, слід натиснути кнопку "Додати завдання" або "+" на головній сторінці або у відповідному розділі програми. Після цього, вам буде доступна форма для заповнення інформації про завдання, такої як назва, дата, опис та пріоритет. Просто заповніть ці поля і натисніть кнопку "Зберегти" або "Додати", щоб додати завдання до вашого списку.
                                    </p>
                                </>
                            )}
                        </div>
                        <div>
                            <div onClick={toggleQuestion5} style={{ marginLeft: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                {isOpen5 ? <FaMinus style={{ color: 'rgb(0, 71, 124)', fontSize: '28px' }} /> : <FaPlus style={{ color: 'rgb(0, 71, 124)', fontSize: '28px' }} />}
                                <p style={{ marginTop: '10px', marginLeft: '40px', fontWeight: 'bold', color: 'rgb(0, 71, 124)', fontSize: '20px' }}>Як забезпечити безпеку своїх даних у To-do List?</p>
                            </div>
                            {isOpen5 && (
                                <p style={{ maxWidth: '1000px', marginLeft: '30px', fontSize: '20px' }}>
                                    Щоб забезпечити безпеку своїх даних у To-do List, перш за все, варто використовувати надійний пароль та зберігати його в безпечному місці. Додаток також може пропонувати функцію двофакторної аутентифікації для додаткового захисту. Щоб встановити обмеження доступу до списків для збереження конфіденційності, можна використовувати функцію керування правами доступу, де можна встановлювати, хто має доступ до конкретних списків та які дії вони можуть виконувати. Також, важливо виконувати регулярні резервні копії даних, щоб у разі потреби можна було відновити важливу інформацію.
                                </p>
                            )}
                        </div>
                    </div>

            <div style={containerDivStart}> </div>
            <Footer />
                </>
                )}
        </div>
    );
};
export default ReviewsPage;