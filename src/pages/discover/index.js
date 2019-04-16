import React,{Component} from 'react'
import styles from './discover.css';
import Link from 'umi/link'
import {fetchProducts} from '../../services/product'
 class discover extends Component{
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    fetchProducts()
      .then(res=>{
        console.log(res.data)
        this.setState({
          movies: res.data.movies
        })

      })
  }
    render(){
      return (
        <div className={styles.box}>
        <nav>
          <ul className={styles.nav}>
            <li><img src="https://static1.mtime.cn/html5/20190327113529/images/2014/fot_logo.png"/></li>
            <Link to="/shouye"><li>首页</li></Link>
            <Link to="/buy"><li>购票</li></Link>
            <Link to="/shop"><li>商城</li></Link>
            <li>发现</li>
           <Link to="/login"><li><img className={styles.im} src="https://static1.mtime.cn/html5/20190327113529/images/2014/ico_my.png"/></li></Link>
          </ul>
          </nav>
          <section>
          <ul className={styles.nav2}>
            <li>新闻</li>
            <Link to="/watching"> <li>预告片</li></Link>
            <li>排行榜</li>
            <Link to="/whister"><li>影评</li></Link>
          </ul>
          <img className={styles.logo} src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F07%2F19%2F103505.79149520.jpg&width=640&height=360&clipType=3"/>
          {this.state.movies.map(item=>{
            return(
              <dl className={styles.list} key={item.movieId}>
           <Link to={`/intruction/${item.movieId}`} > <dt><img src={item.img}/></dt></Link>

            <dd>
              <p>{item.commonSpecial}</p>
              <p>{item.directorName}</p>
              </dd>
          </dl>
            )
          })}

          </section>
          <footer>
          <ul className={styles.nav}>
            <li>首页</li>
            <li>购票</li>
            <li>商城</li>
            <li>发现</li>
            <li>我的</li>
          </ul>

          </footer>
        </div>
      )
    }
}


export default discover
