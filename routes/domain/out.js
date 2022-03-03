const express = require("express");
const generateSession = require("../../utils/generateSessionToken");
const UserModel = require("../../models/User");
const UserRequestModel = require("../../models/UserRequest");
const getRandomColor = require("../../utils/getRandomColor");
const generateCode = require("../../utils/generateCode");

const router = express.Router({ mergeParams: true });

router.post("/out", function (req, res) {
    /* const sessionCode = generateSession(); */
    UserModel.findOne({where : {session: req.body.session}}).then(function(model) {
        if(!model) throw 400;
        /* model.setDataValue("session", sessionCode); */
        model.setDataValue("time", new Date());
        model.setDataValue("sessionExpired", new Date(0));
        model.save().then((model2) => {
            const color = getRandomColor();
            const code = generateCode();
            UserRequestModel.create({type: "out", key: model.getDataValue("id"), color: color[0], colorName: color[1], code: code}).then((requestModel) => {
                res.send({session: sessionCode, color: color[0], colorName: color[1], code: code});
            })
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    }).catch((err) => {
        if(!Number.isInteger(err))console.log(err);
        res.sendStatus( Number.isInteger(err) ? err : 400);
    });
});

module.exports = router;