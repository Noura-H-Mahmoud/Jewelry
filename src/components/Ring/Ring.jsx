import React from 'react'
import './Ring.css'
import RingIcon from '../../assets/images/RingIcon.svg'

export default function Ring() {
    return (
        <section className='Ring'>
            <img src={RingIcon} alt="Ring Icon" />
            <p>
                A testament to timeless elegance. This ring is set in 18k pure gold
                and boasts a brilliant cut diamond encircled by a constellation of smaller, shimmering stones. Perfect for adding a luxurious touch
                to any outfit or occasion, it's more than just a ring.
            </p>
        </section>
    )
}
