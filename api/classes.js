/**
 * Send a request to /applications/:id, where "id" is the id of the application
 * Returns the application object with that id
 */
let express = require('express');
let app = express.Router();
let { undergradModel, labAdministratorModel, opportunityModel, labModel, debug, replaceAll, sgMail, decryptGoogleToken,
    verify, handleVerifyError } = require('../common.js');
let common = require('../common.js');
const mongoose = require('mongoose');

app.get('/:id', function (req, res) {
    let appId = req.params.id;
    opportunityModel.find({}, function (err, docs) {
        for (let i = 0; i < docs.length; i++) {
            let opportunityObject = docs[i];
            for (let j = 0; j < opportunityObject.applications.length; j++) {
                if (opportunityObject.applications[j].id === appId) {
                    res.send(opportunityObject.applications[j]);
                    return;
                }
            }
        }
    });
});