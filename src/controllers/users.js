const Users = require("../models/users") //siempre que se importen modelos deben empezar por mayuscuylas
const jwt = require('../utils/jwt')


module.exports = {
    getById: async (req, res, next)=>{
        //const { id } = req.params
        try {
            //let users = await Users.findById(id)
            next({ status: 200, send: { msg: "Usuario encontrado", data: {} } })
        } catch (error) {
            next({ status: 404, send: { msg: "Usuario no encontrado" } })
        }
    },
    getAll: async (req, res, next)=>{
        try {
            let users = await Users.find()
            next({ status: 200, send: { msg: "Usuarios encontrados", data: users } })
        } catch (error) {
            next({ status: 404, send: { msg: "Usuarios no encontrados" } })
        }
    },
    post: async(req, res, next)=>{
        try {
            let user = await Users.create(req.body)
            next({ status: 201, send: { msg: "Usuario creado", data: {user} } })
        } catch (error) {
            next({ status: 400, send: { msg: "Usuario no creado", err: error} })
        }
    },
    delete: async(req, res, next)=>{
        //const { id } = req.params;
    try {
        //let users = await Users.findByIdAndDelete(id)
        next({status: 200, send: { msg: "Usuario eliminado correctamente" }})
    } catch (error) {
        next({ status: 400, send: { msg: "No se pudo eliminar el usuario", err: error } })
    }
    }, 
    put: async(req, res, next)=>{
       // const { id } = req.params;
    try {
        // let updatedUsers = await Users.findByIdAndUpdate(id, {
        //     first_name: req.body.first_name,
        //     last_name: req.body.last_name,
        //     email: req.body.email,
        //     gender: req.body.gender,
        //     password: req.body.password
        // },
        // { new: true }
        // );
        next({ status: 201, send: { msg: "Usuario actualizado correctamente", data: {} } });
    } catch (error) {
        next({status: 400, send: { msg: "No se pudo actualizar el usuario", err: error }})
    }
    },
    login: async (req, res, next) => {
        try {
            let user = await Users.findOne({email: req.body.email})

            if (user.password != req.body.password) {
                next({status: 401, send: {msg: "Password incorrecto"}}) 
            }
            delete user.password
            let token = jwt.create(user)
            next({status: 200, send: {msg: "Acceso autorizado", token: token}})
        } catch (error) {
            next({status: 401, send: {msg: "Acceso no autorizado", err: error}})
        }}
}