const express = require("express");
const generateSession = require("../../utils/generateSessionToken");
const UserModel = require("../../models/User");
const UserRequestModel = require("../../models/UserRequest");
const getRandomColor = require("../../utils/getRandomColor");
const generateCode = require("../../utils/generateCode");
const dateToCurrentDay = require("../../utils/dateToCurrentDay");
const getCurrentTime = require("../../utils/getCurrentTime");
const parseTimeToMS = require("../../utils/parseTimeToMS");
const getCurrentTimeMS = require("../../utils/getCurrentTimeMS");
const calcBill = require("../../utils/calcBill");
const PriceModel = require("../../models/Price");
const LogModel = require("../../models/Log");
const DomainModel = require("../../models/Domain");

const router = express.Router({ mergeParams: true });

const devideMap = {
    sec: 1000,
    min: 1000*60,
    hour: 1000*60*60
};

router.post("/out", function (req, res) {
    UserModel.findOne({where : {session: req.body.session}}).then(async function(model) {
        if(!model) throw 400;
        model.setDataValue("time", new Date());
        model.setDataValue("sessionExpired", new Date(0));
        await model.save();
        const color = getRandomColor();
        const code = generateCode();
        await UserRequestModel.create({domain: companies.indexOf(req.params.domain) + 1, type: "out", key: model.getDataValue("id"), color: color[0], colorName: color[1], code: code});
        /* const domain = await DomainModel.findOne({where: {domain: req.params.domain}});
        const logModel = (await LogModel.findOrCreate({where: {domain: companies.indexOf(req.params.domain) + 1, user: model.id, in: dateToCurrentDay()}}))[0];
        const priceModels = await PriceModel.findAll({ where: {domain: domain.id, date: dateToCurrentDay(), perk: model?.perk || null} });
        var startIndex = 0;
        logModel.bill.forEach((value, index) => value.type == "start" && (startIndex = index));
        const calculatedBill = calcBill(priceModels, domain, parseTimeToMS(logModel.bill[startIndex].data[0]), getCurrentTimeMS()); */
        //const endBill = logModel.bill.concat(calculatedBill/* .slice((logModel.bill.length - 1) - startIndex) */).slice(startIndex);
        /* const totalCost = endBill.reduce((pValue, cValue) => pValue + Number(cValue.data[cValue.data.length - 1]), 0);
        logModel.bill = logModel.bill.concat([
            {type:'stop', data:[getCurrentTime(), getCurrentTime(), 0, 0]},
            {type:'total', data:[totalCost, domain.currency]}
        ]);
        await logModel.save(); */
        res.send({color: color[0], colorName: color[1], code: code});
    }).catch((err) => {
        if(!Number.isInteger(err))console.log(err);
        res.sendStatus( Number.isInteger(err) ? err : 500);
    });
});

module.exports = router;