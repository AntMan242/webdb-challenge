const router = require('express').Router();

const Actions = require('./action-model.js');

router.get('/', (req, res ) => {
    Actions.find()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res
             .status(500).json({ message: 'Unable to retrieve your action at this time'});
            });


});

router.post('/', (req,res) => {
    Actions.add(req.body)
    .then( added => {
        res.status(200).json(added);
    })
    .catch(err => {
       res
        .status(500)
        .json({ message: 'We have an Error'});
    });
});


// router.get('/', (req, res) => {
//     db('actions')
//     .then(actions => {
//         res.status(200).json(actions)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// });

// //check
// router.post('/', async (req, res) => {
//     try {
//         const action = await db('actions').insert(req.body)
//         res.status(201).json(action)
//     } catch (error) {
//         res.status(500).json({ error: 'Could not complete that posting!' })
//     }
// });

module.exports = router;