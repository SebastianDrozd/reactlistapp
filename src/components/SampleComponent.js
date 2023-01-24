import React from 'react'
import "../css/SampleComponent.css"
const SampleComponent = () => {
  return (
    <div className='sample-container'>
        <div className='actual'>
        <div className='sample1'><p>Hi</p></div>
        <div className='sample2'><p>The reason for this is </p></div>
        <div className='sample3'><p>Duck</p></div>
        </div>
        <div className='actual'>
        <div className='sample1'><p>Hi</p></div>
        <div className='sample2'><p>The reason for this is ajklshjdlhj laskjd lkajs dklajs  </p></div>
        <div className='sample3'><p>Duck</p></div>
        </div>
        <div className='actual'>
        <div className='sample1'><p>Hi</p></div>
        <div className='sample2'><p>The reason for this asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asdas dis ajklshjdlhj laskjd lkajs dklajs  </p></div>
        <div className='sample3'><p>Duck</p></div>
        </div>
    </div>
  )
}

export default SampleComponent