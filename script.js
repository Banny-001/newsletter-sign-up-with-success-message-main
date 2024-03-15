const form=document.querySelector("form");
const card=document.querySelector(".card");
const page=document.querySelector(".page");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    card.classList.add("hide");
    page.classList.remove('hide');
});
