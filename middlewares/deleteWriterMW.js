//törli az írót, átirányít a /-re

module.exports =  (objRepo)=>{
    return (req, res, next)=>{
        return next();
    }
}