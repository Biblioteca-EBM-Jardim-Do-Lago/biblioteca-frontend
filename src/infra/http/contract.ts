export enum HTTPMethods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete'
}

export type HTTPRequest<TBody> = {
  endpoint: string
  method: HTTPMethods
  body?: TBody
  headers?: Record<string, string>
  params?: unknown
}

export interface IHTTPClient {
  sendRequest: <TResponse, TBody = unknown>(request: HTTPRequest<TBody>) => Promise<TResponse>
}
