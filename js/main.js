var botonHamb = document.getElementById('botonHamb');
var menu = document.getElementById('menu');
var anterior = document.getElementById('anterior');
var siguiente = document.getElementById('siguiente');
var slider = document.getElementById('slider');
const imagenes = document.querySelectorAll('.imgSlider');
var toggle = 0;
var image = 0;

botonHamb.onclick = function(){
    menu.style.right = '0';
    switch (toggle) {
        case 0:
            menu.style.right = '0';
            botonHamb.classList.remove("fa-bars");
            botonHamb.classList.add("fa-window-close");
            toggle = 1;
        break;

        case 1:
            menu.style.right = '-400px';
            botonHamb.classList.add("fa-bars");
            botonHamb.classList.remove("fa-window-close");
            toggle = 0;
        break;
    }
}

siguiente.onclick = function(){
    if(image == 3){
        image = -1;
    }
    image = image + 1;
    console.log(image);
    imagenes.forEach(imagenes => imagenes.style.opacity = '0');
    imagenes[image].style.opacity = '1';
}

anterior.onclick = function(){
    if(image == 0){
        image = 4;
    }
    image = image - 1;
    console.log(image);
    imagenes.forEach(imagenes => imagenes.style.opacity = '0');
    imagenes[image].style.opacity = '1';
}

