// Configuration MongoDB
let mongodb = require('mongodb');
let ObjectId = mongodb.ObjectID;
let MongoClient = mongodb.MongoClient;
let mongodbUrl = 'mongodb://localhost:27017/tasks';

// Configuration du module
let express = require('express');
let router = express.Router();

// Configuration de la route principale => http://localhost:8080/api/
router.get('/', (req, res, next) => {
  res.json({ res: 'Bienvenue dans votre API' })
});

router.get('/tasks', (req, res, next) => {

  // Ouvrir une connexion sur la base MongoDb
  MongoClient.connect(mongodbUrl, (err, db) =>{

    // Tester la connexion
    if(err){ res.send(err) }
    else {

      // Récupération des documents de la collection 'list' => find
      db.collection('list').find().toArray((err, tasks) => {

        // Tester la commande MongoDb
        if(err){ res.send(err) }

        else{
          // Envoyer les données au format json
          res.json(tasks)
        }
      })
    }

    // Fermer la connexion à la base MongoDb
    db.close();
  })

});

router.post('/task', (req, res, next) => {

  // Récupération des données depuis la requête
  let task = req.body;

  // Vérifier la présence de valeur dans la requête
  if(!task.title){ res.status(400); res.json({ "error": "Bad Data" });
  } else {

    // Définition de la propriété isDone
    task.isDone = false;

    // Ouvrir une connexion sur la base MongoDb
    MongoClient.connect(mongodbUrl, (err, db) =>{

      // Tester la connexion
      if(err){ res.send(err); db.close(); }
      else{

        // Ajouter un document dans la collection 'list' => insert
        db.collection('list').insert([task], (err, data) => {

          // Vérification de a commande MongoDb
          if(err){  res.send(err) }
          else{
            res.send(task)
            // Fermer la connexion à la base MongoDb
            db.close()
          }
        })
      }
    })
  }
});

// Export du module
module.exports = router;