import React from 'react'
import Myheader from "../myheader/Myheader"
import Slideshow from "../slide show/slideshow"
import Mypic from "../mypic/mypic"

const Mylayout = () => {
  return (
    <div className='fullpage'>
        <Myheader></Myheader>
        <Slideshow></Slideshow>
        <Mypic></Mypic>

    </div>
  )
}

export default Mylayout