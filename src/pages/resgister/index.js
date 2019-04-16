/* import React, { useState } from 'react'
import styles from './resgister.css';
import { List, InputItem } from 'antd-mobile';

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
      }}>注册</h1>
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
      <InputItem
        type="password"
        placeholder="请确认密码"
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
          注册
            </div>
      </List.Item>

    </div>
  )
}


export default Home
 */
import React, { Component } from 'react'
import styles from './resgister.css';//引入css文件
// import { reg } from '../../servers/user.js'//引入注册接口
import { List, InputItem } from 'antd-mobile';
import Link from 'umi/link';//跳转
import { reg } from '../../services/user'
import router from 'umi/router';
import { Toast, WingBlank, Button } from 'antd-mobile';


function failToast() {
  Toast.fail('注册失败', 1);
}


class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bgUrl:`url(${require("../../assets/xiongmao.png")})`,
      userName: '',//设置获取姓名、密码的空值
      password: '',
      nickName:'',
      avatar:''
    }
  }
  setBgUrl(url) {
    this.setState({ bgUrl: url })
  }
  regin = () => {
    // console.log(this.state)
    reg({
      userName: this.state.username,
      password: this.state.password,
      nickName:'',
      avatar:''
    })
      // .then(res => { console.log(res) })
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
        }}>注册</h1>
        <InputItem
          clear
          placeholder="请输入用户名"
          onChange={val => { this.handleChange('username', val) }}
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
        <InputItem
          type="password"
          onChange={val => { this.handleChange('password2', val) }}
          placeholder="请确认密码"
          onFocus={() => { this.setBgUrl(`url(${require("../../assets/xiongmao1.png")})`) }}
          onBlur={() => { this.setBgUrl(`url(${require("../../assets/xiongmao.png")})`) }}
        >确认密码</InputItem>
        <List.Item>
          <div
            onClick={() => { this.regin() }}
            style={{
              width: '100%',
              height: '40px',
              lineHeight: '40px',
              background: '#108ee9',
              color: 'white',
              textAlign: 'center'
            }}
          >
            注册
            </div>
        </List.Item>
        <Link to="/login">
          <List.Item>
            <div
              style={{
                width: '100%',
                height: '40px',
                lineHeight: '40px',
                background: 'white',
                color: '#108ee9',
                textAlign: 'center'
              }}
            >
              已有账号登陆
            </div>
          </List.Item>
        </Link>

      </div>
    )
  }
}

export default Register
