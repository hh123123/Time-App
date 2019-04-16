import {post} from '../pages/utils/request'

export function fetchProducts(){
    return post('/api/v2/proxy',{
      url: `https://api-m.mtime.cn/Showtime/HotMovieComments.api?pageIndex=1&movieId=217896`
    })
}
