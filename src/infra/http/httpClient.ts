import type { AxiosError, AxiosInstance } from 'axios'

import type { HTTPRequest, IHTTPClient } from './contract'
import { axiosInstance } from './axios'

export class HTTPClient implements IHTTPClient {
  private constructor(
    private api: AxiosInstance = axiosInstance,
    private baseUrl: string = import.meta.env.VITE_API_URL
  ) {}

  static create() {
    return new HTTPClient()
  }

  async sendRequest<TResponse, TBody = unknown>(props: HTTPRequest<TBody>) {
    const { endpoint, method, body, headers, params } = props
    try {
      const response = await this.api.request<TResponse>({
        url: `${this.baseUrl}${endpoint}`,
        method,
        headers,
        data: body,
        params
      })

      return response.data
    } catch (error) {
      const axiosError = error as AxiosError
      const status = axiosError.response?.status || 500
      const message = axiosError.response?.data || axiosError.message
      throw new Error(`Request failed with status ${status}: ${message}`)
    }
  }
}
