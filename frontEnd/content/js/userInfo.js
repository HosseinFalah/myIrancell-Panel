const userProfile = document.querySelector('.user-profile');
const userPersonalInfo = document.querySelector('.user-name');
const userPhoneNumber = document.querySelector('.user-number');
const userCharge = document.querySelector('.user-number');
const charge = document.querySelector('.overlay');

// setUser
localStorage.setItem('user-token', '748e7284-52df-02b5-64a6-35d3c95fc979');

async function getUsers () {
    const mainUrlApi = 'http://localhost:3000/api';
    
    let userToken = localStorage.getItem('user-token')

    const getUser = await fetch(`${mainUrlApi}/users`, {
        headers: {
            authorization: userToken
        }
    })

    const getUserinfo = await getUser.json();

    userProfile.setAttribute('src', getUserinfo[0].profile);
    userPersonalInfo.innerHTML = `سلام ${getUserinfo[0].firstname} ${getUserinfo[0].lastname}`;
    userPhoneNumber.innerHTML = getUserinfo[0].phone;
    charge.innerHTML = `${getUserinfo[0].charge} تومان`;

}

window.addEventListener('load', () => getUsers());
