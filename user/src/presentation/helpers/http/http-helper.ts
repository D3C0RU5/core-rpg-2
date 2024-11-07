import { BaseError } from '../../../utils/errors/base-error'
import { ServerError } from '../../../utils/errors/server-error'
import { HttpResponse } from '../../protocols/http'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ok = (data?: any): HttpResponse => ({
  statusCode: 200,
  body: data,
})

export const handleError = (error: unknown): HttpResponse => {
  if (error instanceof BaseError) {
    return {
      statusCode: 400,
      body: error.toJson(),
    }
  } else {
    return {
      statusCode: 500,
      body: new ServerError(error instanceof Error ? error.stack : undefined),
    }
  }
}
