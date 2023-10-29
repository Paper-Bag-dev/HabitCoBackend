import mongoose from "mongoose";

const schema = new mongoose.Schema({
    description : {
        type: String,
        required : true
    },
    isCompleted : {
        type: Boolean,
        default : false
    },
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Users",
        required : true
    },
    createdAt : {
        type: Date,
        default : Date.now
    }
})

export const Tasks = mongoose.model("Tasks", schema);