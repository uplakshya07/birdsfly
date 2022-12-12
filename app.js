const getElement = (selector) => {
    const element = document.querySelector(selector);

    if (element) return element;
    throw Error(
        `Please double check your class names, there is no ${selector} class`
    );
};

const navbar = getElement(".navbar");
const navBtnDOM = getElement(".nav-btn");
const menuIcon = getElement(".menu");
const headerNav = document.querySelector(".header-nav");

navBtnDOM.addEventListener("click", () => {
    navbar.classList.toggle("active");
    navBtnDOM.classList.toggle("change-btn");
    menuIcon.classList.toggle("fa-times");
});