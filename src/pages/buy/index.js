import React, { Component } from 'react'
import styles from './buy.css'
import Link from 'umi/link'
// import axios from 'axios'
import {fetchProducts} from '../../services/products'

class Buy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    fetchProducts()
      .then(res=>{
        console.log(res)
        this.setState({
          movies: res.data.ms
        })
      })
  }
  render() {
    return(
      <div className={styles.box}>
        <header>
          <ul className={styles.nav}>
            <li><img alt="" src="https://static1.mtime.cn/html5/20190327113529/images/2014/fot_logo.png"/></li>
           <Link to="/shouye"> <li>首页</li></Link>
            <li>购票</li>
            <Link to="/shop"> <li>商城</li></Link>
            <Link to="/discover"><li>发现</li></Link>
            <li><img className={styles.im} alt="" src="https://static1.mtime.cn/html5/20190327113529/images/2014/ico_my.png"/></li>
          </ul>
        </header>
        <section>
          <div className={styles.banner}>
            <figure>
              <figcaption>上海</figcaption>
              <span><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAeCAYAAABqpJ3BAAAAAXNSR0IArs4c6QAAAWVJREFUWAntmDFugzAUhoEhOQAH4DwwJQszx+hWdQo3YM3Mkg3Ow9aFA7RT35+SKHEwPNsPjKpaMsHPvOfvQ0KKHdZ1vev7/iMIgoI62jmO4/c8z79/h9u46jjDqqpOhPimYLZJkhyzLPtS4l6GTdPsu6670OKpAlBGFCiUIIYpEpA4MrdqaAIeHAUEdM27xAz8lRsCZ50Bxb1JcODBHuGDpZt2SxJM+BbsIcC5CWt82KYsV4GtSJjCg/su4FvCBv5FwJeELfyowNoSLvBagbUkXOEnBZaWkICfFVhKQgqeJSAtIQnPFpCSkIY3EnCVWALeWMBWYil4KwFTCTyv2Yxg6tasN1BPfyVu1Ti/3Lc61FJ3Uo9LWMOjiLUAkpkSeFTXnOBR1EkABRwknOFFBCwlRODFBAwlxOBFBZgSovDiAjMS4vBYb+pYBfPGDYdhtNk+UGJJ/XPoJWJbOSgzlvpP+Mtv4AfFZn0enf+H0QAAAABJRU5ErkJggg==" /></span>
            </figure>
            <form>
              <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzZGNDlEMzE1RDgzMTFFNEI5QTRENDA1RDNCMDg3RTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzZGNDlEMzI1RDgzMTFFNEI5QTRENDA1RDNCMDg3RTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NkY0OUQyRjVEODMxMUU0QjlBNEQ0MDVEM0IwODdFNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NkY0OUQzMDVEODMxMUU0QjlBNEQ0MDVEM0IwODdFNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg1dcXAAAAKqSURBVHjazJjPS1RRFMffDJYpiaKLyMBKpVImjVxIxiS1UKGkkDaWrvwHdCEDk0HQj0UbFUSUlkmzyUpU0Bi0cChSIoWhX6S0GIhZZIqh4Wb6HvgOPB44c+/zPZ0DH+7M491zv3PuveeeO55EImFkgnlESDgcTvfeKXADNIBKUMTnv8Fn8Bq8At/dElIP7gO/or85cBe81RXi3eH5ITAEZiniDxgEzeA4yAZ5oILPBvmOn32G6GNXESkEE+AC+Ad6wWOwlsZXAegGXSAHvAfXwKodIblgBtSCn/y1Uc0o+8A4OAE+gCtgU3dq+ikixjBHbay7KPvG6Ktfd43IwuzgdLTQkV2L0ccWfdbrCHkgUwX6wIIDqWGBvjz0rbRGqvF5kQurFKw7lKfywQo3wDmwlC4iLWxDDoow6CtkGSOlkGTCmnYhe0+xvaQi5AzbRReEJKfjtIqQ5NkRd0FI3DKGUh7J3q/T12s6RcWOujDGEcsYKYV8VZlHm1bN9puKkDm2jS4IabKMkVLIC7atTEJOWT59io2qCJEtFmEGDDgoJECfkVRZ1bpreoAUsJ3grAMifPSVYNWmfOhJefeERY1MVfEuRBwDL+nrk0rpaM0jXSxmyhlOn81IROhD7Dx4Cg7qCJFK6irFnATz4CHLwHRWwHfnWZ0tc1rEbrNqO6xTPEviuQyGWQAHeZQPsAYtAQdICZ8N8J0g+0jfKtAOtulXriJvTAlO+zrxCNQpTss7cIcDGiYBo6Zo/GBuWbZzwZLT+ToTXoXlgvWF5cOYKUNbrQZMmqIR5xL4qCvECStnbVLG7xvgJm+JO16w3DCZkoumKORxAd+SL1l7fNrHuRGec+3Ilh6RU99r7L1t8OL2LLk8JDpZxv6YbOk28Av8Bfc8GfX/SCbYfwEGAOXhtFDed5rtAAAAAElFTkSuQmCC"/>
              <input type="text" placeholder="筛选影院" />
            </form>
            <p>搜索</p>
          </div>
          <div className={styles.juli}>
            <ul>
              <li>
                <span>离我最近</span>
                <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAASCAYAAAAzI3woAAAAAXNSR0IArs4c6QAAAJ5JREFUSA3N1ksOgCAMBFAbzkXisdiJO47lgnuhNTHxw6ctKE4y28lbDhhjbAhhGn4QAJiV937RWsPmGXuaEOOcswoRvVEHBi07qCfqjLmAeqDumAfoS1QMEwV9gUphkqA3UTlMFvQGqoQpglqiKBgSqAWKiiGDalAcDAskQXExbBAHJcGIQBSUFCMG5VA1mCpQDFWLwc0mwZOHbTG2AsaPc+rNNOCIAAAAAElFTkSuQmCC" />
              </li>
              <i>|</i>
              <li>
                <span>全城</span>
                <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAASCAYAAAAzI3woAAAAAXNSR0IArs4c6QAAAJ5JREFUSA3N1ksOgCAMBFAbzkXisdiJO47lgnuhNTHxw6ctKE4y28lbDhhjbAhhGn4QAJiV937RWsPmGXuaEOOcswoRvVEHBi07qCfqjLmAeqDumAfoS1QMEwV9gUphkqA3UTlMFvQGqoQpglqiKBgSqAWKiiGDalAcDAskQXExbBAHJcGIQBSUFCMG5VA1mCpQDFWLwc0mwZOHbTG2AsaPc+rNNOCIAAAAAElFTkSuQmCC" />
              </li>
              <i>|</i>
              <li>
                <span>影厅特效</span>
                <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAASCAYAAAAzI3woAAAAAXNSR0IArs4c6QAAAJ5JREFUSA3N1ksOgCAMBFAbzkXisdiJO47lgnuhNTHxw6ctKE4y28lbDhhjbAhhGn4QAJiV937RWsPmGXuaEOOcswoRvVEHBi07qCfqjLmAeqDumAfoS1QMEwV9gUphkqA3UTlMFvQGqoQpglqiKBgSqAWKiiGDalAcDAskQXExbBAHJcGIQBSUFCMG5VA1mCpQDFWLwc0mwZOHbTG2AsaPc+rNNOCIAAAAAElFTkSuQmCC" />
              </li>
            </ul>
          </div>
          <div className={styles.ziying}>
            <p>以下影院均非时光网自营</p>
          </div>
          <div className={styles.action}>
            <ul>
              {this.state.movies.map(item => {
                return (<li key={item.id}>
                  <dl>
                    <dt>
                      <p><Link to={`/detail/${item.movieId}`}><span>{item.tCn}</span></Link></p>
                      <p>
                        <b>{item.r}</b>
                        <span className={styles.qi}>分</span>
                      </p>
                    </dt>
                    <dd>
                      <p>{item.actors}</p>
                    </dd>

                  </dl>
                </li>)
              })}
            </ul>
          </div>
        </section>
        <footer>
          <div className={styles.fot}>
            <ul>
              <li><a href="#">首页</a></li>
              <li><a href="#">购票</a></li>
              <li><a href="#">商城</a></li>
              <li><a href="#">发现</a></li>
              <li><a href="#">我的</a></li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}

export default Buy
