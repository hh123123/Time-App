import {post} from '../pages/utils/request'

export function reg(params) {
  return post('/api/v1/auth/reg', params)
}

export function login(params) {
  return post('/api/v1/auth/login', params)
}

