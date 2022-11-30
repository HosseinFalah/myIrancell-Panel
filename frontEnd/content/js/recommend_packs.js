const recommendPacketsTable = document.querySelector('.recommend-packets-table');
const recommendPacketsTableBody = document.querySelector('tbody');

async function getRecommendPacks () {
    const mainUrlApi = 'http://localhost:3000/api';
    let userToken = localStorage.getItem('user-token');

    const getRecommendPack = await fetch(`${mainUrlApi}/recommend-packs`, {
        headers: {
            authorization: userToken
        }
    })

    const RecommendPack = await getRecommendPack.json();

    RecommendPack.forEach(packet => {
        recommendPacketsTable.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${packet.max_date}</td>
            <td>${packet.title}</td>
            <td>${packet.off} %</td>
            <td>${packet.price}</td>
            <td><button class="buy-packet-btn lalezar-font">خرید</button></td>
        </tr>`)
    })
}

window.addEventListener('load', () => getRecommendPacks());