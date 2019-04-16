import React,{useState,useEffect} from 'react'
import Link from 'umi/link'
import {Button,notification,Card} from 'antd'
import { fetchProducts } from '../../services/product'

const { Meta } = Card;

function list() {
  //商品信息
  const [products,setProducts] = useState({
    totalCount:0,
    pages:1,
    products:[]
  })
  //当前页
  const [currentPage,setCurrentPage] = useState(1)
  //加载状态
  const [isLoading,setIsLoading] = useState(false)

  //使用useEffect方法，执行类似于class定义组件的生命周期函数
  //第一个参数为一个function
  //第二个参数为数组 表示当什么数据发生改变的时候触发
  //使用空数组表示初始化的时候执行一次
  //相当于class定义组件的组件创建完成之后执行
  useEffect(()=>{
    console.log('正在加载中。。。。')
    //设置加载状态
    setIsLoading(true)
    const loadProducts = async ()=>{
      const result = await fetchProducts({
        page:currentPage //传过去页数
      })
      setIsLoading(false) //改变加载状态
      // console.log(result.data)
      setProducts({...products,
        totalCount:result.data.totalCount,
        pages:result.data.pages,
        products:[...products.products,...result.data.products]
        })
    }
    loadProducts()
  },[currentPage])
  //加载下一页数据
  const nextPage=()=>{
    if(currentPage < products.pages){
      setCurrentPage(currentPage+1)
    }else{
      notification.info({
        message:'没有更多内容',
        description:'描述信息'
      })
    }

  }
  return (
    <div>
      <Link to="/list/2">详情页</Link>
      <h5>我是列表页</h5>
      <p>总数据为：{products.totalCount}</p>
      <p>共计{products.pages}页</p>
      <ul>
        {products.products.map(product=>{
         return (<li key={product._id}>
          <Link to={`/list/${product._id}`}>

            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={`http://api.cat-shop.penkuoer.com${product.coverImg}`} />}
            >
              <Meta
                title={product.name}
                description={product.descriptions}
              />
            </Card>,
          </Link>
          </li>)
        })}
      </ul>
      <Button loading={isLoading} onClick={()=>{nextPage()}} type="primary">加载更多</Button>
    </div>
  )
}

export default list
