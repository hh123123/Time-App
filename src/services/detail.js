import {post} from '../pages/utils/request'

export function fetchProducts(props){
    return post('/api/v2/proxy',{
      url: `https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=${this.props.match.params.id}`
    })
}
