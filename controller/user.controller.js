const e = require('express');
const User = require('../model/user');

exports.create = (req, res)=> {
    if(!res.body){
        res.status(400).send({
            message: "content can not be empty!"
        });
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    User.create(user, (err, data)=> {
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while creating customer"
            });
        }else   res.send(data);
    });
};

exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if(err) res.status(500).send({
            message: err.message || " some error occurred while retrieving user"
        });
        else    res.send(data);
    });
};

exports.findOne = (req, res)=> {
    User.findById(req.params.id, (err, data)=> {
        if(err) {
            if(err.kind === 'not_found'){
                res.status(404).send({
                    message: `Not found User with id ${req.params.id}.`
                });
            }else{
                res.status(500).send({
                    message: "Error  retrieving  User  with id" +req.params.id
                });
            }
        }else res.send(data);
    });
};

exports.update = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log(req.body);

    User.updateById( req.params.id, new User(req.body), (err, data)=> {
        if(err){
            if(err.kind==="not_found"){
                res.status(404).send({
                    message: `Not found User with id ${req.params.id}`
                });
            }else{
                res.status(500).send({
                    message: "Error Updating User with id "+ req.params.id
                })
            }
        }else   res.send(data);
    });
};

exports.delete =( req, res )=> {
    User.remove(req.params.id, (err, data)=> {
        if(err){
            if(err.kind === "not_found")    res.status(404).send({
                message: 'Not found user with id '+res.params.id,
            });
            else    res.status(500).send({
                message: 'Could not delete User with id '+ res.params.id,
            });
        }else   res.send({message: 'User deleted successfully!'});
    });
};

exports.deleteAll= (req, res) => {
    User.removeAll((err, data) => {
        if(err) res.status(500).send({
            message: err.message || "Some error occurred while removing all customers."
        });
        else    res.send({ message: "All users deleted successfully!"});
    });
};