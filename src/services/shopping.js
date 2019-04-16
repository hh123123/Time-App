import {post} from '../utils/request'

export  function shopping(){
    return post('/api/v2/proxy',{
        url:'https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=290'
    })
}