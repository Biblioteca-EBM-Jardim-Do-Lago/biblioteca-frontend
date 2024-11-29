import type { AxiosInstance } from 'axios'
import axios from 'axios'
import applyCaseMiddleware from 'axios-case-converter'
import qs from 'qs'

export type HttpProviderInstance = AxiosInstance

export const httpProvider: HttpProviderInstance = applyCaseMiddleware(
  axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    }
  }),
  { ignoreParams: true }
)
