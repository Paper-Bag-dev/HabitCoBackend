import mongoose from "mongoose";

const schema = new mongoose.Schema({
    totalTasks :[{
            date: String,
            count: Number
        }],
    createdAt : {
        type: Date,
        default : Date.now
    },
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Users",
        required : true
    }
})

export const Calendar = mongoose.model("Calendar", schema);