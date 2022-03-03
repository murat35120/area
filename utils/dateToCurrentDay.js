module.exports = function(date_){
    const date = typeof date_ == "number" ? new Date(date_) : date_ || new Date();
    const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
    return newDate;
}