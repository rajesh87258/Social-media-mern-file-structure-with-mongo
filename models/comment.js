const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },

    //COMMENT BELONG TO A USER

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    post: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }
    /*
    ,
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'like'

        }
    ]
    */
},{
    timestamps: true
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;