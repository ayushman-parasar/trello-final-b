var express = require('express');
var router = express.Router();
var User = require('../models/User')


/* GET users listing. */
// for displaying the registration form 
router.get('/register', function(req, res, next) {
  res.render('register');
});

// for displaying the login form
router.get('/login', function(req, res, next) {
  res.render('login');
});

// for saving the user in the database
router.post('/register',(req, res, next) => {
  let email = req.body.email;
  User.findOne({email:email},(err, userTemp)=>{
      if(err) return next(err)
      if(userTemp){
      res.redirect('/users/login')
    }else{
     User.create(req.body,(err, createdUser)=>{
      if(err) return next(err)
      res.redirect('/users/login')
     })
      
      // res.redirect('/users/login')
    }
  })
  
  
})

// login post

router.post('/login',(req, res, next)=>{
 let {email, password} = req.body
 User.findOne({email},(err,foundUser)=>{
   console.log(foundUser)
   if(err) return next(err);
   if(!foundUser){
    console.log("hey founduse")
     return res.redirect("/users/login")
   }
   if(!foundUser.verifyPassword(password)){
     
      return res.redirect('/users/login')
   }
    req.session.userId = foundUser.id
    res.redirect('/home')
 })
})

// router.post('/login', (req, res) => {
//   var { email, password } = req.body;
//   User.findOne({email}, (err, user) => {
//     if(err) return res.redirect('/users/login');
//     if(!user) return res.redirect('/users/login');
//     if(!user.verifyPassword(password)) return res.redirect('/users/login');
//     req.session.userId = user.id;
//     res.redirect('/');
//   })
// })

module.exports = router;
