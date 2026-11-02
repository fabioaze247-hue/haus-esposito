
document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // SIDEBAR
    // =========================

    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    if (menuBtn && sidebar && overlay) {

        menuBtn.addEventListener("click", function () {
            sidebar.classList.toggle("active");
            overlay.classList.toggle("active");
        });

        overlay.addEventListener("click", function () {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        });

    }


    // =========================
    // DOG INFORMATION EXPANSION
    // =========================

    const moreButtons = document.querySelectorAll(".more-btn");

    moreButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const dogBox = button.closest(".dog-box");

            if (!dogBox) return;

            const isOpen = dogBox.classList.toggle("active");

            button.setAttribute("aria-expanded", isOpen);

            button.dataset.translate = isOpen
                ? "lessInfo"
                : "moreInfo";

            if (typeof setLanguage === "function") {
                const languageSelect = document.getElementById("languageSelect");

                if (languageSelect) {
                    setLanguage(languageSelect.value);
                }
            }

        });

    });

});


// =========================
// NEWS NOTIFICATION
// =========================

const newsNavLink = document.querySelector(".news-nav-link");

const currentPage = window.location.pathname
    .split("/")
    .pop()
    .toLowerCase();

const isNewsPage = currentPage === "news.html";

if (newsNavLink && !isNewsPage) {
    newsNavLink.classList.add("show-news-badge");
}