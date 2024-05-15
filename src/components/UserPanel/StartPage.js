import React, { useState, useEffect } from 'react';
import { Link,NavLink } from 'react-router-dom';
import imgList from '../Images/imgList.png';
import ilustationImage from '../Images/Illustration_2020.gif';
import startImage from '../Images/eMiHuGqtvO.gif';
import timeImage from '../Images/time-animation_1.gif';
import pencilImage from '../Images/5717447-hd_1920_1080_25fps (1).gif';
import { FaQuestionCircle,FaComments } from 'react-icons/fa'; // Імпорт іконок з бібліотеки react-icons
import { FaChevronDown } from 'react-icons/fa';
import loadingImage from '../Images/avatar-red.gif'; // Make sure to import your loading image
import Footer from "../Common/Footer";
import '../Styles/Styles.css';
const StartPage = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };
    const [scrolled, setScrolled] = useState(false);
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

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        // Cleanup the timeout to avoid memory leaks
        return () => clearTimeout(loadingTimeout);
    }, []);


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
        top: '1100px',
        right: '0',
        marginRight: '50px',
        width: '520px',
        height: '400px',
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease',
    };
    const contextTwoImage = {
        position: 'absolute',
        top: '3500px',
        right: '0',
        marginRight: '20px',
        width: '700px',
        height: '580px',
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease',
    };

    const linkContainerHoverStyles = {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '8px'
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
    const handleNavLinkClick = () => {
        window.scrollTo({
            top: 1000,
            behavior: 'smooth' // Зробить прокрутку плавною
        });
    };





    const headingStyle = {
        maxWidth: '400px',    // Set a maximum width for the heading
        left: '150px', // Adjust the left position as needed// Adjust the top position as needed// Center the heading within the container

    };
    const paragraphStyle = {
        maxWidth: '400px',    // Set a maximum width for the heading
        left: '150px',
        color:'#646464',
        fontSize: '19px',
    };
    const headingFiveStyle = {
        maxWidth: '400px',    // Set a maximum width for the heading
        left: '150px', // Adjust the left position as needed// Adjust the top position as needed// Center the heading within the container
        color: 'red',
    };
    const containerStyleDivLeft = {
        marginLeft: '850px',  // Додайте відступ зліва
        marginRight: '0px', // Додайте відступ справа
        textAlign: 'left',
        marginTop: '650px',
    };
   const  bottomStyle = {
       marginBottom: '1100px'
   }
    const contextThreeImage = {
        position: 'absolute',
        top: '2260px',
        left: '50px',
        marginRight: '800px',
        width: '600px',
        height: '400px',
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease',
    };
    const contextFourImage = {
        position: 'absolute',
        top: '4200px',
        right: '0px',
        marginLeft: '0px',
        width: '100%',
        height: '650px',
        opacity: isLoading ? 0 : 1,
        borderRadius:'20px',
        marginBottom: '350px',
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
    const dropdownContentStyle = {
        borderTop: 'none', // Видаляємо верхню рамку випадаючого списку
    };

    return (
        <div>
            <div className="containerStyle">
                <label style={labelStyle}>To-Do List</label>
                <img src={imgList} alt="To-Do List" style={imageStyle} />
                <img src={loadingImage} alt="Loading" style={loadingImageStyle} />
                <div style={contentStyle}>
                    {isLoading ? (
                        <p></p>
                    ) : (
                        <>
                            <div>
                                <h1 className="headerStyle">Таск-менеджер,</h1>
                                <h1 className="headerStyle">To-do List</h1>
                            </div>
                            <div className="contentContainer">
                                <p style={{marginBottom:'35px'}
                                }>
                                    Таск-менеджер (або менеджер завдань) - це програмний інструмент чи застосунок, призначений для ефективного управління завданнями та обов&apos;язками. Основна його мета - допомагати користувачам в організації та виконанні різних завдань.
                                </p>
                                <a href="/login" style={{ backgroundColor: '#9a0000', color: 'white', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none' }}>
                                    Почати зараз
                                </a>
                            </div>
                        </>
                    )}
                </div>

                <div className="navContainerStyle">
                    {isLoading ? (
                        <p></p>
                    ) : (
                        <>
                            {/* Додайте три посилання зверху */}
                            <nav className={`navbar ${navClass}`} style={scrolled ? navScrolledStyle : navStyle}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <NavLink to="/mainpage" className="navLinkStyleRed">Головна</NavLink>
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
                                <a href="/login" style={{ backgroundColor: '#9a0000', color: 'white', padding: '5px 20px', borderRadius: '5px', textDecoration: 'none' }}>
                                    Вхід
                                </a>
                            </nav>
                        </>
                    )}
                </div>
            </div>

            {isLoading ? ( // Перевіряємо, чи відбувається завантаження
<p></p>
            ) : (
                <>
                    {/* Ваша вертикальна сторінка з контентом */}
                    <div className="containerDivStart">
                        <h5 className="headingFiveStyle">Зосередьтеся на важливому</h5>
                        <h1 className="headingStyle">У Todoist можна організувати все настільки просто, наскільки потрібно</h1>
                        <img src={startImage} alt="To-Do List" style={contextStartImage} />
                        <p className="paragraphStyle">ToDo List вирішує проблему неструктурованості та розпорошеності завдань, допомагаючи організувати їх в одному місці. Важливість todo-list полягає в забезпеченні систематизації та плануванні робочих чи особистих обов&apos;язків на кожен день. ToDo List сприяє підвищенню продуктивності, визначаючи пріоритети та дозволяючи ефективніше використовувати час. Використання todo-list допомагає уникати забуття важливих завдань та сприяє вчасному їх виконанню.</p>
                    </div>

                    {/* Інші вертикальні сторінки з контентом */}
                    <div style={containerStyleDivLeft}>
                        <img src={ ilustationImage} alt="To-Do List" style={contextThreeImage} />
                        <h5 style={headingFiveStyle}>Унікальний список</h5>
                        <h1 style={headingStyle}>У Todoist можна організувати свій унікальний список який допоможе вам у будь-якій сфері.</h1>
                        <p style={paragraphStyle}>Todo-list надає можливість користувачам персоналізувати свої задачі, встановлюючи пріоритети, дедлайни та інші параметри. Це дозволяє адаптувати інструмент до індивідуальних потреб користувача. Унікальність todo-list полягає в комбінації цих характеристик, що робить їх ефективними та придатними для вирішення конкретних потреб користувача.</p>
                        {/* Add your other content here */}
                    </div>

                    <div className="containerStyleDiv" style= {bottomStyle}>
                        <img src={timeImage} alt="To-Do List" style={contextTwoImage} />
                        <h5 className="headingFiveStyle">Виконуйте їх вчасно</h5>
                        <h1 className="headingStyle">Виконуйте завдання вчасно або перенесіть їх у вхідні.</h1>
                        <p className="paragraphStyle">Вчасність - ключовий аспект ефективності та успіху, виявляється в здатності своєчасно реагувати та виконувати завдання; вона сприяє покращенню продуктивності та створює позитивне враження про особу чи компанію. Своєчасність відображає відповідальність, допомагає уникнути стресу та сприяє підтримці високого рівня організації. Ця якість є важливою в бізнесі, освіті та повсякденному житті, допомагаючи досягати поставлених цілей та утримувати позитивне враження від власної діяльності.</p>
                    </div>
                    <div className="containerDivStart">
                        <img src={pencilImage} alt="To-Do List" style={contextFourImage} />
                    </div>
                    {/* Додавайте інші вертикальні сторінки з контентом за необхідності */}
                    <Footer />
                </>
            )}
        </div>
    );
};
export default StartPage;