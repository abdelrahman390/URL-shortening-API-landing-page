const menuContainer = document.getElementById("nav__menu");

const openMenu = () => {

    if(menuContainer.classList.contains("nav_open")){
        menuContainer.classList.remove("nav_open");
    }else{
        menuContainer.classList.add("nav_open");
    }
}