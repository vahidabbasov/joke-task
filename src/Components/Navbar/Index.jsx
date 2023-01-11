import React from 'react'
import { Link } from 'react-router-dom'
import './Index.css'

function Index() {
  return (
    <>
    <header>
        <nav>
            <div className='left'>
                <Link className='link' to={'/'}>CHUCKNORRIS.IO</Link>
                
            </div>
            <div className='right'>
                <ul>
                    <Link className='link' to={'/'}>Home</Link>
                    <Link className='link' to={'/favourites'}>Favourites</Link>
                    
                </ul>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Index