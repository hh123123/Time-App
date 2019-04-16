import React from 'react'
import styles from './shop.css'
import { Carousel, WingBlank } from 'antd-mobile';
import {products} from '../../services/shop'
import {shopping} from '../../services/shopping'
import {vedio} from '../../services/vedio'
import Link from 'umi/link'

class Vedio extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Vedio:[]
    }
  }
  componentDidMount(){
    vedio()
    .then(res=>{
      console.log(res)
      this.setState({
        Vedio:[res.data.videoList[0],res.data.videoList[15],]

      })
      console.log(this.state.Vedio)
    })
  }

  render(){
    return(
      <div className={styles.vedio} >
        {this.state.Vedio.map(item=>{
          return(
            <div key={item.id} >
              <div >
              <video  className={styles.bf} controls src={item.url}></video>
              <p className={styles.pp}>{item.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}



class Shop extends React.Component{
  constructor(props){
    super(props);
    this.state={
      shop:[]
    }
  }
  componentDidMount(){
    shopping()
    .then(res=>{
      console.log(res)
      this.setState({
      shop:[res.data.moviecomings[0],res.data.moviecomings[1],res.data.moviecomings[2],res.data.moviecomings[3],res.data.moviecomings[4],res.data.moviecomings[5],res.data.moviecomings[6],res.data.moviecomings[7],res.data.moviecomings[8],res.data.moviecomings[9],]
    })
    })

  }
  render(){
    return(
      <div>

        <ul className={styles.end} >
          {this.state.shop.map(item=>{
            return(
              <li className={styles.endli} key={item.id}>
                <img alt="" className={styles.endimg} src={item.image}/>
                <p className={styles.endp}>{item.title}</p>
                <p className={styles.endp2}>￥{item.rDay}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )

  }
}
class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        data: ['https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F02%2F25%2F112629.57302984.jpg&width=750&height=500&clipType=4', 'https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F03%2F04%2F134351.16725003.jpg&width=750&height=500&clipType=4', 'https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F03%2F07%2F112029.98267722.jpg&width=750&height=500&clipType=4'],
        imgHeight:176,
        show:false,
        movies:[],
        movies2:[]
      }
    }
   componentDidMount() {
     window.addEventListener('scroll',()=>{
       let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
       if(scrollTop > 500){
        this.setState({
          show : true
        })
      }else{
        this.setState({
          show : false
        })
      }
     })
      products()
      .then(res=>{
        console.log(res)
    this.setState({
        movies:[res.data.ms[0],res.data.ms[1],res.data.ms[2]],
        movies2:[res.data.ms[9],res.data.ms[14],res.data.ms[25]]
     })
     console.log(res.data.ms[0])
      })
      // simulate img loading
      setTimeout(() => {
        this.setState({
          data: ['%2F2018%2F11%2F23%2F102115.67519563', '%2F2019%2F03%2F04%2F134351.16725003', '%2F2019%2F03%2F07%2F112029.98267722'],
        });
      }, 100);
    }
    render() {
     let {show} = this.state;
     return (
        <div>
        <div className={styles.head}>
           <ul className={styles.navt}>
                <li><img alt="" className={styles.logo} src="https://static1.mtime.cn/html5/20190327113529/images/2014/fot_logo.png"/></li>
                <Link to="/shouye"><li className={styles.nav}>首页</li></Link>
                <Link to="/buy"><li className={styles.nav}>购票</li></Link>
                <li className={styles.nav}>商城</li>
                <Link to="/discover"><li className={styles.nav}>发现</li></Link>
                <li><img alt="" className={styles.icon} src="http://static1.mtime.cn/html5/20190327113529/images/2014/ico_my.png"/></li>
            </ul>
        </div>
        <div className={styles.sousuo}>
            <input className={styles.put} type="text" placeholder="搜索周边正版电影"/>
            <img alt="" className={styles.cart}  src="https://static1.mtime.cn/html5/20190327113529/images/2014/i_h_shopping01.png"/>
        </div>
        <div className={styles.lunbo}>
        <WingBlank>
          <Carousel
            autoplay={true}
            infinite
           // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
           // afterChange={index => console.log('slide to', index)}
          >
          {this.state.data.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img className={styles.l1}
                  src={`
                  https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg${val}.jpg&width=750&height=500&clipType=4
                      `
                    }
                  alt=""
                   style={{ width: '110%', verticalAlign: 'top' }}
                   onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' ,});
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
        </div>


        <div className={styles.main}>
            <ul className={styles.ullist}>
                <a href="#"><li className={styles.bg} ><img alt="" className={styles.bg1} src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161133.99290860.jpg"/>
                <p>模玩</p>
                </li></a>
                <a href="#"> <li className={styles.bg}><img alt="" className={styles.bg1} src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161141.82690725.jpg"/><p>数码</p></li></a>
                <a href="#"><li className={styles.bg}><img alt="" className={styles.bg1} src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161148.25620959.jpg"/><p>服饰</p></li></a>
                <a href="#"><li className={styles.bg}><img alt="" className={styles.bg1} src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161155.82939104.jpg"/><p>家居</p></li></a>
            </ul>
            <ul className={styles.ullist2}>
            <a href="#"><li className={styles.bg}><img alt="" className={styles.bg1} src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161224.10155577.jpg"/><p>星战</p></li></a>
            <a href="#"><li className={styles.bg}><img alt="" className={styles.bg1} src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161315.97010262.jpg"/><p>漫威</p></li></a>
            <a href="#"> <li className={styles.bg}><img alt="" className={styles.bg1} src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161325.50615572.jpg"/><p>蝙超</p></li></a>
            <a href="#"><li className={styles.bg}><img alt="" className={styles.bg1} src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161342.70896250.jpg"/><p>全部</p></li></a>
            </ul>
        </div>
        <div className={styles.product}>
            <div className={styles.p1}>
                <div className={styles.left} >
                    <img alt="" className={styles.bg2} src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F01%2F24%2F144503.80926021.jpg&width=375&height=450&clipType=4"/>
                </div>

                <div className={styles.right} >
                    <div className={styles.t}><img alt=""  className={styles.bg3} src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F27%2F152051.79123953.jpg&width=374&height=225&clipType=4"/></div>
                    <div className={styles.b}><img alt="" className={styles.bg3} src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F12%2F04%2F105552.77658084.jpg&width=374&height=224&clipType=4"/></div>
                </div>
             </div>

            <div className={styles.p2}><img alt="" className={styles.bg3} src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F03%2F14%2F141826.62634001.jpg&width=750&height=223&clipType=4"/></div>
        </div>

        <div className={styles.sale}>
            <img alt="" className={styles.bg4} src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F155300.52298962.jpg&width=640&height=253&clipType=4"/>
            <ul className={styles.ullist3}>
            <img alt="" className={styles.bg5} src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F151623.33284816.jpg"/>
            <img alt="" className={styles.bg6} src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F144048.93858389.jpg"/>
            <img alt="" className={styles.bg7} src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F145740.56878791.jpg"/>
            <img alt="" className={styles.bg8} src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F152500.29800055.jpg"/>
          </ul>
            <p className={styles.wars}>Star Wars</p>
            <p className={styles.star}>星球大战</p>
         </div>
        <div className={styles.total}>
        <div className={styles.show}>
                  {this.state.movies.map(item=>{
                    return(
                      <div className={styles.sbox} key={item.id}>
                        <img alt="" className={styles.showsale} src={item.img} />
                         <p className={styles.des}>{item.commonSpecial}</p>
                         <h3 className={styles.price}>￥{item.cC}</h3>
                      </div>
                    )
                  })}
            </div>

            <div className={styles.show2}>
                  {this.state.movies2.map(item=>{
                    return(
                      <div className={styles.sbox} key={item.id}>
                        <img alt="" className={styles.showsale} src={item.img} />
                         <p className={styles.des}>{item.commonSpecial}</p>
                         <h3 className={styles.price}>￥{item.cC}</h3>
                      </div>
                    )
                  })}
            </div>
            <Link to="/shopDetails" ><button className={styles.btn}>更多商品 ></button></Link>
            </div>
            <p className={styles.yu}>预告片推荐/</p>
            <Vedio />
            <div className={styles.intrest}>
                  你可能感兴趣的
            </div>
            <Shop />
            <div className={styles.intrest}>
                  奋力加载中...
            </div>
            <div className={styles.foot}>
                  <ul className={styles.footul}>
                    <li className={styles.footli}>首页</li>
                    <li className={styles.footli}>购票</li>
                    <li className={styles.footli}>商城</li>
                    <li className={styles.footli}>发现</li>
                    <li className={styles.footli}>我的</li>
                  </ul>
            </div>
            <div className={styles.ending}>
                  <img alt="" className={styles.e1} src="https://static1.mtime.cn/html5/20190410101115/images/2014/fot_logo.png"/>
                  <img alt="" className={styles.e2} src="https://static1.mtime.cn/html5/20190410101115/images/h_mark.jpg"/>
                  <br />
                  <div className={styles.copy}>
                  <span className={styles.copy2}>Copyright </span>
                  <span className={styles.copytime}>2006-2019</span>
                  <span className={styles.copydes}> Mtime.com Inc. All rights reserved.</span>
                  </div>
            </div>
                  <div>
                  {
                    show &&
                    <img alt="" onClick={this.handleScrollTop} className={styles.fix} src="https://static1.mtime.cn/html5/20190410101115/images/2014/backtop1.png"/>
                  }
                  </div>
        </div>

      );


    }
    handleScrollTop(){
      window.scrollTo({
        left:0,
        top:0,
        behavior:'smooth'
      })
    }
  }





export default App;
