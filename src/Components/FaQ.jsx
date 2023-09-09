import React from 'react'
import '../Components/FaQ.css'



const FaQ = () => {
  return (
    <div>
       <div className='faq'>
             <h2>FreQuently Asked Questions</h2>
             <ul className='accordion'>
                <li>
                    <input type='radio' name='accordian' id='first'></input>
                    <label form='first' >What is Netflix?</label>
                    <div className='content'>
                     <p>
                     Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                     movies, anime, documentaries and more – on thousands of internet-connected devices.

                    You can watch as much as you want, whenever you want, without a single ad – all for 
                    one low monthly price. There's always something new to discover, and new TV shows and
                     movies are added every week!
                     </p>
                    </div>
                </li>

                <li>
                    <input type='radio' name='accordian' id='first'></input>
                    <label form='first' >What is Netflix?</label>
                    <div className='content'>
                     <p>
                     Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                     movies, anime, documentaries and more – on thousands of internet-connected devices.

                    You can watch as much as you want, whenever you want, without a single ad – all for 
                    one low monthly price. There's always something new to discover, and new TV shows and
                     movies are added every week!
                     </p>
                    </div>
                </li>
                <li>
                <form className='email_signup'>
                   <input type='email' placeholder='Email address' required/>
                   <button>Get started  </button>
            </form>
                </li>
             </ul>
             
       </div>
       
    </div>
  )
}

export default FaQ
