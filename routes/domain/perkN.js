const express = require("express");
const UserModel = require("../../models/User");
const PerkModel = require("../../models/Perk");

const router = express.Router({ mergeParams: true });

router.post("/perk_n", function (req, res) {
    if(!req.body.perk) return res.status(400).send("Wrong body");
	PerkModel.findOne({where: {domain: companies.indexOf(req.params.domain) + 1, perk: req.body.perk}}).then(async (model) => {
        if(!model) model = await PerkModel.create({domain: companies.indexOf(req.params.domain) + 1, perk: req.body.perk});
        res.send({ id: model.id, perk: model.perk});
    }).catch((err) => {
        if(!Number.isInteger(err)) console.log(err);
        res.status( Number.isInteger(err) ? err : 500).send(err == 400 ? "Wrong perk" : "Error on server");
    })
});

module.exports = router;