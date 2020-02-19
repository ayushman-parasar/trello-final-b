var mongoose = require('mongoose')
var Schema = mongoose.Schema
var cardSchema = new Schema({
    title:{
        type:String,
        required:true,
        
    },
    boardId:{
        type:Schema.Types.ObjectId,
        ref:"Board"
    },
    listId:{
        type:Schema.Types.ObjectId,
        ref:"List"
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"User" 
    },
    team:[{
        type:Schema.Types.ObjectId,
        ref:"Team"
    }]
},{
    timestamps:true
})

module.exports = mongoose.model('Card',cardSchema)