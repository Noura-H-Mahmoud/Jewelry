import React from 'react'
import './Nav.css'
import GEMGLOW from '../../assets/images/GEMGLOW.svg'
import '../../index.css'

export default function Navv() {
  return (
   <nav>
      <img src={GEMGLOW} alt="Logo" />
      <a href="#">
        NEWSLETTER
      </a>
   </nav>
  )
}
