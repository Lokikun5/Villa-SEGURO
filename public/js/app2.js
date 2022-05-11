const btnUp = document.querySelector('.btnUp');
const i = document.querySelector('i');

btnUp.addEventListener('click', () =>{

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

window.addEventListener("scroll", () =>{
    if (window.scrollY > 1500) {
        i.style.color = "#FFFFFF";   
    }else {
        i.style.color = "#1E1E1E"; 
    }
}
)