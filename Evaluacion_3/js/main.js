
const ListaTestimonios = [
        {
        imagen: "https://img.youtube.com/vi/vTTXINXvC1E/hqdefault.jpg",
        titulo: "Arte Rustico - Chiloe",
        texto: "",
        enlace: "https://www.youtube.com/watch?v=vTTXINXvC1E"
        },

        {
        imagen: "https://img.youtube.com/vi/QijdVKz43rM/hqdefault.jpg",
        titulo: "Lavanderia el Cobre - Calama",
        texto: " ",
        enlace: "https://www.youtube.com/watch?v=QijdVKz43rM"
        },

        {
        imagen: "https://img.youtube.com/vi/BeDBDO8Ns0M/hqdefault.jpg",
        titulo: "Magnanima - Calama",
        texto: "Con el objetivo de fortalecer el liderazgo femenino y potenciar el desarrollo de negocios liderados por mujeres, el Centro de Desarrollo de Negocios Sercotec.",
        enlace: "https://www.youtube.com/watch?v=BeDBDO8Ns0M"
        },

  


];



function cargarTestimonios() {
    // 1. Corregido: ID entre comillas
    const contenedor = document.getElementById('contenedor-testimonios');
    let html = '';

  
    ListaTestimonios.forEach((testimonio, index) => {
        const Activa = index === 0 ? 'active' : '';

        html += `
            <div class="carousel-item ${Activa}">
                <a href="${testimonio.enlace}"  target="_blank" >
                    <img src="${testimonio.imagen}" alt="${testimonio.titulo}" class="d-block w-100" style="cursor: pointer;">
                </a>
                <div class="carousel-caption d-none d-md-block">
                    <h5>${testimonio.titulo}</h5>
                    <p>${testimonio.texto}</p>
                </div>
               
            </div>`;
    });

  
    contenedor.innerHTML = html;
}
document.addEventListener('DOMContentLoaded', () => {
    cargarNoticias();
    cargarTestimonios();
});


const ListaNoticias = [
        {
        imagen: "img/noticias/noticia1.jpeg",
        titulo: "Apoyo gratuito impulsa el fortalecimiento de emprendimientos y pymes del Maule Sur con acciones concretas en el territorio",
        texto: "Charlas, asesorías en terreno, visitas a empresas y espacios de comercialización forman parte del trabajo permanente del CDN Linares",
        enlace: "https://sitios.sercotec.cl/centros-de-negocios/2026/08/13/apoyo-gratuito-impulsa-el-fortalecimiento-de-emprendimientos-y-pymes-del-maule-sur-con-acciones-concretas-en-el-territorio/"
        },

        {
        imagen: "img/noticias/noticia2.png",
        titulo: "CDN Melipilla, Municipalidad de Melipilla y Delegación Presidencial reúnen a servicios públicos para mejorar atención a emprendedores6",
        texto: "a Municipalidad de Melipilla, la Delegación Presidencial Provincial y Sercotec reunieron a SAG, TGR, SII, Seremi de Salud y Dirección del Trabajo ",
        enlace: "#"
        },

        {
        imagen: "img/noticias/noticia3.png",
        titulo: "Invitan a mujeres de la zona a fortalecer sus negocios con programa gratuito de formación empresarial",
        texto: "Con el objetivo de fortalecer el liderazgo femenino y potenciar el desarrollo de negocios liderados por mujeres, el Centro de Desarrollo de Negocios Sercotec.",
        enlace: "#"
        },

  


];



function cargarNoticias() {
    // 1. Corregido: ID entre comillas
    const contenedor = document.getElementById('contenedor-noticias');
    let html = '';

    // Nota: Asegúrate de que tu arreglo se llame exactamente 'ListaNoticias' (respetando mayúsculas)
    ListaNoticias.forEach((noticia, index) => {
        const Activa = index === 0 ? 'active' : '';

        html += `
            <div class="carousel-item ${Activa}">
                <div class="d-flex flex-column h-100">
                    <a href="${noticia.enlace}"  >
                        <img src="${noticia.imagen}" alt="${noticia.titulo}" class="d-block w-100" style="cursor: pointer;">
                    </a>
                    <div class="p-4 bg-body-tertiary text-center">
                        <h5>${noticia.titulo}</h5>
                        <p>${noticia.texto}</p>
                    </div>
                </div>
            </div>`;
    });

    // 2. Corregido: Usar la misma variable 'contenedor'
    contenedor.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', cargarNoticias);



//Array para Cada i magen del carrusel, se cargan de forma local

const HeroArray = [
        {
        imagen: "img/herobg1.jpg",
        alt: 'Asesoria personalizada',
        titulo: '',
        texto: ''
        },

        {
        imagen: "img/banner-calculadora-circularidad-escritorio.jpg",
        alt: 'Sustentabilidad',
        titulo: 'Sustentabilidad',
        texto: 'Calcula la circularidad de tu empresa'
        },

        {
        imagen: "img/banner_mesu_escritorio.jpg",
        alt: 'Satisfaccion usuario',
        titulo: 'Encuestas',
        texto: 'Medicion de Satisfaccion de Usuario 2026'
        },

        {
        imagen: "img/encuentrodirigentes-escritorio.jpg",
        alt: 'Encuentro Nacional',
        titulo: 'Postulacion Dirigentes 2026',
        texto: 'Postula al encuentro de Dirigentes 2026'
        },

        {
        imagen: "img/heroimg.jpg",
        alt: 'Capital Semilla',
        titulo: 'Fondo concursable',
        texto: 'Modo Empleo, fondo concursable disponible.'
        },



];

//se traen los elementos por su id y clases
const heroImg = document.getElementById('hero-img');
const heroTitle = document.querySelector('.hero-titulo');
const heroTxt= document.querySelector('.hero-texto');
const btnPrev = document.querySelector('.herobtn-prev');
const btnNxt = document.querySelector('.herobtn-next');
// se fija indice en 0
let indiceActual=0;

//funcion para cargar imagen, src,alt,titulo,txt contenido
function cargarImg(indice){
 const slideActual= HeroArray[indice];
        heroImg.src = slideActual.imagen;
        heroImg.alt = slideActual.alt;
        heroTitle.textContent = slideActual.titulo; 
        heroTxt.textContent = slideActual.texto;
}
//funcion para imagen nxt
function nxtImg(){

        if (
              indiceActual===HeroArray.length-1){
                indiceActual=0
        }else
                indiceActual ++;
        cargarImg(indiceActual);
}

//funcion  para imagen previa
function prevImg() {
    if (indiceActual === 0) { 
        indiceActual = HeroArray.length - 1; 
    } else {
        indiceActual--;
    }
    cargarImg(indiceActual);
}


//listeners
btnNxt.addEventListener('click',nxtImg);
btnPrev.addEventListener('click',prevImg);
//se llama a la imagen actual segun el indice
cargarImg(indiceActual);


//funcion cargar logo 
function cargarLogo(idLogo,rutaImagen){
const logofoot = document.getElementById(idLogo);


if (logofoot){

logofoot.src = rutaImagen

}

}
cargarLogo('footer-logo', 'img/logo-mineecono.png');

//formulario contacto

        const formularioContacto = document.getElementById('contactForm');

        formularioContacto.addEventListener('submit', function(event) {
        event.preventDefault();

        if (document.getElementById('alertaDinamica')) {
                document.getElementById('alertaDinamica').remove();
        }

        const contenedorAlerta = document.createElement('div');
        contenedorAlerta.id = 'alertaDinamica';
        contenedorAlerta.className = 'alert alert-success mt-4 d-flex justify-content-between align-items-center shadow-sm';
        
        contenedorAlerta.innerHTML = `
                <span><i class="bi bi-check-circle-fill me-2"></i> <strong>¡Éxito!</strong> Tu mensaje fue enviado correctamente.</span>
        `;

        const botonCerrar = document.createElement('button');
        botonCerrar.className = 'btn btn-sm btn-success';
        botonCerrar.textContent = 'Cerrar';

        botonCerrar.addEventListener('click', function() {
                formularioContacto.removeChild(contenedorAlerta);
        });

        contenedorAlerta.appendChild(botonCerrar);
        formularioContacto.appendChild(contenedorAlerta);

        formularioContacto.reset();
        });
  
 
 //modo oscuro y claro       

        const btnTema = document.getElementById('toggleColor');
        const iconoTema = document.getElementById('toggleIcon');
        const textoTema = document.getElementById('textoTema');
        const htmlElement = document.documentElement; 
//funcion iniciarTema
        function inicializarTema() {
                const temaActual = htmlElement.getAttribute('data-bs-theme') || 'light';

                if (temaActual === 'dark') {
                        iconoTema.className = 'bi bi-moon-fill text-light';
                        if(textoTema) textoTema.textContent = 'Modo Oscuro';
                } else {
                        iconoTema.className = 'bi bi-sun-fill text-warning';
                        if(textoTema) textoTema.textContent = 'Modo Claro';
                }
        }

        // 2. El evento de hacer clic en el botón
        btnTema.addEventListener('click', function() {
               
                const temaActual = htmlElement.getAttribute('data-bs-theme');

                if (temaActual === 'dark') {
                        // Pasamos a Modo Claro
                        htmlElement.setAttribute('data-bs-theme', 'light');
                        iconoTema.className = 'bi bi-sun-fill text-warning';
                        if(textoTema) textoTema.textContent = 'Modo Claro';
                        
                } else {
                        // Pasamos a Modo Oscuro
                        htmlElement.setAttribute('data-bs-theme', 'dark');
                        iconoTema.className = 'bi bi-moon-fill text-light';
                        if(textoTema) textoTema.textContent = 'Modo Oscuro';
                }
        });
        // se llama la funcion
        inicializarTema();



     

// Función asíncrona para obtener los datos

async function obtenerDivisas() {
  const tbody = document.getElementById('cuerpotabla');
  
  try {
    const respuesta = await fetch('https://api.gael.cloud/general/public/monedas'); 
    const datos = await respuesta.json();
    console.log("Todas las monedas disponibles:", datos);
    
    const objetoDolar = datos.find(moneda => moneda.Codigo === 'USD');
    const objetoEuro = datos.find(moneda => moneda.Codigo === 'EUR');
    const objetoUF = datos.find(moneda => moneda.Codigo === 'UF');
    const objetoUTM = datos.find(moneda => moneda.Codigo === 'UTM');

    const valorDolar = objetoDolar ? objetoDolar.Valor : '---';
    const valorEuro = objetoEuro ? objetoEuro.Valor : '---';
    const valorUF = objetoUF ? objetoUF.Valor : '---';
    const valorUTM = objetoUTM ? objetoUTM.Valor : '---';

  
    if (tbody) {
        tbody.innerHTML = `
          <tr>
              <td data-label="Divisa">Dólar Americano</td>
              <td data-label="Código">USD</td>
              <td data-label="Tipo de Cambio CLP">$${valorDolar}</td>
          </tr>
          <tr>
              <td data-label="Divisa">Euro</td>
              <td data-label="Código">EUR</td>
              <td data-label="Tipo de Cambio CLP">$${valorEuro}</td>
          </tr>
          <tr>
              <td data-label="Divisa">Unidad de Fomento</td>
              <td data-label="Código">UF</td>
              <td data-label="Tipo de Cambio CLP">$${valorUF}</td>
          </tr>
          <tr>
              <td data-label="Divisa">Unidad Tributaria Mensual</td>
              <td data-label="Código">UTM</td>
              <td data-label="Tipo de Cambio CLP">$${valorUTM}</td>
          </tr>
        `;
    }
    
    // 2.barra sup
    const navDolar = document.getElementById('valor-dolar');
    const navUF = document.getElementById('valor-uf');
    const navEuro = document.getElementById('valor-euro');
    const navUTM = document.getElementById('valor-utm');

    if (navDolar) navDolar.innerText = `$${valorDolar}`;
    if (navUF) navUF.innerText = `$${valorUF}`;
    if (navEuro) navEuro.innerText = `$${valorEuro}`;
    if (navUTM) navUTM.innerText = `$${valorUTM}`;

  } catch (error) {
    console.error("Hubo un error al conectar con la API:", error);
    if (tbody) {
        tbody.innerHTML = `<tr><td colspan="4" class="text-center text-danger">Error al cargar los datos</td></tr>`;
    }
  }
}

obtenerDivisas();



//tarjeta servicios a contacto

document.addEventListener('DOMContentLoaded', () => {

    const btnServicio = document.querySelectorAll('.btn-contacto-servicio');
    const inputServ = document.getElementById('servicioSeleccionado');

    btnServicio.forEach(boton => {
        
       
        boton.addEventListener('click', (e) => {
            const nombreServicio = e.currentTarget.getAttribute('data-servicio');
            
            if(inputServ) {
                inputServ.value = nombreServicio;
            }
        }); 

    }); 
}); 











