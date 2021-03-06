const express = require("express");
const UserRequestModel = require("../../models/UserRequest");
const sequelize = require("../../sequelize");

const router = express.Router({ mergeParams: true });

router.post("/indoor", function (req, res) {
	UserRequestModel.findAll({	  
		attributes: [
			[sequelize.fn('max', sequelize.col('id')), 'n_id'],
			'type',
			'key',
			'status'
		],
		group: ['key', 'type'],
		where: {
			status: 3
		 }
	}).then((models) => { 
		console.log(models);
    }).catch((err) => {
		console.log("Error on server");
    })

	
	
	
    UserRequestModel.findAll({where: {domain: companies.indexOf(req.params.domain) + 1}, order: [["id", "ASC"]]}).then((models) => { //where: {domain: companies.indexOf(req.params.domain) + 1, status: 1}
		res.send(models.map(v => [v.id, v.key, v.type, v.status, v.code]));
    }).catch((err) => {
        if(!Number.isInteger(err)) console.log(err);
        res.status( Number.isInteger(err) ? err : 500).send("Error on server");
    })
});

module.exports = router;