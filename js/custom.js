const menuBar = document.querySelector("#menu-bar");
const sideBar = document.querySelector("aside");

menuBar.addEventListener('click', ()=> 
{
    console.log("Clicked");
    sideBar.classList.toggle("show-sidebar");
});