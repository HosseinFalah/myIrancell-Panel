const userBuyPacksTable = document.querySelector('.recommend-packets-table');
const userBuyPacksTableBody = document.querySelector('tbody');

async function getUserBasket () {
    const userToken = localStorage.getItem('user-token');
    const mainUrlApi = 'http://localhost:3000/api';

    const getBasket = await fetch(`${mainUrlApi}/user-buy`, {
        headers: {
            authorization: userToken
        }
    })

    const userBasket = await getBasket.json();

    userBasket.forEach(pack => {
        userBuyPacksTableBody.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${pack.buy_date}</td>
            <td>${pack.max_date}</td>
            <td>${pack.title}</td>
            <td>${pack.off} %</td>
            <td>${pack.price}</td>
        </tr>`)
    })
}

window.addEventListener('load', () => getUserBasket());