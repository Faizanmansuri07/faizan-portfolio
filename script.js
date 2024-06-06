const moreOption = document.querySelector(".more");
const btn = document.querySelector(".info_more-btn");
const icons = document.querySelector(".icons");
const body = document.querySelector("body");
const visibility = document.querySelector(".visibility");
const resume = document.querySelector(".resume")
const about = document.querySelector(".csg");
const portfolio = document.querySelector(".portfolio")
let show = true;

btn.addEventListener('click' , ()=>{
    if(show) {
    moreOption.style.height ="370px";
    moreOption.style.display ="block";
   icons.classList.add("rotate");
   show = false;
    }
    else{
        moreOption.style.height ="0px";
        moreOption.style.display ="none";
       icons.classList.remove("rotate");

       show = true
    }
});

// ---------------
// popup
// ----------------
   //&&&&&
// ----------------
// form submition
// -------------------
const container = document.querySelector(".container");

const button = document.querySelector(".submit");

function showPopup() {

    const fullname = document.querySelector("#fullname");
    const email = document.querySelector(".email");
    const textarea = document.querySelector("#textarea");

    if(fullname.innerText === " ") {
        fullname.style.border ="1px solid red";
    }   
    else  if(textarea.innerHTML ===" ") {
        textarea.style.border ="1px solid red"
    }   
    else if(email.innerHTML ===" ") {
        email.style.border ="1px solid red";
         
    }
    else {
    container.style.display ="block";
    setTimeout(()=>{
        container.style.display ="none";
    },2000);
    fullname.value = " ";
    textarea.value =" ";
    email.value =" ";
}
}

function showdet(op) {
    if(op ==="about") {
        about.classList.remove("visibility");
        resume.classList.add("visibility");
        portfolio.classList.add("visibility");

    }
   else if(op ==="resume") {
            resume.classList.remove("visibility");
            about.classList.add("visibility");
            portfolio.classList.add("visibility");
   }
   else if(op ==="portfolio") {
    portfolio.classList.remove("visibility");
    about.classList.add("visibility");
    resume.classList.add("visibility");
   }
}