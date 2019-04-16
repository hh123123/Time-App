   import React,{Component} from 'react'
import styles from './intruction.css'
import {post} from '../utils/request'
import {fetchProducts} from '../../services/detail'
class index extends Component{
  constructor(props){
    super(props)
    console.log(props.match.params.id)
    this.state={
      movie:{
        img:'',
        video:'',
        story:'',
        intruction:''
      }
    }
  }
  componentDidMount(props){
    console.log(this.props.match.params.id)

      return post('/api/v2/proxy',{
      url: `https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=${this.props.match.params.id}`
    })
    .then(res=>{
      console.log(res.data.data)

           /* this.state.movies.push(res.data.data.basic.img)
           this.state.movies.push(res.data.data.basic.video.url)
 */

       this.setState({
         movie:{img:res.data.data.basic.img,video:res.data.data.basic.video.url,story:res.data.data.basic.story,
          intruction:res.data.data.basic.commentSpecial}
      })
    console.log(this.state.movie)
    })
  }


  render(){
    function backto(){
       //history.back();
       console.log("aa")
       window.history.go(-1);
  }

    return(
     <div className={styles.box}>
    <nav>
      <ul className={styles.nav}>
        <li onClick={()=>{backto()}}><img src="https://static1.mtime.cn/html5/20190327113529/images/2014/h_btn_back.png"/></li>
        <a class="bshareDiv" href="http://www.bshare.cn/share" ><li>
        <img src="https://static1.mtime.cn/html5/20190327113529/images/2014/i_h_share.png"/>
          </li>
          </a>

      </ul>
    </nav>
    <section>

      <div>
      <div className={styles.pic}>
      <h2>{this.state.movie.intruction}</h2>
      <div className={styles.date}>
      <p>2019-4-10</p>
      <p className={styles.teshu}><a href="#">评论</a><a href="#">相关电影/影人</a></p>
      </div>
      </div>
      <div className={styles.box2}>

      <video className={styles.tupian}  controls src={this.state.movie.video}></video>
      <div className={styles.hezi}><img className={styles.tupian2} src={this.state.movie.img}/></div>
      </div>
      <p   className={styles.wenzi}>　{this.state.movie.story}　</p>
      <p className={styles.wenzi}>　　《天气之子》的故事设定在一个气象变化混乱的时代，被命运操控的少男少女决定选择属于自己的生活方式。</p>
      <p className={styles.wenzi}>　　　　电影围绕着一个名叫Hodaka的高中生展开，他离开了岛上的家，搬到东京，找到了一份为一家神秘杂志写作的工作。但自从他参加新工作以来，天气一直很糟，每天都下雨，直到他遇到一个名叫希娜的年轻女子。</p>
      <p className={styles.wenzi}>　　　　Hodaka发现尽管希娜和她的哥哥一起生活在外面的环境中，但两人都很幸福。希娜似乎可以控制天气，当她祈祷时雨就停了，随着她合拢的双手，雨水就会被吸回天空。</p>
      <p className={styles.wenzi}>　　　　华丽的预告片中，仿佛每一滴雨都有自己的光芒。预告片的音乐由Radwimps制作，他们也为《你的名字。》创作了标志性的主题曲。。</p>
      <p className={styles.wenzi}>　　　　新海诚以充满细腻情感的作品而闻名，这些作品以优美的视觉效果描绘年轻浪漫的故事，虽然《天气之子》很大程度上仍是神秘异常，但相信会被粉丝继续喜爱。。</p>
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


export default index
