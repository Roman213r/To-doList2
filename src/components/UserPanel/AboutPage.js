import React, { useState, useEffect } from 'react';
import {Link, NavLink} from 'react-router-dom';
import imgList from '../Images/imgList.png';
import ilustationImage from '../Images/importantThing.png';
import fuetureImage from '../Images/fuetures.png';
import startImage from '../Images/priorityTodo.png';
import loadingImage from '../Images/avatar-red.gif'; // Make sure to import your loading image
import Footer from "../Common/Footer";
import '../Styles/Styles.css';
import {FaChevronDown, FaComments, FaQuestionCircle} from "react-icons/fa";
const AboutPage = () => {
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
        top: '1100px',
        left: '100px',
        marginRight: '600px',
        width: '500px',
        height: '500px',
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease',
    };

    const contextFourImage = {
        position: 'absolute',
        top: '3180px',
        left: '100px',
        marginRight: '800px',
        width: '500px',
        height: '400px',
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease',
    };

    const contextThreeImage = {
        position: 'absolute',
        top: '2340px',
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
    const containerDivStart = {
        marginLeft: '1000px',  // Додайте відступ зліва// Додайте відступ справа
        textAlign: 'left',
        // Center the content horizontally
        marginTop: '300px',   // Add top margin for spacing
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

    const dropdownContentStyle = {
        borderTop: 'none', // Видаляємо верхню рамку випадаючого списку
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
    const linkContainerHoverStyles = {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '8px'
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
                                <h1 className="headerStyle">Дізнатись більше,</h1>
                                <h1 className="headerStyle">To-do List</h1>
                            </div>
                            <div style={contentContainer}>
                                <p>

                                    Таск-менеджер - це невід&apos;ємна частина сучасного життя, що дозволяє нам ефективно керувати нашим часом та завданнями. Завдяки йому ми можемо організувати свої обов&apos;язки, планувати дії і вести контроль над виконанням завдань. Він забезпечує нам можливість створювати список завдань і пріоритетів, розподіляти їх за різними категоріями та встановлювати терміни виконання.

                                    Однією з головних переваг таск-менеджера є можливість позначати важливі та нагальні завдання, що допомагає нам уникнути забуття чи пропуску важливих термінів. Він також надає можливість створювати нагадування про наближення термінів виконання, що допомагає у плануванні наших дій та уникненні стресу від прострочених завдань.

                                    Крім того, таск-менеджер дозволяє нам вести статистику наших завдань, відстежувати їх прогрес та визначати обсяги наших зусиль.
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
                                    <NavLink to="/aboutpage" className="navLinkStyleRed">Дізнатись більше</NavLink>
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
                    {/* Scrollable Section 1 */}
                    <div style={containerDivStart}>
                        <h1 style={headingStyle}>Організовуйте, розставляйте пріоритети та виконуйте справи</h1>
                        <img src={startImage} alt="To-Do List" style={contextStartImage} />
                        <p style={paragraphStyle}>Організація та розставлення пріоритетів в наших справах є ключовими аспектами ефективного керування часом та досягнення успіху. Планування та структурування наших завдань допомагають нам уникнути втрати часу та ресурсів, орієнтуючи наші зусилля на найважливіші цілі та завдання. Розуміння того, що саме є найбільш важливим для нас у даний момент, дозволяє нам керувати нашим часом більш ефективно та продуктивно. Крім того, встановлення пріоритетів допомагає нам зосередитись на завданнях, які мають найбільший вплив на наші результати та досягнення.</p>
                        {/* Add your other content here */}
                    </div>
                    <div style={containerStyleDiv}>
                        <img src={ilustationImage} alt="To-Do List" style={contextThreeImage} />
                        <h1 style={headingStyle}>Зосередьтеся на потрібних речах у потрібний час</h1>
                        <p style={paragraphStyle}>Ключовим аспектом успішного досягнення мети є здатність зосередитися на потрібних речах у потрібний час. Це вимагає від нас уваги до того, що саме є найважливішим та найбільш пріоритетним у конкретний момент часу. Коли ми зосереджені на потрібних речах, ми можемо краще управляти своїм часом, ресурсами та енергією, що дозволяє нам досягати більш високих результатів та досягнень. Зосередженість на потрібних речах у потрібний час також допомагає нам уникнути відволікань та зайвих витрат часу на непродуктивні справи.</p>
                        {/* Add your other content here */}
                    </div>
                    <div style={{   marginLeft: '1000px',  // Додайте відступ зліва// Додайте відступ справа
                        textAlign: 'left',
                        // Center the content horizontally
                        marginTop: '300px',   // Add top margin for spacing
                    }}>
                        <h1 style={headingStyle}>Організовуйте, розставляйте пріоритети та виконуйте справи</h1>
                        <img src={fuetureImage} alt="To-Do List" style={contextFourImage} />
                        <p style={paragraphStyle}>Організація та розставлення пріоритетів в наших справах є ключовими аспектами ефективного керування часом та досягнення успіху. Планування та структурування наших завдань допомагають нам уникнути втрати часу та ресурсів, орієнтуючи наші зусилля на найважливіші цілі та завдання. Розуміння того, що саме є найбільш важливим для нас у даний момент, дозволяє нам керувати нашим часом більш ефективно та продуктивно. Крім того, встановлення пріоритетів допомагає нам зосередитись на завданнях, які мають найбільший вплив на наші результати та досягнення.</p>
                        {/* Add your other content here */}
                    </div>

                    <div style={containerDivStart}></div>
                    <Footer />
                </>
            )}
        </div>
    );
};
export default AboutPage;