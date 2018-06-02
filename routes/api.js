// Configuration MongoDB
let mongodb = require('mongodb');
let ObjectId = mongodb.ObjectID;
let MongoClient = mongodb.MongoClient;
let mongodbUrl = 'mongodb://localhost:27017/tasks';

// Encoded password
let bcrypt = require('bcrypt');

// Configuration du module
let express = require('express');
let router = express.Router();

// Configuration de la route principale => http://localhost:8080/api/
router.get('/', (req, res, next) => {
  res.json({ res: 'Bienvenue dans votre API' })
});

// Register user
router.post('/register', (req, res, next) => {
  // Ouvrir une connexion sur la base MongoDb
  MongoClient.connect(mongodbUrl, (err, db) =>{
    // Tester la connexion
    if(err){
      res.send(err)
    }else{
      // Check if user already exist
      db.collection('user').find({email:req.body.email}).toArray((err, user) => {
        // Tester la commande MongoDb
        if(err){
          res.send(err);
          db.close();
        }else{
          // Check if user already existe
          if(user.length){
            res.json({error: 'User already exist'});
            db.close();
          }else{
            bcrypt.hash(req.body.password, 10, function(err, hash) {
              db.collection('user').insertOne({firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, password: hash}, function(err, userInsered){
                res.json(userInsered.ops[0]);
                db.close();
              })
            });
          }
        }
      })
    }
  })
});

// Login user
router.post('/login', (req, res, next) => {
  // Ouvrir une connexion sur la base MongoDb
  MongoClient.connect(mongodbUrl, (err, db) =>{
    // Tester la connexion
    if(err){
      res.send(err)
    }else{
      // Check if user exist
      db.collection('user').find({email:req.body.email}).toArray((err, user) => {
        // Tester la commande MongoDb
        if(err){
          res.send(err);
        }else{
          // Check if user exist
          if(!user.length){
            res.json({error: 'User not exist'});
          }else{
            bcrypt.compare(req.body.password, user.password, function(err, res) {
              if(res) {
                // Passwords match
                res.json({success: true, token: ''});
              } else {
                res.json({error: 'Wrong login'});
              }
            });
          }
        }
      })
    }
  });

  db.close();
});

// Export du module
module.exports = router;