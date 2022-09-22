import mongoose from "mongoose";
const BookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    author: {
        type:String,
        required:true
    },
    publisherYear:{
        type:Number,
        required:true
    }
});

const Book= mongoose.model("Book", BookSchema)
export default Book