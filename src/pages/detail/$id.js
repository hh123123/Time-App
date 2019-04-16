import React,{Component} from 'react'
import styles from './detail.css'
import {post} from '../../utils/request'

class Deatil extends Component{
  constructor(props){
    super(props)
    this.state={
      movie:{
        actors:[],
        name:'',
        nameEn:'',
        releaseDate:'',
        story:'',
        mins:'',
        type:[],
        commentSpecial:'',
        director:'',
        img:''
      }
    }
  }
  componentDidMount(){

    return post ('/api/v2/proxy',{
      url: `https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=${this.props.match.params.id}`
    })
    .then(res=>{
      console.log(res)
      this.setState({
        movie:res.data.data.basic
      })
    })
  }
  clickHandle(){
    console.log("aa")
    window.history.go(-1)
  }
  render(){
    return(
      <div className={styles.box}>
        <header>
          <div className={styles.nav}>
            <img alt="" onClick={this.clickHandle} src='https://static1.mtime.cn/html5/20190327113529/images/2014/h_btn_back.png' />
            <img alt="" src='https://static1.mtime.cn/html5/20190327113529/images/2014/i_h_share.png' />
          </div>
        </header>
        <section>
          <div className={styles.photo}>
            <div className={styles.act}>
              <div className={styles.tu}>
                <img alt="" src={this.state.movie.img} />
              </div>
              <div className={styles.det}>
                <p className={styles.name}>{this.state.movie.name}</p>
                <p className={styles.nameEn}>{this.state.movie.nameEn}</p>
                <p className={styles.time}>{this.state.movie.mins}</p>
                <p className={styles.type}>{this.state.movie.type}</p>
                <p className={styles.releaseDate}>{this.state.movie.releaseDate}中国上映</p>
                <p className={styles.commentSpecial}><span>“</span>{this.state.movie.commentSpecial}</p>
                <p className={styles.pingfen}>{this.state.movie.overallRating}</p>
              </div>
            </div>
            <div className={styles.story}>
              <div>
                <span>剧情：</span>
                <span>{this.state.movie.story}</span>
              </div>
            </div>
            <div className={styles.tupian}>
              <div className={styles.yanyuan}>
                <b>演职员</b>
                <span>&gt;</span>
              </div>
              <div className={styles.zhao}>

                <dl>
                  <dt><img alt="" src={this.state.movie.director.img} /></dt>
                  <dd>
                    <p>导演</p>
                    <p>{this.state.movie.director.name}</p>
                    <p>{this.state.movie.director.nameEn}</p>
                  </dd>
                </dl>

                {this.state.movie.actors.splice(0,2).map(item=>{
                    return (
                    <dl>
                   <div>
                  <dt><img alt="" src={item.img} /></dt>
                  <dd>
                    <p>{item.name}</p>
                    <p>{item.nameEn}</p>
                    <p>饰：{item.roleName}</p>
                  </dd>
                  </div>
                </dl>
              )
            })}

              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className={styles.fot}>
            <div>
              <img alt="" src='https://s2.ax1x.com/2019/04/11/A7qwi8.png' />
              <p>想看</p>
            </div>
            <span>|</span>
            <div>
              <img alt="" src='https://s2.ax1x.com/2019/04/11/A7qDzQ.png' />
              <p>评分</p>
            </div>
            <span>|</span>
            <div className={styles.xuanzuo}>
              <p>选座购票</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
export default Deatil



