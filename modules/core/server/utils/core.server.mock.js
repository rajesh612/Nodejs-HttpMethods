/**
 * Created by rajesh on 7/14/16.
 */
'use strict';

var Chance = require('chance'),
 _ = require('lodash'); 

var contacts = genMockContacts();

//To save contact
module.exports.saveContact = function (contact) {
    var chance = new Chance();
    var ccontact = _.clone(contact);
    ccontact.id = chance.guid();
    contacts.push(ccontact);
    return ccontact;
}

//To update contact
module.exports.updateContact = function (id,nContact) {
    for(var j in contacts){
        if(contacts[j].id == id ){
            contacts[j].firstName = nContact.firstName;
            contacts[j].lastName = nContact.lastName;
            contacts[j].zip = nContact.zip;
            contacts[j].email = nContact.email;

            return contacts[j];
        }
    }
}

//To fetch all contacts
module.exports.getContacts = contacts;

//To delete contact by id
module.exports.deleteContact = function (id) {
    var bool = false;
    for (var j in contacts) {
        if (contacts[j].id == id) {
          contacts.splice(j,1);
            bool = true;
            return bool;
        }
    }
}

//To get mock contacts
  function genMockContacts() {
    var chance = new Chance();
    var contacts = [];

    for(var i =0;i<10;i++){
        var contact = {};
        var name = chance.name().split(' ');
        contact.firstName = name[0];
        contact.lastName = name[1];
        contact.zip = chance.zip();
        contact.email = chance.email();
        contact.id = chance.guid();
        contacts.push(contact);
    }
//    console.log(contacts);
    return contacts;
}

//To fetch contact by id
module.exports.getContactById = function (id) {

    for (var j in contacts) {
        if (contacts[j].id == id) {
            return contacts[j];
        }
    }
}
