import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import './Index.css'

function Index() {
    const {products}= useSelector((state)=>state.favourites)
const dispatch = useDispatch();
  return (
    <div className='favCont'>
{products.map((product)=>{
    return (
        <>
         <div className='favCard'>
            <div className='img'>
                <img src="https://i.pinimg.com/736x/00/9e/cf/009ecf032d2a9422c7a492c3f45869c3--hindi-funny-jokes-sms-jokes.jpg" alt="" />
            </div>
        <div className='title' style={{color:'red'}}>NICE JOKE ;)  </div>
         <div className='value'>{product.value}</div>
         </div>
        
        </>
       
    )
})}

    </div>
  )
}

export default Index