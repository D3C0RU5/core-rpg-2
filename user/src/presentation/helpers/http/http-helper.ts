import { BaseError } from '../../../utils/errors/base-error'
import { ServerError } from '../../../utils/errors/server-error'
import { HttpResponse } from '../../protocols/http'
import { StatusCodeEnum } from '../../../utils/enum/status-code'
import { ServiceError } from '../../../application/services/errors/ServiceError'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ok = (data?: any): HttpResponse => ({
  statusCode: StatusCodeEnum.OK,
  body: data,
})

export const handleError = (error: unknown): HttpResponse => {
  if (error instanceof ServiceError) {
    return {
      statusCode: error.code,
      body: error.toJson(),
    }
  } if (error instanceof BaseError) {
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
