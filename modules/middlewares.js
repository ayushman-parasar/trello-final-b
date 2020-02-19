const User = require('../models/User')


exports.isAuthenticated = (req,res,next) => {
    if(req.session && req.session.userId){
      User.findById(req.session.userId,(err,user) => {
        if(err) return next(err);
        req.user = user
        res.locals.profileUser = user;
        // console.log(user)
        next()
      })
    }
    else{
      // req.flash('info', 'You need to login first');
      res.send("you need to login first")
    }
  }