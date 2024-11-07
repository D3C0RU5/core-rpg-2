import { Router } from 'express'

export default (router: Router): void => {
  router.post('/sign-up', (req,res)=>{
    console.log(1)
    res.json(req.body)
  })
}
