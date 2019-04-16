import React,{Component} from 'react'
// import {fetchProducts} from '../../services/product'
import {post} from 'axios'
/* class Deatil extends Component{
  constructor(props){
    super(props)
    this.state={
      movies:[]
    }
  }
  componentDidMount(props) {
      return post('/api/v2/proxy',{
        url:'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=125805'
        // url:`https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=${this.props.match.params.id}`
      })

    // fetchProducts()
      .then(res=>{
        console.log(res.config)
        this.setState({
          movies: res
        })
      })
  }
  render(){
    return(
      <div>
        {this.state.movies.map(item => {
           return (
             <h3 key={item.id}>详情页-{item.movieId}</h3>
           )
         })}
          <h3>详情页-</h3>
         <h3>详情页-{props.match.params.id}</h3>
      </div>
    )
  }
} */
function Deatil(props) {
  console.log(props)
  return (
    <div>
      <h3>详情页-{props.match.params.id}</h3>
    </div>
  )
}

export default Deatil
