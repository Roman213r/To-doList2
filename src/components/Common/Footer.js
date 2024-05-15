import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: 'rgb(154, 0, 0)', // Використовуйте відповідний код кольору чи ім'я
        color: 'black', // Змініть колір тексту за необхідності
        padding: '1.5rem',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // Вирівнювання контенту зверху
        alignItems: 'center',
        position: 'relative', // Додайте позицію relative
    };

    const paragraphStyle = {
        marginTop: '10px', // Додайте marginTop, щоб створити простір між лінією та текстом
        borderTop: '1px solid grey', // Додайте верхню границю сірого кольору
        paddingTop: '10px', // Додайте padding-top, щоб створити простір між лінією та текстом
        width: '100%', // Зробіть лінію повністю шириною
        textAlign: 'center', // Вирівняйте текст по горизонталі по центру
        marginBottom: '0px', // Встановіть margin-bottom на 0px
    };

    const linkContainerStyle = {
        marginTop: 'auto', // Загрузіть контейнер посилань наверх
        paddingBottom: '100px', // Встановіть padding-bottom на 100px
    };

    const footerTextStyle = {
        marginTop: '10px', // Додайте marginTop, щоб створити простір між лінією та текстом
        borderTop: '1px solid grey', // Додайте верхню границю сірого кольору
        paddingTop: '10px', // Додайте padding-top, щоб створити простір між лінією та текстом
        width: '100%', // Зробіть лінію повністю шириною
        textAlign: 'center', // Вирівняйте текст по горизонталі по центру
        marginBottom: '0px', // Встановіть margin-bottom на 0px
        color: 'white',
        fontSize: '15px',
        textDecoration: 'none',
    };

    const linkStyle = {
        margin: '0 10px',
        color: 'white',
        fontSize: '18px',
        textDecoration: 'none',
    };

    const todoListLabelStyle = {
        position: 'absolute',
        fontSize: '56px',
        top: '50%',
        right: '20%', // Змініть значення right за потребою
        transform: 'translateY(-50%)',
        fontStyle: 'italic', // Додаємо курсив
        color: 'white', // Змініть колір тексту
        fontFamily: 'Edwardian Script ITC',
    };
    const contactListLabelStyle = {
        position: 'absolute',
        fontSize: '14px',
        top: '40%',
        left: '200px', // Змініть значення right за потребою
        transform: 'translateY(-50%)',
       // Додаємо курсив
        color: 'white', // Змініть колір тексту
        fontFamily: 'Times New Roman',
    };
    const contactNumberLabelStyle = {
        position: 'absolute',
        fontSize: '14px',
        top: '49%',
        left: '200px', // Змініть значення right за потребою
        transform: 'translateY(-50%)',
        // Додаємо курсив
        color: 'white', // Змініть колір тексту
        fontFamily: 'Times New Roman',
    };
    const contactListLineStyle = {
        position: 'absolute',
        top: '35%', // Вирівнюйте лінію по центру відносно висоти футера
        left: '195px', // Встановіть відступ від лівого краю
        width: '1px', // Ширина лінії
        height: '20%', // Висота лінії (половина висоти футера)
        backgroundColor: 'white', // Колір лінії
    };
    return (
        <footer style={footerStyle}>
            {/* Додайте три центровані посилання у верхній частині футера */}
            <div style={linkContainerStyle}>
                <a href="/adminlogin" style={linkStyle}>Адміністратор</a>
                <a href="/reviews" style={linkStyle}>Часті запитання</a>
                <a href="/support" style={linkStyle}>Підтримка</a>
            </div>
            {/* Центральний текст у нижній частині футера із сірою лінією зверху */}
            <p style={footerTextStyle}>&copy; 2023 To-Do List. Всі права захищені.</p>

            {/* Додайте напис "To-do List" курсивом в центрі зліва від центру */}
            <div style={todoListLabelStyle}>
                <label>
                    To-do List
                </label>
            </div>
            <div style={contactListLabelStyle}>
                <label>
                    Контактна інформація:
                </label>
            </div>
            <div style={contactNumberLabelStyle}>
                <label>
                    +380638770821:
                </label>
            </div>
            <div style={contactListLineStyle}></div>
        </footer>
    );
};

export default Footer;