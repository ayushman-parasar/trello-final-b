var mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

var Schema = mongoose.Schema
var userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
    },
    boardsCreated:[{
        type:Schema.Types.ObjectId,
        ref:"Board"
    }],
    listsCreated:[{
        type:Schema.Types.ObjectId,
        ref:"List"
    }],
    cardsCreated:[{
        type:Schema.Types.ObjectId,
        ref:"Card"
    }]
},{timestamps:true})

userSchema.pre('save',function(next){
    if(this.password && this.isModified("password")){
        this.password = bcrypt.hashSync(this.password,10)
    }
    next();
})

userSchema.methods.verifyPassword = function(password){
    return bcrypt.compareSync(password,this.password)
}

module.exports = mongoose.model('User',userSchema)