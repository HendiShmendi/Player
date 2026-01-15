// БУРГЕР-МЕНЮ
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav_open');
    });

    nav.addEventListener('click', (event) => {
        if (event.target.classList.contains('nav__link')) {
            nav.classList.remove('nav_open');
        }
    });
}

// КНОПКА "АКЦИИ И ХИТЫ" – ПЕРЕХОД В КАТАЛОГ
const heroScrollButton = document.getElementById('hero-scroll-button');
if (heroScrollButton) {
    heroScrollButton.addEventListener('click', () => {
        window.location.href = 'catalog.html';
    });
}

// ФИЛЬТРЫ КАТАЛОГА (РАБОТАЮТ НА catalog.html)
const filterButtons = document.querySelectorAll('.catalog__filter-button');
const productCards = document.querySelectorAll('.product-card');

if (filterButtons.length && productCards.length) {
    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            filterButtons.forEach((btn) => btn.classList.remove('is-active'));
            button.classList.add('is-active');

            productCards.forEach((card) => {
                const cardCategory = card.getAttribute('data-category');
                if (category === 'all' || cardCategory === category) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ФОРМА ОБРАТНОЙ СВЯЗИ (РАБОТАЕТ НА contacts.html)
const contactForm = document.getElementById('contact-form');
const formSuccessMessage = document.getElementById('form-success-message');

if (contactForm && formSuccessMessage) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const message = formData.get('message').trim();

        if (!name || !email || !message) {
            formSuccessMessage.textContent = 'Пожалуйста, заполните все поля формы.';
            formSuccessMessage.style.color = '#ff5a5a';
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formSuccessMessage.textContent = 'Введите корректный email.';
            formSuccessMessage.style.color = '#ff5a5a';
            return;
        }

        formSuccessMessage.textContent = 'Спасибо! Ваше сообщение отправлено.';
        formSuccessMessage.style.color = '#5be08a';
        contactForm.reset();
    });
}
