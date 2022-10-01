import React from 'react'
import './Home.css'
import none from '../Images/none.png'
function Home() {
  return (
    
    <div className='Home_section'>
        <div className='Contents'>
            <div className='Summer'>
               <h5>Summer2020</h5> 
            </div>
            <div className='newCollections'>
                    <h1>NEW COLLECTION</h1>
            </div>
            <div className='Para'>
                <h4>We know how large objects will act.
                but things on a small scale.
                </h4>
            </div>
            <div className='shopNow_Button'>
                  <h3>  SHOP NOW</h3>
            </div>
        </div>
        
    <div  className='Home_image'>
            <img src={none} alt="" />
        </div>
    </div>
        
  )
}

export default Home