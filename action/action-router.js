const router = require('express').Router();

const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: './data/lambda.db3'
    }
}

const db = knex(knexConfig);

//check
router.get('/', (req, res) => {
    res.send('We Ready!')
});

router.post

module.exports = router;