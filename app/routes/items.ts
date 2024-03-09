import express  from 'express'


const ROUTE_PREFIX = '/items'
const router = express.Router()



router.get(`${ROUTE_PREFIX}/:id`, (req,res)=>{
    let id = parseInt(req.params.id)
    
    if (id) {
    }
})