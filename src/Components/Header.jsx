import React from 'react'
import Navbar from './Navbar'
import '../Components/Header.css'
import Middle from './Middle'
import FaQ from './FaQ'
import End from './End'






const Header = () => {
  return (
    <>
        
       <div className='header'>
           <Navbar/>
          
          <div className='header_content'>
            <h1>Unlimited movies,TV shows and more.</h1>
            <h3>Watch anywhere.Cancel anytime</h3>
            <p>Ready to Watch? Enter your Email to create or restart your membership</p>

            <form className='email_signup'>
                   <input type='email' placeholder='Email address' required/>
                   <button>Get started  </button>
            </form>
           
            </div>
         <Middle/>
         <FaQ/>
         <End/>
       

          </div>  

        
    </>
   
      
  )
}

export default Header
