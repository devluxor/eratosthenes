import { Router } from 'express'

import { median } from './helpers'
import { primesGenerator } from './primesGenerator'
import { logger } from '../utils/logger'

const router = Router()

router.get('/:n', async (req, res) => {
  // TODO add validation

  const n = Number(req.params.n)
  try {
    const primes = await primesGenerator(n)
    const result = median(primes)
    res.json(result)
  } catch (e) {
    logger.error('Error: ', e)
    res.status(400).send(e)
  }
})

export default router
