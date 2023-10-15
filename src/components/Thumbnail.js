import React from 'react'
import './Thumbnail.css'
function Thumbnail({Title, Views , time}) {
    let chanel = "Z-Mad";
  return (
    <>
     <div className='picture'>
        <img src="https://blog.hubspot.com/hs-fs/hubfs/parts-url_1.webp?width=893&height=600&name=parts-url_1.webp" alt="" className='imge' />
     </div>
     <div className='Title'>{Title}</div>
     <div className='Channel'>{chanel}</div>
     <div className='viewsplusTime'>
        <span>Views: {Views}</span>
        <span>{time}</span>
     </div>


    </>
  )
}

export default Thumbnail
