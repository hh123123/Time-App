import {post} from '../utils/request'
export function vedio(){
    return post('/api/v2/proxy',{
        url:'https://api-m.mtime.cn/Movie/Video.api?pageIndex=1&movieId=217896'
        
    })
}