import mongoose from "mongoose";
 
const subTodoSchema = new mongoose.Schema(
    {
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    }, 
    {
        timeseries: true
    }
)

export const SubTodo = mongoose.model("SubTodo", subTodoSchema)