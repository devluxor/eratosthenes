import { Router } from 'express'

import { median } from './helpers'
import { primesGenerator } from './primesAndMedianGenerator'
import { error } from '../utils/logger'

const router = Router()

router.get('/:n', async (req, res) => {
  // TODO add validation

  const n = Number(req.params.n)
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
