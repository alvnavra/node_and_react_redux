module.exports = (req, res, next)=>{
    if(!req){
        return res.status(401).send({error:'You must log in'})
      }

      next()
}