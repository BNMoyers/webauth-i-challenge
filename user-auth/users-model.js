//imports
const db = require('../data/dbConfig')

//exports

//helper methods
function find() {
    return db('users').select('id', 'username');
}