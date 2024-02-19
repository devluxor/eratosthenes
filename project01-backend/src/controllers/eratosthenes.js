import { Router } from "express"

const router = Router()

router.post('/', (req, res) => {
  res.send('Aloha!! I\'m Eratosthenes!')
})

export default router
