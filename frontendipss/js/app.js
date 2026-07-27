
const requestOptions = {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer frontendipss'
    }
};

async function cargarNosotros() {
    try {
        const respuesta = await fetch('/frontendipss/api/public/about-us', requestOptions);
        const respuestaJson = await respuesta.json();

        console.log("Respuesta de About-Us:", respuestaJson);


        const datos = respuestaJson.data[0];

        const contenedor = document.getElementById('nosotros-container');
        if (!contenedor) return;

        let htmlValores = '';
        if (datos.values && datos.values.length > 0) {
            datos.values.forEach(valor => {
                htmlValores += `
                    <div class="col-md-6 col-lg-3 mb-3">
                        <div class="card h-100 border-0 shadow-sm bg-light">
                            <div class="card-body">
                                <h6 class="fw-bold text-primary">${valor.name}</h6>
                                <p class="card-text small text-muted mb-0">${valor.description}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
        contenedor.innerHTML = `
            <div class="row g-4 mb-5">
                <div class="col-md-6">
                    <div class="card h-100 border-0 shadow-sm p-3">
                        <div class="card-body">
                            <h4 class="card-title fw-bold text-primary mb-3">
                                <i class="bi bi-compass me-2"></i>Misión
                            </h4>
                            <p class="card-text text-secondary fs-5">${datos.mission}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100 border-0 shadow-sm p-3">
                        <div class="card-body">
                            <h4 class="card-title fw-bold text-primary mb-3">
                                <i class="bi bi-eye me-2"></i>Visión
                            </h4>
                            <p class="card-text text-secondary fs-5">${datos.vision}</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3 class="text-center fw-bold mb-4">Nuestros Valores</h3>
            <div class="row">
                ${htmlValores}
            </div>
        `;

    } catch (error) {
        console.error("Error al cargar Nosotros:", error);
    }
}
async function cargarServicios() {
    try {
        const respuesta = await fetch('/frontendipss/api/public/services', requestOptions);
        const respuestaJson = await respuesta.json();

   
        const listaServicios = respuestaJson.data.servicios;

        const contenedor = document.getElementById('servicios-container');
        let htmlCards = '';

        listaServicios.forEach(servicio => {

            let listaBeneficios = '';
            if (servicio.benefits && servicio.benefits.length > 0) {
                listaBeneficios = '<ul class="list-unstyled mt-3 mb-0 small text-muted">';
                servicio.benefits.forEach(beneficio => {
                    listaBeneficios += `<li><i class="bi bi-check-circle-fill text-success me-2"></i>• ${beneficio}</li>`;
                });
                listaBeneficios += '</ul>';
            }

 
            htmlCards += `
                <div class="col-md-6 col-lg-3 mb-4">
                    <div class="card h-100 shadow-sm border-0">
                        <img src="img/Service${servicio.id}.png" class="card-img-top p-3" alt="${servicio.title}" onerror="this.style.display='none'">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-primary fw-bold">${servicio.title}</h5>
                            <p class="card-text text-secondary flex-grow-1">${servicio.description}</p>
                            ${listaBeneficios}
                        </div>
                    </div>
                </div>
            `;
        });

        contenedor.innerHTML = htmlCards;

    } catch (error) {
        console.error("Error al cargar Servicios:", error);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    cargarServicios();
    cargarNosotros();
});