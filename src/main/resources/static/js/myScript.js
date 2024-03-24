const offsetPres = 65;
const elemento_nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > offsetPres) {
        elemento_nav.classList.add('fondo-cambiado1');
    } else {
        elemento_nav.classList.remove('fondo-cambiado1');
    }
});

const offsetProd = 700;
const elemento = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	var imagen = document.getElementById("Icono");
    if (scrollTop > offsetProd) {
        elemento.classList.add('fondo-cambiado2');
    	imagen.src = "../img/Icono_Dark.png";
    } else {
        elemento.classList.remove('fondo-cambiado2');
        imagen.src = "../img/Icono_White.png";
    }
});

const elemento_nombre = document.querySelector('.nombre');
const elemento_home = document.querySelector('.home');
const elemento_link = document.querySelector('.link');
const elemento_drop = document.querySelector('.drop');
const elemento_icono = document.querySelector('.icono');
window.addEventListener('scroll', () => {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > offsetProd) {
        elemento_nombre.classList.add('elemento-cambiado-a');
        elemento_home.classList.add('elemento-cambiado-a');
        elemento_link.classList.add('elemento-cambiado-a');
        elemento_drop.classList.add('elemento-cambiado-a');
        elemento_icono.classList.add('elemento-cambiado-a');
    } else {
        elemento_nombre.classList.remove('elemento-cambiado-a');
        elemento_home.classList.remove('elemento-cambiado-a');
        elemento_link.classList.remove('elemento-cambiado-a');
        elemento_drop.classList.remove('elemento-cambiado-a');
        elemento_icono.classList.remove('elemento-cambiado-a');
    }
});

const elemento_producto = document.querySelector('.Prod');
const elemento_producto_desp = document.querySelector('.Producto');
window.addEventListener('scroll', () => {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > offsetProd) {
        elemento_producto.classList.add('DesplazarProd');
        elemento_producto_desp.classList.add('Producto_Desp');
    } else {
        elemento_producto.classList.remove('DesplazarProd');
        elemento_producto_desp.classList.remove('Producto_Desp');
    }
});

const offsetMerc = 1450;
const elemento_mercado_desp = document.querySelector('.Mercado');
const elemento_mc_desp = document.querySelector('.Mc');
window.addEventListener('scroll', () => {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > offsetMerc) {
        elemento_mercado_desp.classList.add('Mercado_Desp');
        elemento_mc_desp.classList.add('McDesp');
    } else {
        elemento_mercado_desp.classList.remove('Mercado_Desp');
        elemento_mc_desp.classList.remove('McDesp');
    }
});

const offsetArg = 1800;
const elemento_argumento_bg = document.querySelector('.Argumento');
window.addEventListener('scroll', () => {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > offsetArg) {
        elemento_argumento_bg.classList.add('ArgumentoDesp');
    } else {
        elemento_argumento_bg.classList.remove('ArgumentoDesp');
    }
});

const offsetModelNeg = 2400;
const elemento_modelo_negocio = document.querySelector('.ModelNeg');
const elemento_modelo_desp = document.querySelector('.Modelo');
window.addEventListener('scroll', () => {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > offsetModelNeg) {
        elemento_modelo_negocio.classList.add('ModelNegDesp');
        elemento_modelo_desp.classList.add('ModeloDesp');
    } else {
        elemento_modelo_negocio.classList.remove('ModelNegDesp');
        elemento_modelo_desp.classList.remove('ModeloDesp');
    }
});

const elemento_imagen_fase = document.querySelector('.ImagenFase1');
const elemento_descrip_fase = document.querySelector('.DescripFase1');
let clickCount = 0;
const btt1 = document.getElementById('Bott1');
btt1.addEventListener('click', function(event1){
	event1.preventDefault();
	if(clickCount == 0){
		elemento_imagen_fase.classList.add('ImagenFase3');
		elemento_descrip_fase.classList.add('DescripFase3');
		clickCount = 2;
	}else if(clickCount == 2){
		elemento_imagen_fase.classList.remove('ImagenFase3');
		elemento_descrip_fase.classList.remove('DescripFase3');
		elemento_imagen_fase.classList.add('ImagenFase2');
		elemento_descrip_fase.classList.add('DescripFase2');
		clickCount = 1;
	}else if(clickCount == 1){
		elemento_imagen_fase.classList.remove('ImagenFase3');
		elemento_descrip_fase.classList.remove('DescripFase3');
		elemento_imagen_fase.classList.remove('ImagenFase2');
		elemento_descrip_fase.classList.remove('DescripFase2');
		clickCount = 0;
	}
});
const btt2 = document.getElementById('Bott2');
btt2.addEventListener('click', function(event2){
	event2.preventDefault();
	if(clickCount == 0){
		elemento_imagen_fase.classList.add('ImagenFase2');
		elemento_descrip_fase.classList.add('DescripFase2');
		clickCount++;
	}else if(clickCount == 1){
		elemento_imagen_fase.classList.add('ImagenFase3');
		elemento_descrip_fase.classList.add('DescripFase3');
		clickCount++;
	}else if(clickCount == 2){
		elemento_imagen_fase.classList.remove('ImagenFase3');
		elemento_descrip_fase.classList.remove('DescripFase3');
		elemento_imagen_fase.classList.remove('ImagenFase2');
		elemento_descrip_fase.classList.remove('DescripFase2');
		clickCount = 0;
	}
});

const offsetFases = 3550;
const elemento_fases = document.querySelector('.Fases');
const elemento_fases_hoj = document.querySelector('.Hoj');
window.addEventListener('scroll', () => {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > offsetFases) {
        elemento_fases.classList.add('FasesDesp');
        elemento_fases_hoj.classList.add('HojDesp');
    } else {
        elemento_fases.classList.remove('FasesDesp');
        elemento_fases_hoj.classList.remove('HojDesp');
    }
});




