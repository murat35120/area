const express = require("express");
const PerkModel = require("../../models/Perk");

const router = express.Router({ mergeParams: true });

router.post("/perk_list_read", function (req, res) {
	PerkModel.findAll({where: {domain: companies.indexOf(req.params.domain) + 1}}).then(async (model) => {
		if(!model) throw 400;
        res.send(model.map(v => {
            return {id: v.id, perk: v.perk}
        }));
    }).catch((err) => {
        if(!Number.isInteger(err)) console.log(err);
        res.status( Number.isInteger(err) ? err : 500).send(err == 400 ? "Wrong perk" : "Error on server");
    })
});

module.exports = router;
