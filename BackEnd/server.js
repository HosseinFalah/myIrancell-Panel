const MyIrancellDB = require('./db/MyirancellDB');

MyIrancellDB.connect(err => {
    if (err) throw new Error(`message: ${err}`);
    else console.log('Connect To dataBase successfully:');
});