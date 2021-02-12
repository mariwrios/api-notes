import {Schema, model } from "mongoose"
http://localhost:4000/api/notes
const noteSchema = new Schema ({
    title: String,
    content: {
        type: String,
        required: true
    },
    author: String,
    date:{
        type: Date,
        default: Date.now
    }   
}, { timestamps:true

})

export default model('note', noteSchema)

