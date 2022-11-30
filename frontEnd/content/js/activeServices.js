const serviceTitle = document.querySelector('.service-title');

async function getAtiveServices () {
    const mainUrlApi = 'http://localhost:3000/api';

    const getService = await fetch(`${mainUrlApi}/services/1`);
    const services = await getService.json();

    services.forEach(service => {
        serviceTitle.insertAdjacentHTML('afterend', `
        <div class="active-service-box flex align-items-center vazir-fb">
            <span class="active-service-icon flex align-items-center justify-content-center">
                <i class="${service.icon}"></i>
            </span>
            <div class="active-service-box-desc">
                <h4>${service.title}</h4>
                <h6>${service.max_date}</h6>
            </div>
        </div>`);
    });
}

window.addEventListener('load', () => getAtiveServices());