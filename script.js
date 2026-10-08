/* =========================
   SIDEBAR
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const sidebar =
    document.getElementById("sidebar");

const overlay =
    document.getElementById("overlay");


menuBtn.addEventListener("click", function(){

    sidebar.classList.toggle("active");

    overlay.classList.toggle("active");

});


overlay.addEventListener("click", function(){

    sidebar.classList.remove("active");

    overlay.classList.remove("active");

});


/* =========================
   LANGUAGE MENU
========================= */

const languageBtn =
    document.getElementById("languageBtn");

const languageMenu =
    document.getElementById("languageMenu");

const currentLanguage =
    document.getElementById("currentLanguage");


if(languageBtn && languageMenu){

    languageBtn.addEventListener("click", function(event){

        event.stopPropagation();

        languageMenu.classList.toggle("active");

    });

}


/* =========================
   CLOSE LANGUAGE MENU
========================= */

if(languageBtn && languageMenu){

    document.addEventListener("click", function(event){

        if(
            !languageBtn.contains(event.target) &&
            !languageMenu.contains(event.target)
        ){

            languageMenu.classList.remove("active");

        }

    });

}

/* =========================
   LANGUAGE BUTTONS
========================= */

const languageButtons =
    document.querySelectorAll(
        "#languageMenu button"
    );


languageButtons.forEach(button => {

    button.addEventListener(
        "click",
        function(){

            const language =
                this.dataset.lang;

            changeLanguage(language);

            languageMenu.classList.remove(
                "active"
            );

        }
    );

});


/* =========================
   LOAD SAVED LANGUAGE
========================= */

window.addEventListener(
    "load",
    function(){

        const savedLanguage =
            localStorage.getItem(
                "selectedLanguage"
            );

        if(savedLanguage){

            currentLanguage.textContent =
                savedLanguage.toUpperCase();

            setTimeout(
                function(){

                    changeLanguage(
                        savedLanguage
                    );

                },
                1000
            );

        }

    }
);

function calculateAge(birthDate){

    const today = new Date();

    let months =
        (today.getFullYear() - birthDate.getFullYear()) * 12;

    months +=
        (today.getMonth() - birthDate.getMonth());

    return months;
}


const witoAge = document.getElementById("wito-age");

if(witoAge){

    const birthDate =
        new Date("2025-07-15");

    witoAge.textContent =
        calculateAge(birthDate) + " maanden";
}


const queenAge = document.getElementById("queen-age");

if(queenAge){

    const birthDate =
        new Date("2025-12-15");

    queenAge.textContent =
        calculateAge(birthDate) + " maanden";
}

document.querySelectorAll(".more-btn").forEach(button => {

    button.addEventListener("click", function(){

        const card = this.closest(".dog-box");

        card.classList.toggle("active");

        if(card.classList.contains("active")){
            this.textContent = "Minder info";
        } else {
            this.textContent = "Meer info";
        }

    });

});

document.querySelectorAll(".more-btn").forEach(button => {

    button.addEventListener("click", function() {

        const card = this.closest(".dog-box");

        card.classList.toggle("active");

    });

});

document.querySelectorAll(".more-btn").forEach(button => {

    button.addEventListener("click", function () {

        this.closest(".dog-box").classList.toggle("active");

    });

});