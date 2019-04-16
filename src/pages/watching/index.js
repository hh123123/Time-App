import React,{Component} from 'react'
import styles from './watch.css'
import Link from 'umi/link'
import {fetchProducts} from '../../services/watch'
class index extends Component{
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
          movies: res.data.attention
        })

      })
  }
  render(){
    return(
      <div className={styles.box}>
      <nav>
        <ul className={styles.nav}>
          <li><img src="https://static1.mtime.cn/html5/20190327113529/images/2014/fot_logo.png"/></li>
          <li>首页</li>
          <li>购票</li>
          <li>商城</li>
          <li>发现</li>
         <Link to="/login"><li><img className={styles.im} src="https://static1.mtime.cn/html5/20190327113529/images/2014/ico_my.png"/></li></Link>
        </ul>
        </nav>
        <section>
        <ul className={styles.nav2}>
        <Link to="/discover"> <li>新闻</li></Link>
          <li>预告片</li>
          <li>排行榜</li>
          <Link to="/whister"><li>影评</li></Link>
        </ul>
        <video className={styles.vido} controls src="http://vfx.mtime.cn/Video/2019/03/22/mp4/190322092549366109.mp4"></video>
        {this.state.movies.map(item=>{
          return(
            <dl className={styles.wa} key={item.id}>

            <dt><video  controls src={item.videos[0].url}></video></dt>
            <dd>{item.title}</dd>
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
/* function index() {
  return (

      <div className={styles.box}>
        <nav>
          <ul className={styles.nav}>
            <li><img src="https://static1.mtime.cn/html5/20190327113529/images/2014/fot_logo.png"/></li>
            <li>首页</li>
            <li>购票</li>
            <li>商城</li>
            <li>发现</li>
           <Link to="/login"><li><img className={styles.im} src="https://static1.mtime.cn/html5/20190327113529/images/2014/ico_my.png"/></li></Link>
          </ul>
          </nav>
          <section>
          <ul className={styles.nav2}>
            <li>新闻</li>
            <li>预告片</li>
            <li>排行榜</li>
            <Link to="/whister"><li>影评</li></Link>
          </ul>
          <video className={styles.vido}></video>
          <dl className={styles.wa}>
            <dt><img src="https://imgproxy.mtime.cn/get.ashx?uri=https%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F04%2F11%2F095137.63957161_120X90X4.jpg&width=250&height=150&clipType=4"/></dt>
            <dd>吕克·贝松新片《安娜》正式预告</dd>
          </dl>
          </section>
          <footer>

          </footer>
          </div>

  )
} */

export default index
