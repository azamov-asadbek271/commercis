import React from 'react'
import CardImg from './CardImg'
import SingleProduct from './SingleProduct'

function CardSlider() {
  return (
    <div className=" gap-32 lg:flex">
      <CardImg/>
      <SingleProduct/>
    </div>
  )
}

export default CardSlider