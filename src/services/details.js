import {post} from '../utils/request'
export function details(){
    return post('/api/v2/proxy',{
        url:'https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=290'
        
    })
}