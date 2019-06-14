const router = require('express').Router();

const Project = require('./project-model');
const Action = require('../action/action-model');
const db = require('../data/dbConfig.js');

router.get('/', (req, res ) => {
    console.log(';;;;;;;;;;;;;;;; in get projects');
      Project.find()
          .then(projects => {
            console.log(';;;;;;;;;;;;;;;;;;' + projects);
              res.status(200).json(projects);
          })
          .catch(err => {
              res
                  .status(500)
                  .json( {message: 'Not able to fetch your Project Now'});
          });
  });
   
  router.get("/:id", (req, res) => {
    const { id } = req.params;
    db("projects")
      .where({ id: id })
      .first()
      .then(projects => {
        db("projects")
          .where({ id })
          .then(actions => {
            projects.actions = actions;
            return res.status(200).json(projects);
          });
      })
      .catch(err => {
        res.status(500).json({ Error: "There was an error getting that" });
      });
  });

  router.post('/', async (req, res) => {
    console.log(';:::::::::::inside the server::::::::')
      const project = req.body;
      if (project.name) {
        try {
          const inserted = await Project.add(project);
          res.status(201).json(inserted);
        } catch (error) {
          console.log(error);
          res
            .status(500)
            .json({ message: 'We encountered an error creating the project' });
        }
      } else {
        res.status(400).json({ message: 'Please provide name of Project' });
      }
    });


// router.get('/', async (req, res) => {
//     try {
//         const project = await Project.get(req.params.query);
//         res.status(200).json(project);
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({
//             message:'Error getting  the project'
//         });
//     }
// });

// router.get('/:id', async (req, res) => {
//     try {
//         const project = await Project.get(req.params.id);

//         if(project){
//             res.status(200).json(project);
//         }else{
//             res.status(404).json({message: 'The Project Was not found'})
//         }
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({
//             message:'Error retrieving project'
//         });
//     }
// });

// router.post('/', async (req, res) => {
//     try {
//         const project = await Project.insert(req.body);
//         console.log(project);
//             res.status(201).json(project);
//     } 
//     catch (error) {
//         console.log(error)
//         res.status(500).json({
//             message:'Error posting project'
//         });
//     }
// });

// router.get('/', (req, res) => {
//     db('projects')
//     .then(projects => {
//         res.status(200).json(projects)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// }); 

// //check
// router.post('/', async (req, res) => {
//     try {
//         const project = await db('projects').insert(req.body)
//         res.status(201).json(project)
//     } catch (error) {
//         res.status(500).json({ error: 'Error! Could not post!' })
//     }
// });


// router.get('/project/:id', (req, res) => {
//     const { id } = req.params;
//         db('projects')
//            .where({ id: id })
//            .first()
//            .then(projects => {
//                db('actions')
//                  .where({ project_id: id }).then(actions => {
//                 (projects.actions = actions);
//                   return res.status(200).json(projects);
//                 });
//            })
//             .catch(err => {
//                 res.status(500).json({ Error: "There was an error during retrieval" })
//             });
// });

module.exports = router;