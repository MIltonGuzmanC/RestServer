const { request } = require("express");

const userGet = (req=request, res = response)=> {
    const {nombre = "No Name", edad, limit=1} = req.query;
    res.json({
        mensaje : 'API - GET',
        status : 'GET',
        nombre,
        edad,
        limit
    });
}

const userPost = (req=request, res = response)=> {
    const body = req.body;
    res.json({
        mensaje : 'API - POST',
        status : 'POST'
    });
}

const userPut = (req = request, res = response)=> {
    const id = req.params.id;
    res.json({
        mensaje : 'API - PUT',
        status : 'PUT',
        id
    });
}

const userPatch = (req, res = response)=> {
    res.json({
        mensaje : 'API - PATCH',
        status : 'DELETE'
    });
}

const userDelete = (req, res = response)=> {
    res.json({
        mensaje : 'API - DELETE',
        status : 'DELETE'
    });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete
}