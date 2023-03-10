import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../Redux/Slice/favourites'
import './Index.css'
function Index() {
    const [joke, setJoke] = useState([])
    const dispatch = useDispatch();


    useEffect(()=>{
        axios.get('https://api.chucknorris.io/jokes/random').then((res)=>{
            setJoke(res.data)
        })
    }, [])

    console.log(joke);
  return (
    <div className='container'>
        <div>
              <Toaster
  position="top-center"
  reverseOrder={false}
/>
              </div>
<div className='card'>
        <div className='card_img'><img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" alt="" /></div>
    <div className='title'>JOKE</div>
    <div className='joke'>{joke.value}</div>
    <div className='btns'>

    <button onClick={()=>{
        toast.error('Another Joke!')
        axios.get('https://api.chucknorris.io/jokes/random').then((res)=>{setJoke(res.data)})
    }}>BAD</button>
    <button  onClick={()=>{
        toast.success('Added!')
        dispatch(addProduct(joke))}}>GOOD</button>
    </div>
    </div>

    </div>
    
  )
}

export default Index