const express = require("express");
const UserRequestModel = require("../../models/UserRequest");
const UserModel = require("../../models/User");
const dateToCurrentDay = require("../../utils/dateToCurrentDay");
const getCurrentTime = require("../../utils/getCurrentTime");
const parseTimeToMS = require("../../utils/parseTimeToMS");
const getCurrentTimeMS = require("../../utils/getCurrentTimeMS");
const calcBill = require("../../utils/calcBill");
const PriceModel = require("../../models/Price");
const LogModel = require("../../models/Log");
const DomainModel = require("../../models/Domain");

const router = express.Router({ mergeParams: true });

router.post("/ok", function (req, res) {
    UserRequestModel.findOne({where: {domain: companies.indexOf(req.params.domain) + 1, id: req.body.id}}).then(async (model) => {
        if(!model) throw 400;
        model.setDataValue("status", 3);
        await model.save();
        const user = await UserModel.findOne({where: {id: model.key}});
        if(!user) throw 500;
        var bill;
        if(model.type == "out"){
            const domain = await DomainModel.findOne({where: {domain: req.params.domain}});
            const logModel = (await LogModel.findOrCreate({where: {domain: companies.indexOf(req.params.domain) + 1, user: model.id, in: dateToCurrentDay()}}))[0];
            const priceModels = await PriceModel.findAll({ where: {domain: domain.id, date: dateToCurrentDay(), perk: model?.perk || null} });
            var startIndex = 0;
            logModel.bill.forEach((value, index) => value.type == "start" && (startIndex = index));
            const calculatedBill = calcBill(priceModels, domain, parseTimeToMS(logModel.bill[startIndex].data[0]), getCurrentTimeMS());
            const endBill = logModel.bill.concat(calculatedBill/* .slice((logModel.bill.length - 1) - startIndex) */).slice(startIndex);
            const totalCost = endBill.reduce((pValue, cValue) => pValue + Number(cValue.data[cValue.data.length - 1]), 0);
            logModel.bill = logModel.bill.concat(calculatedBill, [
                {type:'stop', data:[getCurrentTime(), getCurrentTime(), 0, 0]},
                {type:'total', data:[totalCost, domain.currency]}
            ]);
            bill = logModel.bill.slice(startIndex);
            await logModel.save();
        }
        res.send({id: user.id, perk: user.perk, type: model.type, ...(bill ? {bill: bill} : {})});
    }).catch((err) => {
        if(!Number.isInteger(err)) console.log(err);
        res.status( Number.isInteger(err) ? err : 500).send(err == 400 ? "Wrong id" : "Error on server");
    })
});

module.exports = router;