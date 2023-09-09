import React from 'react'
import '../Components/Middle.css'
const Middle = () => {
  return (
    <div className='f1' >
      
        <hr/>
        <div class="box feature box3">
             <div class="sub-box">
                <img class="img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt=""/>
            </div> 
             <div class="sub-box des">
                <h2 class="small-heading">Download your shows to watch offline</h2>
                <p>Save your favourites easily and always have something<br/> to watch.</p>
            </div> 
       </div> 
        <hr/>
       <div className='features'>
               <div className='row'>
                  <div className='text_col'>
                    <h2>Enjoy on your TV.</h2>
                    <p>Watch on smart TVs, Playstations,Xbox,Chromecast,Apple TV, Blu-ray,
                       players and more</p>
                  </div>

                  <div className='img_col'>

                    <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' alt=''/>
                  </div>
               </div>

        </div>
        <hr/>
         <div class="box feature box4">
         <div class="sub-box">
                 {/* <video class="vid2" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" autoplay loop></video> */}
                <img class="img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt=""/>
            </div> 
            <div class="sub-box des">
                <h2 class="small-heading">Watch everywhere</h2>
                <p>Stream unlimited movies and TV shows on your<br/> phone, tablet, laptop, and TV.</p>
            </div> 
       </div>
        <hr/>
        <div class="box feature box5">
             
             <div class="sub-box des">
                <h2 class="small-heading">Create profiles for kids</h2>
                <p>Send children on adventure with their favourite<br/> characters in a space made just for them--free with your membership.</p>
            </div> 
            <div class="sub-box">
                <img class="img1" src="https://occ-0-2159-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt=""/>
            </div> 
        </div> 
       
       

    </div>
  )
}

export default Middle
