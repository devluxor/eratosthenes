

export const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

export const inputValidator = (request, response, next) => {

  if (!request?.params?.n?.match(/^\d+$/)) {
    response.status(404).send({
      error: `Invalid Number Parameter in path: ${request.originalUrl}`
    })

    return
  } 

  next()
}