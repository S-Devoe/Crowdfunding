// Navigation


const nav= document.querySelector(".nav");
const btn = document.querySelector(".btns");
const menuBtn = document.getElementById("menu-btn");
const menuClose = document.getElementById("close-menu-btn")
const body = document.querySelector(".body");

menuBtn.addEventListener("click", () => {
    nav.classList.add("active");
    btn.classList.add("active");
    body.classList.add("active");

});

menuClose.addEventListener("click", ()=> {
    nav.classList.remove("active");
    btn.classList.remove("active");
    body.classList.remove("active");
})

// Bookmark
const bmkSetting = document.querySelector(".bmk-setting");
const bmkIcon = document.querySelector(".bmk-icon");
const changeText = document.querySelector("#change-text");

let i = 0;

bmkIcon.addEventListener("click", ()=>{

    if(i == 0){
        bmkSetting.classList.add("active")
        changeText.textContent="Bookmarked";
        i++;
        
    }
    else if(i == 1){
        bmkSetting.classList.remove("active")
        changeText.textContent="Bookmark";
        i--;
    }
});


// Modal

const backTheProject = document.querySelector(".btp");
const modalClose = document.querySelector(".modal-close");
const backTheProjectModal = document.querySelector(".btp-modal");


backTheProject.addEventListener("click", () => {
    backTheProjectModal.classList.add("active");
})

modalClose.addEventListener("click", ()=>{
    backTheProjectModal.classList.remove("active");
})

// Modal Interaction

const makePledges = document.querySelectorAll(".c-pledge");
const modalCards = document.querySelectorAll(".modal-card");
const supportModal = document.querySelector(".support-modal");
const clickCircles = document.querySelectorAll(".top-flex");


var modal = (modalClick) =>{
    modalCards[modalClick].classList.toggle("active");
};

clickCircles.forEach((clickCircle, i) => {
    clickCircle.addEventListener("click", () =>{
        modal(i);
    })
});

makePledges.forEach((makePledge) => {
    makePledge.addEventListener("click", () => {
        supportModal.classList.add("active");
        document.documentElement.scrollTop = 0;
        body.classList.add("active");
    })
});



