import styles from './index.css';
import { SearchBar,  WhiteSpace} from 'antd-mobile';
import React,{useState,useEffect} from 'react';
import {fetchMessage } from '../../services/indexshow';
import {fetchComingMovie } from '../../services/willmovie';
import Link from 'umi/link';

function  indexshow(){

   const [moviemsg,setMoviemsg]=useState({
     comingcount:0,
     totalcount:0,
     moviemsg:[]

   }
   )
   //使用useEffect方法 执行类似于class定义组件的生命周期函数
  //第一个参数为一个function
  //第二个参数为数组，表示当什么数据发生改变时触发
  //使用空数组表示初始化的时候执行一次
  //相当于class定义组建的组件创建完成之后执行
   useEffect(()=>{

     const loadMovieMsg=async ()=>{   //定义方法

     const result=await fetchMessage();
     const comingres=await fetchComingMovie();
     // console.log(comingres.data.moviecomings);
      const comcount=comingres.data.moviecomings.length; //即将上映的数量
     const oldArr=result.data.ms;
     const newArr=oldArr.slice(0,8);
     //console.log(newArr);
     setMoviemsg({
       totalcount:oldArr.length,
       moviemsg:newArr,
       comingcount:comcount

     });
     }
     loadMovieMsg();//调用方法
   },[])
  return (
    <div className={styles.box}>
    <header className={styles.menu}>
    {/* <ul className={styles.menunav}>
    <li className={styles.imgpic}><img src="https://static1.mtime.cn/html5/20190327113529/images/2014/fot_logo.png"/></li>
    <li  data-selector="navsecli" data-page-id="0">
    <a className={styles.tdcurr} href="#"><span>首页</span>

     </a>
    </li>
    <Link to="/buy"> <li  data-selector="navsecli" data-page-id="1">
    <a href="#"><span>购票</span></a>
    </li></Link>
    <Link to="/shop"><li  data-selector="navsecli" data-page-id="8"><a className={styles.speciala} href="#"><span>商城</span><em className={styles.new}>NEW</em></a>
    </li></Link>
    <Link to="/discover"><li  data-selector="navsecli" data-page-id="3"><a href="#"><span>发现</span></a>
    </li></Link>
    <li><img className={styles.im} src="https://static1.mtime.cn/html5/20190327113529/images/2014/ico_my.png"/></li>
    </ul> */}
     <ul className={styles.nav}>
            <li><img src="https://static1.mtime.cn/html5/20190327113529/images/2014/fot_logo.png"/></li>
            <Link to="/shouye"><li>首页</li></Link>
            <Link to="/buy"><li>购票</li></Link>
            <Link to="/shop"><li>商城</li></Link>
            <li>发现</li>
           <Link to="/login"><li><img className={styles.im} src="https://static1.mtime.cn/html5/20190327113529/images/2014/ico_my.png"/></li></Link>
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
    <article className={styles.indexmovie}>
    <h2 ><a href="#"><b>正在热映（{moviemsg.totalcount}部）</b><i className={styles.logomore}></i> </a></h2>
    <ul>
      {moviemsg.moviemsg.map(moviemsg=>
      <li key={moviemsg.id} data-id={moviemsg.id} >
    <a href="#">
    <div>
    <img src={moviemsg.img}/>
    <em className={styles.score}><i>{moviemsg.r}</i></em>
      </div>

    <span>{moviemsg.tCn}</span>

    </a>

     </li>)}


      </ul>

      <h2 className={styles.tomovie}>
      <Link to='/comingList/cominglist'>
      <b>即将上映（{moviemsg.comingcount}部）</b>
      <i className={styles.logomore}></i>
      </Link>

       </h2>
    </article>
    <aside className={styles.imgshow}>
    <a href="#"><img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F31%2F143906.61810640.jpg&width=640&height=320&clipType=4"/></a>

      </aside>

      <div className={styles.todayhot}>
      <h2><a href="javascript:void(0)"><b>今日热点</b></a></h2>
      <ul className={styles.hotPoints}>
      <li nid="1589347" isgallary="false">
      <div className={styles.table}>
      <div className={styles.todaypic}>
      <a href="#!/news/movie/1589347/">
      <img  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F02%2F26%2F161907.62760947.jpg&amp;width=225&amp;height=156&amp;clipType=4" />
      </a>
      </div>
      <div className={styles.todaytxt}>
      <h2>
        <a href="#!/news/movie/1589347/">阿方索独家谈《罗马》</a>
        </h2>
        <p><span>“时间才能检验电影”</span></p>
        <p><time>2019-02-26 17:50:09</time></p>
        </div>
        </div>
        </li>
        <li nid="1589347" isgallary="false">
      <div className={styles.table}>
      <div className={styles.todaypic}>
      <a href="#!/news/movie/1589347/">
      <img  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F02%2F26%2F161907.62760947.jpg&amp;width=225&amp;height=156&amp;clipType=4" />
      </a>
      </div>
      <div className={styles.todaytxt}>
      <h2>
        <a href="#!/news/movie/1589347/">阿方索独家谈《罗马》</a>
        </h2>
        <p><span>“时间才能检验电影”</span></p>
        <p><time>2019-02-26 17:50:09</time></p>
        </div>
        </div>
        </li>
        <li className={styles.specialli} nid="1589347" isgallary="false">
      <div className={styles.table}>
      <div className={styles.todaypic}>
      <a href="#!/news/movie/1589347/">
      <img  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F02%2F26%2F161907.62760947.jpg&amp;width=225&amp;height=156&amp;clipType=4" />
      </a>
      </div>
      <div className={styles.todaytxt}>
      <h2>
        <a href="#!/news/movie/1589347/">阿方索独家谈《罗马》</a>
        </h2>
        <p><span>“时间才能检验电影”</span></p>
        <p><time>2019-02-26 17:50:09</time></p>
        </div>
        </div>
        </li>
        </ul>
        </div>
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
      );

}
export default indexshow

