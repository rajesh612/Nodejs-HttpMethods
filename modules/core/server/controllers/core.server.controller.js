/**
 * Created by rajesh on 7/14/16.
 */
'use strict';

var mockService = require('../utils/core.server.mock');

//To fetch all contacts
module.exports.getContacts = function(req,res){
    res.status(200);
    res.json(mockService.getContacts);
}

//To post contact
module.exports.createContact = function(req,res){
    var contact = req.body;
    console.log(contact);

    if (!contact){
        res.status(400);
        res.end("Error: It's an Error Man");
    }
    contact = mockService.saveContact(contact);
    if (contact){
        res.status(200);
        res.json(contact);
    }
}

//To update contact
module.exports.updateContact = function(req,res){
    var nContact = req.body;
    var id = req.body.id;
    console.log(nContact);

    if (!nContact){
        res.status(400);
        res.end("Error: Enter valid contact details");
    }
    nContact = mockService.updateContact(id,nContact);
    if (nContact){
        res.status(200);
        res.json(nContact);
    }
}

//To delete contact by id
module.exports.deleteContact = function(req,res){
var id = req.params.id;
    console.log("Id to be deleted: ");
    console.log(id);
var message =  mockService.deleteContact(id);
    if(message){
     res.end("Requested contact is deleted");
    }else{
        res.end("Requested contact is invalid");
    }
}

//To fetch contact by id
module.exports.getContactById = function(req,res){
    var id = req.params.id;
    console.log("Id to be fetched: ");
    console.log(id);

    res.status(200);
    res.json(mockService.getContactById(id));
}
