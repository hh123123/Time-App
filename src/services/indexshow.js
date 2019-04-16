import {post} from '../utils/request'

export function fetchMessage() {
  // 当发送get请求的时候 axios需要把参数放在params属性中,
  //    params属性的值会拼接在url地址后面
  return post('/api/v2/proxy', {
      url:'https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=290'
  })
}