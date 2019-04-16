import {post} from '../pages/utils/request'

export function fetchProducts(params){
    return post('/api/v2/proxy',{
      url: 'https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=290'
    })
}
