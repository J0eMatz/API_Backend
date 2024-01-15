const Posts = require("../models/posts") //siempre que se importen modelos deben empezar por mayuscuylas
//const jwt = require('../utils/jwt')


module.exports = {
    getById: async (req, res, next)=>{
        const { id } = req.params
        try {
            let posts = await Posts.findById(id)
            next({ status: 200, send: { msg: "Publicacion encontrado", data: posts } })
        } catch (error) {
            next({ status: 404, send: { msg: "Publicacion no encontrado" } })
        }
    },
    getAll: async (req, res, next)=>{
        try {
            let posts = await Posts.find()
            next({ status: 200, send: { msg: "Publicaciones encontrados", data: posts} })
        } catch (error) {
            next({ status: 404, send: { msg: "Publicacion no encontrados" } })
        }
    },
    post: async(req, res, next)=>{
        try {
            let post = await Posts.create(req.body)
            next({ status: 201, send: { msg: "Publicacion creado", data: {post} } })
        } catch (error) {
            next({ status: 400, send: { msg: "Publicacion no creado", err: error} })
        }
    },
    delete: async(req, res, next)=>{
        const { id } = req.params;
    try {
        let posts = await Posts.findByIdAndDelete(id)
        next({status: 200, send: { msg: "Publicacion eliminado correctamente" }})
    } catch (error) {
        next({ status: 400, send: { msg: "No se pudo eliminar la publicacion", err: error } })
    }
    }, 
    put: async(req, res, next)=>{
        const { id } = req.params;
    try {
        let updatedPosts = await Posts.findByIdAndUpdate(id, {
            description: req.body.description,
            title: req.body.title,
            url: req.body.url,
            tags: req.body.tags,
        },
        { new: true }
        );
        next({ status: 201, send: { msg: "Publicacion actualizado correctamente", data: {updatedPosts} } });
    } catch (error) {
        next({status: 400, send: { msg: "No se pudo actualizar la publicacion", err: error }})
    }
    }
}