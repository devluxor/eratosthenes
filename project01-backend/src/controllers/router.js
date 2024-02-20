import { Router } from 'express'

import { median } from './helpers'
import { primesGenerator } from './primesGenerator'
import { error } from '../utils/logger'
import { inputValidator } from '../utils/middleware'

const router = Router()

const MAX_NUMBER = 9999999

router.get('/:n', inputValidator, async (req, res) => {
  const n = Number(req.params.n)

  if (n >= MAX_NUMBER) {
    res.status(400).send(`Number ${n} is too big!`)
    return
  }

  try {
    const primes = await primesGenerator(n)
    const result = median(primes)
    res.json({primes, median: result})
  } catch (e) {
    error('Error: ', e)
    res.status(400).send(e)
  }
})

export default router
