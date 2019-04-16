import React, { Component } from 'react'
import Link from 'umi/link'
import styles from './cominglist.css';
import { SearchBar,  WhiteSpace} from 'antd-mobile';
import {useState,useEffect} from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import {fetchComingMovie } from '../../services/willmovie';
/* useEffect(()=>{

    setTimeout(() => {
        this.setState({
          data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        });
      }, 100);
},[]) */



 class cominglist extends React.Component {
      constructor(props){
      super(props)
      this.state={
          attenum:0,
          comnum:0,
          attenmovies:[],
          moviescoming:[],
          arr1:[],
          arr2:[],
          arr3:[]

      }


      }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
        fetchComingMovie().then(res=>{
         const attenres=res.data.attention;
         const comingres=res.data.moviecomings;
         this.setState({
           attenum: attenres.length,
           comnum:comingres.length,
           attenmovies:attenres,
           moviescoming:comingres
         })
/*          const  newobj=[];

        var set=new  Set(newobj);

       this.state.moviescoming.map(item=>{
            newobj.push(item.rMonth);
            set =new Set(newobj);

          })  */
         // var newset=[...set];
          var arr11=[];
          var arr22=[];
          var arr33=[];
          this.state.moviescoming.map(item=>{

             switch(item.rMonth){
               case 4: arr11.push(item);
                       break;
              case 5: arr22.push(item);
                       break;
              case 6: arr33.push(item);
                       break;
             }




          })
          this.setState({
            attenum: attenres.length,
            comnum:comingres.length,
            attenmovies:attenres,
            moviescoming:comingres,
            arr1:arr11,
            arr2:arr22,
            arr3:arr33
          })

         console.log(this.state.arr1)
         console.log(this.state.arr2)
         console.log(this.state.arr3)

        })
    }
  render() {
    return (
        <div className={styles.box}>
        <header className={styles.menu}>
        <ul className={styles.menunav}>
        <li className={styles.imgpic}><img src="https://static1.mtime.cn/html5/20190327113529/images/2014/fot_logo.png"/></li>
        <li  data-selector="navsecli" data-page-id="0">
        <a className={styles.tdcurr} href="#"><span>首页</span>

         </a>
        </li>
        <li  data-selector="navsecli" data-page-id="1">
        <a href="#"><span>购票</span></a>
        </li>
        <li  data-selector="navsecli" data-page-id="8"><a className={styles.speciala} href="#"><span>商城</span><em className={styles.new}>NEW</em></a>
        </li>
        <li  data-selector="navsecli" data-page-id="3"><a href="#"><span>发现</span></a>
        </li>
        <li><img className={styles.im} src="https://static1.mtime.cn/html5/20190327113529/images/2014/ico_my.png"/></li>
        </ul>

        </header>
        <section>
        <div className={styles.moviesearch}>

        <div className={styles.cityshow}>
        <b>深圳</b>
        <i></i>
        </div>

         <SearchBar className={styles.searchbar} placeholder="影片/影院/影人,任你搜" />
         <WhiteSpace />
        </div>
        <article className={styles.upcoming}>
    <div className={styles.mosemovie}>
    <h2 className={styles.title}>
    <b>最受关注</b> <span>（{this.state.attenum}部）</span>
    </h2>
    <div className={styles.filmscroll}>
    <ul className={styles.tabletransition4} >



    <WingBlank className={styles.lunimg} >
            <Carousel
              autoplay={false}
              infinite

            >

            {this.state.attenmovies.map(item=>{
                return(

                    <li key={item.id} className={styles.specailli}  data-id={item.id}>
                    <time><span>{item.rMonth}月{item.rDay}日</span></time>
                    <div className={styles.tablemovielist}>
                    <div className={styles.upmovie_pic}>
                    <a href="#!/movie/234540/">
                     <img className={styles.m_imgimg_box} src={item.image}/>
                     </a>
                     </div>
                  <div className={styles.upmovietxt}>
                  <dl>
                      <dt>
                          <a href="#!/movie/234540/">
                          <b>{item.title}</b>
                          </a>
                          </dt>
                          <dd>
                              <p>
                                  <b className={styles.color}>{item.wantedCount}</b> 人想看 - {item.type}</p>
                                  <p className={styles.txt_elli}>导演:{item.director}</p>
                                  <p className={styles.txt_elli}>演员：{item.actor1},{item.actor2}</p>
                                  </dd>
                                  </dl><div className={styles.btns}>
                                  <a href="//ticket-m.mtime.cn/theater/729/movie/234540/" className={styles.m_btn_orange}><span>超前预售</span></a>
                                   <a href="#!/movie/234540/videos/" className={styles.m_btn_green}>

                                   <span>预告片</span></a>
                                   </div>
                                   </div>
                                   </div>
                                   </li>

                )
            })}




            </Carousel>
          </WingBlank>


    </ul>

    </div>

    </div>

        </article>
        <aside className={styles.lunbo}>

        <WingBlank className={styles.lunimg} >
            <Carousel
              autoplay={true}
              infinite

            >
                  <img
                    src={`https://static1.mtime.cn/feature/mobile/banner/2019/0304/naodong750-210.jpg`}
                    alt=""
                  />
                   <img
                    src={`https://static1.mtime.cn/feature/mobile/banner/2019/0311/hbt750210.jpg`}
                    alt=""
                  />


            </Carousel>
          </WingBlank>
            </aside>
            <aside className={styles.movieshow} >

           < h2 className={styles.title}>
        <b>即将上映</b> <span>（{this.state.comnum}部）</span>
       </h2>

       <div className={styles.showmsg}>
       <h5 >4月</h5>

      <hr/>
      <ul className={styles.overstyle1}>
      {this.state.arr1.map(item=>{
         return(

          <li key={item.id} className={styles.special1} data-id={item.id}>

          <div className={styles.tablemovielist}>
          <time className={styles.day}><span>{item.rDay}日</span></time>
          <div className={styles.upmovie_pic}>
          <a href="#!/movie/234540/" className={styles.pic1}>
          <img className={` ${styles.imgpic11}`} src={item.image}/>
          </a>
          </div>
          <div className={`${styles.upmovietxt} ${styles.upmovietxt1}`}>
          <dl>
              <dt>
                  <a href="#!/movie/234540/">
                  <b>{item.title}</b>
                  </a>
                  </dt>
                  <dd>
                      <p>
                          <b className={styles.color}>{item.wantedCount}</b> 人想看 - {item.type}</p>
                          <p className={styles.txt_elli}>导演:{item.director}</p>
                          <p className={styles.txt_elli}>演员：{item.actor1},{item.actor2}</p>
                          </dd>
                          </dl><div className={styles.btns}>
                          <a href="//ticket-m.mtime.cn/theater/729/movie/234540/" className={styles.m_btn_orange}><span>超前预售</span></a>
                           <a href="#!/movie/234540/videos/" className={styles.m_btn_green}>

                           <span>预告片</span></a>
                           </div>
                           </div>
                           </div>
                           </li>


         )
       })}

      </ul>
      </div>
      <div className={styles.showmsg}>
       <h5>5月</h5>


      <ul>
      {this.state.arr2.map(item=>{
         return(

          <li key={item.id}  className={styles.special1} data-id={item.id}>

          <div className={styles.tablemovielist}>
          <time className={styles.day}><span>{item.rDay}日</span></time>
          <div className={styles.upmovie_pic}>
          <a href="#!/movie/234540/" className={styles.pic1}>
          <img className={` ${styles.imgpic11}`} src={item.image}/>
          </a>
          </div>
          <div className={`${styles.upmovietxt}  ${styles.upmovietxt1}`}>
          <dl>
              <dt>
                  <a href="#!/movie/234540/">
                  <b>{item.title}</b>
                  </a>
                  </dt>
                  <dd>
                      <p>
                          <b className={styles.color}>{item.wantedCount}</b> 人想看 - {item.type}</p>
                          <p className={styles.txt_elli}>导演:{item.director}</p>
                          <p className={styles.txt_elli}>演员：{item.actor1},{item.actor2}</p>
                          </dd>
                          </dl><div className={styles.btns}>
                          <a href="//ticket-m.mtime.cn/theater/729/movie/234540/" className={styles.m_btn_orange}><span>超前预售</span></a>
                           <a href="#!/movie/234540/videos/" className={styles.m_btn_green}>

                           <span>预告片</span></a>
                           </div>
                           </div>
                           </div>
                           </li>


         )
       })}

      </ul>
      </div>
      <div className={styles.showmsg}>
       <h5>6月</h5>


      <ul>
      {this.state.arr3.map(item=>{
         return(

          <li key={item.id} className={styles.special1} data-id={item.id}>

          <div className={styles.tablemovielist}>
          <time className={styles.day}><span>{item.rDay}日</span></time>
          <div className={styles.upmovie_pic}>
          <a href="#!/movie/234540/" className={styles.pic1}>
          <img className={` ${styles.imgpic11}`} src={item.image}/>
          </a>
          </div>
          <div className={`${styles.upmovietxt}  ${styles.upmovietxt1}`}>
          <dl>
              <dt>
                  <a href="#!/movie/234540/">
                  <b>{item.title}</b>
                  </a>
                  </dt>
                  <dd>
                      <p>
                          <b className={styles.color}>{item.wantedCount}</b> 人想看 - {item.type}</p>
                          <p className={styles.txt_elli}>导演:{item.director}</p>
                          <p className={styles.txt_elli}>演员：{item.actor1},{item.actor2}</p>
                          </dd>
                          </dl><div className={styles.btns}>
                          <a href="//ticket-m.mtime.cn/theater/729/movie/234540/" className={styles.m_btn_orange}><span>超前预售</span></a>
                           <a href="#!/movie/234540/videos/" className={styles.m_btn_green}>

                           <span>预告片</span></a>
                           </div>
                           </div>
                           </div>
                           </li>


         )
       })}

      </ul>
      </div>

                </aside>
            </section>
            <footer className={styles.footer}>
          <nav className={styles.link}>
          <ul className={styles.table_v_c}>
          <li  data-selector="footnavli" data-page-id="0">
          <a href="#"><Link to='/'><span>首页</span></Link></a>
          </li>
          <li  data-selector="footnavli" data-page-id="1">
          <a href="#"><span>购票</span></a>
          </li>
          <li data-selector="footnavli" data-page-id="8">
          <a href="#"><span>商城</span></a>
          </li>
          <li  data-selector="footnavli" data-page-id="3">
          <a href="#"><span>发现</span></a>
          </li>
          <li  data-selector="footnavli" data-page-id="4">
          <a href="#"><span>我的</span></a>
          </li>
          </ul>
          </nav>

           </footer>
        </div>
    )
  }
}


export default cominglist




