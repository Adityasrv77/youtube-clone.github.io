var menuicon = document.querySelector(".menu-icon")
var sidebar = document.querySelector(".sidebar")
var contanier = document.querySelector(".contanier")

menuicon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    contanier.classList.toggle("large-contanier");
}

