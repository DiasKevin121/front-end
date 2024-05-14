const toggleTheme = document.getElementById("toggleTheme"); /* função mudar tema do site */

const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion-header");
const menuLinks = document.querySelectorAll(".menu-link");

function changeTheme () {
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : 
    rootHtml.setAttribute("data-theme", "dark");


    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);
/* fim da função mudar tema do site */