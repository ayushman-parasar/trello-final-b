var mongoose = require('mongoose')
var Schema = mongoose.Schema
var boardSchema = new Schema({
    title:{
        type:String,
        required:true,
        
    },
    description:{
        type:String,
        required:true
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    teamAssigned:[{
        type:Schema.Types.ObjectId,
        ref:"User"
    }],
    lists:[{
        type:Schema.Types.ObjectId,
        ref:"List"
    }],
    cards:[{
        type:Schema.Types.ObjectId,
        ref:"Card"
    }],
    public:{
        type:Boolean,
        default:false
    },
    isWatched:{
        type:Boolean,
        default:false
    }
    
},{timestamps:true})

module.exports = mongoose.model('Board',boardSchema)