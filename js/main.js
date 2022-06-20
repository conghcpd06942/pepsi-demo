var action = document.querySelector(".btn-search")

action.addEventListener("click",function(){
    action.parentElement.classList.toggle("open")
    action.parentElement.classList.focus();
})
// end search
