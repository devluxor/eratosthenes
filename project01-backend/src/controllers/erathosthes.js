import { Router } from "express"

const router = Router()

router.get('/', (req, res) => {
  res.send('Aloha!! I\'m Erathosthenes!')
})

export default router
