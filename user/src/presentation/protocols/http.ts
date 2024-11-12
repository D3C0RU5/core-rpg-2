/* eslint-disable @typescript-eslint/no-explicit-any */

import { UserPayload } from "../../application/interfaces/authentication/type/userPayload"


export type HttpRequest = {
  headers?: any & {
    user?: UserPayload
  }
  body?: any
}

export type HttpResponse = {
  statusCode: number
  body: any
}
