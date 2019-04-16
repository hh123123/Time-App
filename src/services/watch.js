import {post} from '../pages/utils/request'

export function fetchProducts(props){
    return post('/api/v2/proxy',{
      url: `https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=290`
    })
}
