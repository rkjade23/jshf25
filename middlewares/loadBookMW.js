//könyv betöltése, ha nem létezik redirect /writer/:id/books-ra, next

module.exports =  (objRepo)=>{
    return (req, res, next)=>{
        return next();
    }
}