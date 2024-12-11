import React from 'react'
import './Quality.css'
import ringW from '../../assets/images/tall.jpg'
import ringH from '../../assets/images/wommen.png'
import ringR from '../../assets/images/ringNM.png'

export default function Quality() {
  return (
    <section className='Quality'>
        <div className="side1">
            <img className='img1' src={ringW} alt="" />
            <div className="para1">
                <p>01.</p>
                <p>ELEGANCE</p>
            </div>
        </div>
        <div className="side2">
            <div className="item">
                <div className="para1">
                    <p>02.</p>
                    <p>QUALITY</p>
                </div>
                <img src={ringH} alt="" />
            </div>
            <div className="item">
                <div className="para1">
                    <p>03.</p>
                    <p>QUALITY</p>
                </div>
                <img src={ringR} alt="" />
            </div>
            <p>
                Crafted with meticulous precision, each ring is designed to meet the highest standards to make it a timelessly elegant ring.
            </p>
        </div>
    </section>
  )
}
