import React from 'react'
import './Footer.css'
import GEMGLOWLogo from '../../assets/images/GEMGLOW1.svg'

export default function Footer() {
    return (
        <footer>
            <img src={GEMGLOWLogo} alt="Logo" />
            <p className='address'>
                123 Main Street | (+123)456-7890 | support@gemglow.com
            </p>
            <p className='date'>
                Monday to Saturday (09:00 AM - 06:00 PM)
            </p>
            <div className="icons">
                <div className="tw">
                     <a href='#' target='_blank'>tw</a >   
                </div>
                <div className="fb">
                    <a href='#' target='_blank'>fb</a >
                </div>
                <div className="ig">
                    <a href='#' target='_blank'>ig</a >
                </div>
            </div>
        </footer>
    )
}
