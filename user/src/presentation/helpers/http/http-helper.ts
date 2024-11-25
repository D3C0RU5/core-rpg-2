import { BaseError } from '../../../utils/errors/base-error'
import { ServerError } from '../../../utils/errors/server-error'
import { HttpResponse } from '../../protocols/http'
import { StatusCodeEnum } from '../enum/status-code'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ok = (data?: any): HttpResponse => ({
  statusCode: StatusCodeEnum.OK,
  body: data,
})

export const handleError = (error: unknown): HttpResponse => {

  const problemDetails = {
    url: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1',
    title: 'An error occurred while processing your requers.',
    status: StatusCodeEnum.INTERNAL_SERVER_ERROR
  }

  if (error instanceof BaseError) {
    return {
      statusCode: StatusCodeEnum.BAD_REQUEST,
      body: error.toJson(),
    }
  } else {
    return {
      statusCode: StatusCodeEnum.INTERNAL_SERVER_ERROR,
      body: new ServerError(error instanceof Error ? error.stack : undefined),
    }
  }
}
