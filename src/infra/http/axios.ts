import type { AxiosInstance } from 'axios'
import axios from 'axios'
import applyCaseMiddleware from 'axios-case-converter'
import qs from 'qs'

export const axiosInstance: AxiosInstance = applyCaseMiddleware(
  axios.create({
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    }
  }),
  { ignoreParams: true }
)
