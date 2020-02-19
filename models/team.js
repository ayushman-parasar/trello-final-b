var mongoose = require('mongoose')
var Schema = mongoose.Schema
var teamSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    members:[{
        type:Schema.Types.ObjectId,
        ref:"User"
    }],
    boardsAssigned:[{
        type:Schema.Types.ObjectId,
        ref:"Board"
    }]
},{timestamps:true})

module.exports = mongoose.model('Team',teamSchema)