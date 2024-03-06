import React from 'react'
import "./imageSlide.css"
import CakeIcon from '@mui/icons-material/Cake';
export const ImageSlide = () => {
  return (
    <>

      <section className='mainImage'>
        <div className='textOnImg'>
          <span className='icon'><CakeIcon /></span>
          <span className='text'>Chocolate</span>
        </div>
      </section>

    </>
  )
}
