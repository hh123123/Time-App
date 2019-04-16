import React from 'react'
import style from './shopDetails.css'
import {details} from '../../services/details'
import Link from 'umi/link'
class App extends React.Component{
     constructor(props){
        super(props);
        this.state={
            details:[]
        }
    }
    componentDidMount(){
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
        details()
        .then(res=>{
            console.log(res)
            this.setState({
                details:[res.data.ms[0],res.data.ms[1],res.data.ms[2],res.data.ms[3],res.data.ms[14],res.data.ms[15],res.data.ms[16],res.data.ms[6],res.data.ms[28],res.data.ms[12],]
            })
        })

    }
    render(){
        let {show} = this.state;
        return(
            <div>
                <div className={style.head}>
                    <Link to='/shop'><img alt="" className={style.left} src="http://static1.mtime.cn/html5/20190410101115/images/2014/h_btn_back.png"/></Link>
                    <input className={style.sr}  type="text" placeholder="星球大战"/>
                    <img alt="" className={style.lou} src="http://static1.mtime.cn/html5/20190410101115/images/2014/send.png"/>
                </div>
                <div className={style.nav}>
                    <p>综合排序</p>
                    <span>|</span>
                    <p>价格降序</p>
                    <span>|</span>
                    <p>价格升序</p>
                </div>
                <div className={style.box}>
                    {this.state.details.map(item=>{
                        return(
                            <ul key={item.id}>
                                <li className={style.li}>
                                <img alt="" className={style.bg1} src={item.img}/>
                                <p className={style.p}>{item.commonSpecial}</p>
                                <p className={style.p2}>￥{item.NearestCinemaCount}</p>
                                </li>

                            </ul>
                        )
                    })}

                </div>
                <div className={style.intrest}>
                  奋力加载中...
            </div>
            <div className={style.foot}>
                  <ul className={style.footul}>
                    <li className={style.footli}>首页</li>
                    <li className={style.footli}>购票</li>
                    <li className={style.footli}>商城</li>
                    <li className={style.footli}>发现</li>
                    <li className={style.footli}>我的</li>
                  </ul>
            </div>
            <div className={style.ending}>
                  <img alt="" className={style.e1} src="https://static1.mtime.cn/html5/20190410101115/images/2014/fot_logo.png"/>
                  <img alt="" className={style.e2} src="https://static1.mtime.cn/html5/20190410101115/images/h_mark.jpg"/>
                  <br />
                  <div className={style.copy}>
                  <span className={style.copy2}>Copyright </span>
                  <span className={style.copytime}>2006-2019</span>
                  <span className={style.copydes}> Mtime.com Inc. All rights reserved.</span>
                  </div>
            </div>
            <div>
                  {
                    show &&
                    <img alt="" onClick={this.handleScrollTop} className={style.fix} src="https://static1.mtime.cn/html5/20190410101115/images/2014/backtop1.png"/>
                  }
                  </div>
            </div>
        )
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
