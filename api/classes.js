let express = require('express');
let app = express.Router();
let { classesModel, undergradModel, labAdministratorModel, opportunityModel, labModel, debug, replaceAll, sgMail, decryptGoogleToken, s3, mongoose, verify, handleVerifyError } = require('../common.js');
let common = require('../common.js');
const BUCKET_NAME = process.env.BUCKET_NAME;


//*eturns (`res.send()`s) all the classes in the following array: 
//[{"label": classFull (that's a field in the model), "value": id of that class}, ... and so on for every class]
app.get('/', function (req, res) {
    classModel.find({}, function (err, classes) {
        if (err) {
            res.send(err);
            //handle the error appropriately
            return; //instead of putting an else
        }
        res.send(classes);

    });

});

function generateId() {
    return (Date.now().toString() + Math.random().toString()).replace(".", "");
}



module.exports = app;
