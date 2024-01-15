const mongoose = require("mongoose")

//Esquema 
const userSchema = new mongoose.Schema({
    avatar: {
        required: true,  
        type: String
    },
    name: {
        required: true,  
        type: String
    },
    user_name: {
        required: true,  
        type: String
    },
    email: {
        type: String,
        unique : true,
        required: true,  
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Debe ingresar un correo valido"], 
    },
    password: {
        type:String,
        required: [true, "El password es requerido"], 
        match: /^(.){8,300}$/
    }, 
    // gender: {
    //     type: String,
    //     required: [true, "El gender es requerido: Male / Female"], 
    //     // enum: ["Female", "Male"],
    //     enum:{
    //         values: ["Female", "Male"],
    //         message: '{VALUE} is not supported'
    //     }
    // },
    // role: {
    //     type: String,
    //     default: "Writer",
    //     enum: ["Admin", "Writer"]
    // }
});

const Users =  mongoose.model("Users", userSchema) // Modelo 
module.exports = Users