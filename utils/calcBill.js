const parseTimeToMS = require("./parseTimeToMS");
const getCurrentTimeMS = require("./getCurrentTimeMS");
const parseMSToTime = require("./parseMSToTime");

const devideMap = {
    sec: 1000,
    min: 1000*60,
    hour: 1000*60*60
};

module.exports = function(pricesModels, domainModel, fromTime, toTime){
    const timesMap = {};
    const times = pricesModels
    .map(value => {
        const parsedTime = parseTimeToMS(value.time);
        timesMap[timesMap] = value;
        return parsedTime;
    })
    .sort((a,b) => a - b);
    const bill = [];
    const startIndex = times.findIndex((element, index) => fromTime >= element && fromTime < (times[index + 1] || Infinity));
    times.forEach((element, index) => {
        if(index >= startIndex && fromTime >= element){
            const startTime = element;
            const endTime = times[index + 1] ? (toTime >= times[index + 1] ? times[index + 1] : toTime) : toTime;
            const fullPrice = timesMap[element].cost*Math.round((endTime - startTime)/devideMap[domainModel.unit_time]);
            const fixLength = domainModel.rounding%1 ? domainModel.rounding.toString().substr(domainModel.rounding.toString().indexOf(".") + 1).length : 0;
            const endPrice = domainModel.rounding*Math.round(Number(fullPrice.toFixed(fixLength))/domainModel.rounding);
            bill.push({type: 'item', data:[startTime, endTime, timesMap[element].cost, endPrice]});
        }
    });
    if(!bill.length) {
        const fullPrice = domainModel.base_cost*Math.round((toTime - fromTime)/devideMap[domainModel.unit_time]);
        const fixLength = domainModel.rounding%1 ? domainModel.rounding.toString().substr(domainModel.rounding.toString().indexOf(".") + 1).length : 0;
        const endPrice = domainModel.rounding*Math.round(Number(fullPrice.toFixed(fixLength))/domainModel.rounding);
        bill.push({type: 'item', data:[fromTime, toTime, domainModel.base_cost, endPrice]});
    }
    return bill;
}