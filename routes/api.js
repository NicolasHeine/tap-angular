// Configuration MongoDB
let mongodb = require('mongodb');
let ObjectId = mongodb.ObjectID;
let MongoClient = mongodb.MongoClient;
let mongodbUrl = 'mongodb://localhost:27017/tasks';

// Encoded password
const bcrypt = require('bcrypt');

// Token
const jwt = require('jsonwebtoken');

// Configuration du module
let express = require('express');
let router = express.Router();

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
                res.json({error: false, content: userInsered.ops[0]});
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
            const passwordIsValid = bcrypt.compareSync(req.body.password, user[0].password);
            if (!passwordIsValid) {
              res.json({error: 'Wrong login'});
            }else{
              const userToken = jwt.sign({ id: user[0]._id }, 'test', { expiresIn: 86400 });
              res.json({error: false, token: userToken, id: user[0]._id});
            }
          }
        }
      })

      db.close();
    }
  });
});

// Get data from token
router.get('/getdata', VerifyToken, (req, res, next) => {
  if(!req.userId){
    res.json({error: 'Wrong token'})
  }else{
    // Ouvrir une connexion sur la base MongoDb
    MongoClient.connect(mongodbUrl, (err, db) =>{
      // Tester la connexion
      if(err){
        res.send(err)
      }else{
        // Check if user exist
        db.collection('user').find({_id: ObjectId(req.userId)}).toArray((err, user) => {
          // Tester la commande MongoDb
          if(err){
            res.send(err);
          }else{
            // Check if user exist
            if(!user.length){
              res.json({error: 'User not exist'});
            }else{
              res.json({error: false, user: user[0]});
            }
          }
        })
        db.close();
      }
    });
  }
});

// Save tap
router.post('/save', VerifyToken, (req, res, next) => {
  // Ouvrir une connexion sur la base MongoDb
  MongoClient.connect(mongodbUrl, (err, db) =>{
    // Tester la connexion
    if(err){
      res.send(err)
    }else{
      // Check if user exist
      db.collection('user').find({_id: ObjectId(req.body.id_user)}).toArray((err, user) => {
        // Tester la commande MongoDb
        if(err){
          res.send(err);
          db.close();
        }else{
          // Check if user exist
          if(!user.length){
            res.json({error: 'User not exist'});
            db.close();
          }else{
            db.collection('tap_score').insertOne({score: req.body.score, firstName: user[0].firstName, lastName: user[0].lastName, time: new Date()}, function(err, scoreInsered){
              res.json({error: false});
              db.close();
            })
          }
        }
      })
    }
  });
});

// Get all scores
router.get('/getscores', VerifyToken, (req, res, next) => {
  if(!req.userId){
    res.json({error: 'Wrong token'})
  }else{
    // Ouvrir une connexion sur la base MongoDb
    MongoClient.connect(mongodbUrl, (err, db) =>{
      // Tester la connexion
      if(err){
        res.send(err)
      }else{
        // Check if user exist
        db.collection('tap_score').find().toArray((err, scores) => {
          // Tester la commande MongoDb
          if(err){
            res.send(err);
          }else{
            // Check if user exist
            if(!scores.length){
              res.json({error: 'No score saved'});
            }else{
              res.json({error: false, scores: scores});
            }
          }
        })
        db.close();
      }
    });
  }
});

function VerifyToken(req, res, next) {
  // Récupération du token
  const token = req.headers['x-access-token'];

  // Message d'erreur
  if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' });

  // Vérification du token
  jwt.verify(token, 'test', (err, decoded) => {
    // Message d'erreur
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    // Envoie de la réponse
    req.userId = decoded.id;
    next();
  });
}

// Export du module
module.exports = router;