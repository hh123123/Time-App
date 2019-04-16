import styles from './index.css';
import Link from 'umi/link'
import { Script } from 'vm';
import router from 'umi/router';
import React, { Component } from 'react'
import { classBody } from '@babel/types';
class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    /* fetchProducts()
      .then(res=>{
        console.log(res)
        this.setState({
          movies: res.data.ms
        })
      }) */
  }

  render(){
    const { showLoading, opacity, background } = this.props

    function huhu(){

        var te = document.getElementsByTagName('img')

       // window.history.go(1)
       router.push('/shouye');

    }
    setTimeout(huhu,6000);

    return(
      <div className={styles.box}>
      <img src={require('../assets/1.gif')} className={styles.teshu} id="te" style={opacity} />
      <h3><img className={styles.imger} src={require('../assets/9.jpg')}/> 小美女</h3>

      </div>
    )
  }
}

export default  index

