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

// check
// router.get('/', (req, res) => {
//     res.send('We Ready!')
// });

router.get('/', (req, res) => {
    db('actions')
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

//check
router.post('/', async (req, res) => {
    try {
        const action = await db('actions').insert(req.body)
        res.status(201).json(action)
    } catch (error) {
        res.status(500).json({ error: 'Could not complete that posting!' })
    }
});

module.exports = router;