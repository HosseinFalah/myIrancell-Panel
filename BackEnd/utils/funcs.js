const MyIrancellDB = require('./../db/MyirancellDB');

const getUserIDFromUserToken = userToken => {
    let getMainUserIDQuery = `SELECT id FROM users WHERE token = ${JSON.stringify(userToken)}`;

    return new Promise((resolve, reject) => {
        MyIrancellDB.query(getMainUserIDQuery, async (err, result) => {
            if (err) {
                console.log('Error In Getting Main User Id From User Token => ', err);
                return false
            }
            resolve(result);
        });
    })
};

module.exports = getUserIDFromUserToken;