const express = require("express");
const PriceModel = require("../../models/Price");

const router = express.Router({ mergeParams: true });

router.post("/cost_read", function (req, res) {
    if(!req.body.date) return res.status(400).send("Wrong body");
    PriceModel.findAll({where: {domain: companies.indexOf(req.params.domain) + 1, date: req.body.date}, order: [["time", "ASC"]]}).then((models) => {
        res.send(models.map(v => [v.perk, ("0" + v.time.getHours()).substr(-2) + ":" + ("0" + v.time.getMinutes()).substr(-2)+ ":" + ("0" + v.time.getSeconds()).substr(-2), v.cost, v.time]));
    })
});

module.exports = router;