module.exports = function(req, res, next){
    if(req.method == "GET") return next();
    if(typeof req.body != "object"){
        res.status(400);
        res.send("Wrong body");
        return;
    }
    next();
}