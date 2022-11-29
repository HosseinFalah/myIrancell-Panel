const express = require('express');
const cors = require('cors');
const MyIrancellDB = require('./db/MyirancellDB');
const getUserIDFromUserToken = require('./utils/funcs');

const app = express();
app.use(cors());

app.get('/api/users', (req, res) => {
    let userToken = req.headers.authorization;
    let getMainUserQuery = `SELECT * FROM users WHERE token = "${userToken}"`
    
    MyIrancellDB.query(getMainUserQuery, (err, result) => {
        if (err) res.send(null);
        else res.send(result);
    })
});

app.get('/api/services/:isActive', (req, res) => {
    let isActive = req.params.isActive;
    let getServicesQuery = `SELECT * FROM services WHERE isActive = ${isActive}`;

    MyIrancellDB.query(getServicesQuery, (err, result) => {
        if (err) res.send(null);
        else res.send(result);
    })
});

app.get('/api/recommend-packs', (req, res) => {
    let userToken = req.headers.authorization;
    getUserIDFromUserToken(userToken).then((result) => {
        let getUserRecommendPacksQuery = `SELECT * FROM recommend_packet WHERE userID = ${result[0].id}`;
    
        MyIrancellDB.query(getUserRecommendPacksQuery, (err, result) => {
            if (err) res.send(null);
            else res.send(result);
        })
    })
})

app.get('/api/user-buy', (req, res) => {
    let userToken = req.headers.authorization;
    getUserIDFromUserToken(userToken).then(result => {
        let getUserBuyInfo = `SELECT * FROM sales WHERE userID = ${result[0].id}`;
    
        MyIrancellDB.query(getUserBuyInfo, (err, result) => {
            if (err) res.send(null);
            else res.send(result);
        });
    })
})

app.listen(3000);