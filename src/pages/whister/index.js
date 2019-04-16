import React,{Component} from 'react'
import styles from './whister.css';
import Link from 'umi/link'
import {fetchProducts} from '../../services/extend'
class whister extends Component{
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    fetchProducts()
      .then(res=>{
        console.log(res.data.data.cts)
        this.setState({
          movies: res.data.data.cts
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
        <Link to="/discover"><li>新闻</li></Link>
        <Link to="/watching"><li>预告片</li></Link>
        <li>排行榜</li>
        <li>影评</li>
      </ul>

       <div>
      <div className={styles.movie}>
          <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F01%2F16%2F171717.94235270_1280X720X2.jpg&width=125&height=190&clipType=4"/>
          <h2>
            <p>飞驰人生</p>
            <p><img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F01%2F16%2F171717.94235270_1280X720X2.jpg&width=125&height=190&clipType=4"/></p>

          </h2>
      </div>
      {this.state.movies.map(item=>{
        return(
      <ul className={styles.extens} key={item.cd}>
        <li>
          <h1>{item.ce}</h1>
          <p>
            <img src={item.caimg}/>
            <div>
            <b>{item.ca}</b>
            <i>{item.cr}</i>
            </div>
          </p>
        </li>
      </ul>
       )
      })}
      </div>

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

export default whister
