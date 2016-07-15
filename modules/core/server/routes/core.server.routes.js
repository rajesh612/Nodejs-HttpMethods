/**
 * Created by rajesh on 7/14/16.
 */
'use strict';

module.exports = function (app) {
    var controller =  require('../controllers/core.server.controller.js');
    app
        .route('/api/contact/')
        .get(controller.getContacts)
        .post(controller.createContact)
        .put(controller.updateContact);
    app
        .route('/api/contact/:id')
        .get(controller.getContactById)
        .delete(controller.deleteContact);
}
