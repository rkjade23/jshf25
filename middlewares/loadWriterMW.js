//író betöltése, ha nem létezik redirect /-re, next

module.exports =  (objRepo)=>{
    return (req, res, next)=>{
        return next();
    }
}