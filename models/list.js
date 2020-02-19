var mongoose = require('mongoose')
var Schema = mongoose.Schema
var listSchema = new Schema({
    title:{
        type:String,
        required:true,
        
    },
    boardId:{
        type:Schema.Types.ObjectId,
        ref:"Board"
    },
    cardId:[{
        type:Schema.Types.ObjectId,
        ref:"Card"
    }],
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"User" 
    },
    team:[{
        type:Schema.Types.ObjectId,
        ref:"Team"
    }]
},{ timestamps:true })

module.exports = mongoose.model('List',listSchema)