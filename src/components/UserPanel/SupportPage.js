import React, { useState, useEffect } from 'react';
import {Link, NavLink} from 'react-router-dom';
import imgList from '../Images/imgList.png';
import ilustationImage from '../Images/importantThing.png';
import startImage from '../Images/suport.jpg';
import timeImage from '../Images/backgroundTodo.png';
import loadingImage from '../Images/avatar-red.gif'; // Make sure to import your loading image
import Footer from "../Common/Footer";
import '../Styles/Styles.css';
import {FaChevronDown, FaComments, FaExternalLinkAlt, FaQuestionCircle} from "react-icons/fa";
const SupportPage = () => {
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
        width: '530px',
        height: '400px',
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease',
    };
    const contextTwoImage = {
        position: 'absolute',
        top: '3000px',
        right: '0',
        marginRight: '200px',
        width: '1000px',
        height: '600px',
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
        marginTop: '350px',
    };
    const containerStyleDivEnd = {
        marginLeft: '100px',  // Додайте відступ зліва
        marginRight: '100px', // Додайте відступ справа
        textAlign: 'left',
        marginTop: '1000px',
    };
    const containerDivStart = {
        marginLeft: '950px',  // Додайте відступ зліва// Додайте відступ справа
        textAlign: 'left',
        // Center the content horizontally
        marginTop: '300px',   // Add top margin for spacing
    };

    const headingStyle = {
        maxWidth: '400px',    // Set a maximum width for the heading
        left: '150px', // Adjust the left position as needed// Adjust the top position as needed// Center the heading within the container

    };
    const paragraphStyle = {
        maxWidth: '500px',    // Set a maximum width for the heading
        left: '250px',
        color:'#000000',
        fontSize: '20px',
    };

    const dropdownContentStyle = {
        borderTop: 'none', // Видаляємо верхню рамку випадаючого списку
    };
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Отримати дані зі стану компонентів
        const formData = {
            subject: subject,
            description: description,
            email: email,
            name: name
        };

        // Виконати запит POST на сервер
        fetch('http://localhost:5000/add_support_request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Сталася помилка при відправці запиту.');
                }
                return response.json();
            })
            .then(data => {
                // Обробка успішної відповіді
                alert('Успішно відправлено: ' + JSON.stringify(data));
            })
            .catch(error => {
                // Обробка помилки
                alert('Помилка: ' + error.message);
            });
    };
    const inputStyle = {
        borderRadius: '5px',
        marginBottom: '10px',
        padding: '5px',
        width: '100%',
    };

    const buttonStyle = {
        backgroundColor: '#9A0000FF',
        color: 'white',
        borderRadius: '5px',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
    };
    const containerStyle = {
        overflowX: 'hidden',
        position: 'relative',
        height: '100vh',
    };
    const containerStyleForm = {
        display: 'flex',
        alignItems: 'center',
        minHeight: '100vh',
    };

    const formStyle = {
        width: '100%',
        maxWidth: '700px',
        marginRight: '300px', // Відступ справа на 200px
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
                                <h1 className="headerStyle">Підтримка,</h1>
                                <h1 className="headerStyle">To-do List</h1>
                            </div>
                            <div style={contentContainer}>
                                <p>

                                    Підтримка користувачів To-do List - це сервіс, який забезпечує користувачів можливістю отримати допомогу, поради та відповіді на їх запитання стосовно використання функціоналу та можливостей To-do List. Це може включати в себе надання інформації щодо роботи з програмою, як користуватись різними функціями, вирішення проблем та виявлення помилок, а також підтримку під час налаштування або вдосконалення особистих налаштувань користувача. Користувачі можуть звертатися до підтримки для отримання допомоги в усуненні проблем з використанням програми, вирішення технічних питань, а також для отримання порад щодо оптимізації своєї продуктивності та кращого використання можливостей To-do List.
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
                                            <Link
                                                to="/reviews"
                                                className="navLinkStyle"
                                                style={{ dropdownContentStyle, marginTop:'10px', marginBottom: '20px', marginLeft: '20px' }}
                                                onMouseEnter={(e) => {
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
                                                }}
                                            >
                                                <div style={linkContainerHoverStyles}>
                                                    <span className="border-overlay" style={borderOverlayStyles}></span>
                                                    <FaQuestionCircle style={{ marginRight: '5px' }} /> Часті запитання
                                                    <div style={{color: 'gray', marginLeft: '20px',fontSize: '0.7rem' }}>Набір питань та відповідей</div>
                                                </div>
                                            </Link>
                                            <NavLink to="/support" className="navLinkStyleRed" style={{ ...dropdownContentStyle, marginLeft: '20px' }}>
                                                <FaComments style={{ marginRight: '5px' }} /> Підтримка
                                                <div style={{ marginBottom:'15px',color: 'gray', marginLeft: '20px', fontSize: '0.7rem' }}>Підтримка користувачів</div>
                                            </NavLink>
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

            {/* Scrollable Section 1 */}
            {isLoading ? (
                <p>

                </p>
            ) : (
                <>
                    <div style={containerDivStart}>
                        <h1 style={headingStyle}>Підтримка та адміністрування</h1>
                        <img src={startImage} alt="To-Do List" style={contextStartImage} />
                        <p style={paragraphStyle}>Підтримка та адміністрування To-Do List є критичними компонентами успішного функціонування цього додатка, який відіграє важливу роль у керуванні часом та організації завдань для користувачів. Забезпечуючи швидкий та ефективний відгук на запитання користувачів, підтримка грає ключову роль у забезпеченні задоволення від користування програмою. Вона стежить за усіма аспектами використання To-Do List, включаючи навіть технічні питання, такі як відновлення доступу до облікового запису або вирішення проблем з автентифікацією. Крім того, підтримка може надати цінні поради щодо оптимального використання функцій додатка для досягнення максимальної продуктивності.</p>
                        {/* Add your other content here */}
                    </div>
                    <div style={containerStyleDiv}>
                        <h1 style={{ textAlign: 'center' }}>Форма зворотнього зв'язку</h1>
                        <div style={containerStyleForm}>
                            <form onSubmit={handleSubmit} style={formStyle}>
                                <label htmlFor="subject">Тема:</label><br />
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                    style={inputStyle}
                                /><br />
                                <label htmlFor="description">Опис проблеми:</label><br />
                                <textarea
                                    id="description"
                                    name="description"
                                    rows="4"
                                    cols="50"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                    style={inputStyle}
                                ></textarea><br />
                                <label htmlFor="email">Електронна пошта:</label><br />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    style={inputStyle}
                                /><br />
                                <label htmlFor="name">Ім'я:</label><br />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    style={inputStyle}
                                /><br />
                                <input type="submit" value="Надіслати" style={buttonStyle} />
                            </form>
                            <p style={paragraphStyle}>
                                Зворотний зв'язок - це важливий аспект будь-якого продукту чи послуги, оскільки він дозволяє користувачам звертатися до розробників, адміністраторів чи підтримки для висловлення своїх питань, пропозицій чи скарг. Форма зворотного зв'язку є інструментом, який дозволяє зручно та ефективно здійснювати цей процес. Ось кілька ключових полів, які зазвичай включаються до форми зворотного зв'язку: Інструмент зворотного зв'язку, який сприяє покращенню взаємодії між користувачами та провайдерами послуг чи розробниками.
                            </p>
                        </div>
                    </div>

            <Footer />
        </>
    )}
        </div>
);
};
export default SupportPage;