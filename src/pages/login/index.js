/* import React, { useState } from 'react'
import styles from './login.css';
import { List, InputItem } from 'antd-mobile';
import Link from 'umi/link'
import { changeConfirmLocale } from 'antd/lib/modal/locale';

function Home() {

  const [bgUrl, setBgUrl] = useState(`url(${require("../../assets/xiongmao.png")})`)

  return (

    <div>
      <div className={styles.logo}
        style={{
          backgroundImage: bgUrl
        }}>

      </div>

      <h1 style={{
        color: 'black',
        margin: '20px 10px'
      }}>登录</h1>
      <InputItem
        clear
        placeholder="请输入用户名"
        onFocus={() => { setBgUrl(`url(${require("../../assets/xiongmao.png")})`) }}
        onBlur={() => { setBgUrl(`url(${require("../../assets/xiongmao1.png")})`) }}
      >用户名</InputItem>
      <InputItem
        type="password"
        placeholder="请输入密码"
        onFocus={() => { setBgUrl(`url(${require("../../assets/xiongmao.png")})`) }}
        onBlur={() => { setBgUrl(`url(${require("../../assets/xiongmao1.png")})`) }}
      >密码</InputItem>
      <List.Item>
        <div
          style={{
            width: '100%',
            height: '40px',
            lineHeight: '40px',
            background: '#108ee9',
            color: 'white',
            textAlign: 'center'
          }}
        >
          登录
            </div>
      </List.Item>

    </div>
  )
}


export default Home
 */
import React, { Component } from 'react'
import styles from './login.css';
import { List, InputItem } from 'antd-mobile';
import Link from 'umi/link';//跳转
import router from 'umi/router';
import { Toast, WingBlank, Button } from 'antd-mobile';
import { login } from '../../services/user'
function failToast() {
  Toast.fail('登录失败', 1);
}

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bgUrl: `url(${require("../../assets/xiongmao.png")})`,
      username: '',//设置获取姓名、密码的空值
      password: '',
    }
  }
  setBgUrl(url) {
    this.setState({ bgUrl: url })
  }
  state = {                   //设置获取姓名、密码的空值
    userName: '',
    password: ''
  }
  login = () => {
    console.log(this.state)
    login({
      userName: this.state.username,
      password: this.state.password
    })
      .then(res => {
        if (res.data.code == "success") {
          //alert("aa")
          router.push('/discover');
          // this.props.history.push('/shouye');
        } else {
          // alert("注册失败")
          failToast()
        }
      })
      .catch(err => console.log(err))
  }
  //处理输入数据的改变  更新对应的状态
  handleChange = (name, val) => {
    this.setState({
      [name]: val  //属性名不是name 而是name变量的值
    })
  }
  // register() {
  //   console.log(this.props);
  // }
  render() {
    return (
      <div>
        <div className={styles.logo}
          style={{
            backgroundImage: this.state.bgUrl
          }}>
        </div>

        <h1 style={{
          color: 'black',
          margin: '20px 10px'
        }}>登陆</h1>
        <InputItem
          clear
          onChange={val => { this.handleChange('username', val) }}
          placeholder="请输入用户名"
          onFocus={() => { this.setBgUrl(`url(${require("../../assets/xiongmao.png")})`) }}
          onBlur={() => { this.setBgUrl(`url(${require("../../assets/xiongmao1.png")})`) }}
        >用户名</InputItem>
        <InputItem
          type="password"
          onChange={val => { this.handleChange('password', val) }}
          placeholder="请输入密码"
          onFocus={() => { this.setBgUrl(`url(${require("../../assets/xiongmao1.png")})`) }}
          onBlur={() => { this.setBgUrl(`url(${require("../../assets/xiongmao.png")})`) }}
        >密码</InputItem>
        <List.Item>
          <div
            onClick={() => { this.login() }}
            style={{
              width: '100%',
              height: '40px',
              lineHeight: '40px',
              background: '#108ee9',
              color: 'white',
              textAlign: 'center'
            }}
          >
            登陆
            </div>
        </List.Item>
        <div className={styles.zhuce}>
        <div>
          <p>没有账号?</p>
          <Link to="/resgister">
            <b>注册</b>
          </Link>
          </div>
          <span>忘记密码</span>
        </div>

        {/* <div className={styles.diSanF}>
          <p>第三方账号登陆：</p>
          <div className={styles.oauth}>
            <div>
              <img title="微博" alt="微博" src={require('../../assets/weibo.png')} />
            </div>
            <div>
              <img title="微信" alt="微信" src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg" />
            </div>
            <div>
              <img title="GitHub" alt="GitHub" src="https://b-gold-cdn.xitu.io/v3/static/img/github.547dd8a.svg" />
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}
export default Login
