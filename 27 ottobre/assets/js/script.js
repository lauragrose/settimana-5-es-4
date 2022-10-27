// TOGGLE MENU ONCLICK IF!

var hiddeBtn = document.getElementById('hidden-list');
var menuBotton = document.getElementById('menu-btn');
menuBtn = () => {
    menuBotton.classList.toggle('menu-botton')
    hiddeBtn.classList.toggle('hidden-list')
}

// HEADER
let navMenuLista = document.querySelectorAll('.navMenu');
for (i = 0; i < navMenuLista.length; i++) {
    navMenuLista[i].addEventListener('mouseover', function() {
        this.classList.add('onNavMenu');
    });
    navMenuLista[i].addEventListener('mouseout', function() {
        this.classList.remove('onNavMenu');
    });
};

// MAIN
var title = document.getElementById('title');
bigger = () => {
    title.classList.add('bigger-btn');
};
color = () => {
    title.classList.add('color-btn');
};
bolder = () => {
    title.classList.add('bolder-btn');
};
hide = () => {
    title.classList.add('hidden-btn');
    title.classList.remove('show-btn');
};
show = () => {
    title.classList.add('show-btn');
    title.classList.remove('hidden-btn');
};
//ASIDE
let listItems = document.querySelectorAll('.list-items');
for (i = 0; i < listItems.length; i++) {
    
    listItems[i].addEventListener('mouseover', function () {
        this.classList.add('overText');
    });
    listItems[i].addEventListener('mouseout', function () {
        this.classList.remove('overText');
    });
    listItems[i].addEventListener('click', function () {
        this.classList.add('line');
    });
    listItems[i].addEventListener('dblclick', function () {
        this.classList.remove('line');
    });
};


