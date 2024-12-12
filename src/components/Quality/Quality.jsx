import './Quality.css'
import ringW from '../../assets/images/tall.jpg'
import ringH from '../../assets/images/wommen.png'
import ringR from '../../assets/images/ringNM.png'
import { useEffect } from 'react'
import Aos from 'aos'

export default function Quality() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        })
    }, []);

    return (
        <section className='Quality'>
            <div className="side1">
                <img className='img1'
                    src={ringW} alt="The ring on the bride's hand"
                    data-aos="fade-right" />
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
                    <img src={ringH}
                        alt="The ring is on the finger"
                        data-aos="fade-left" />
                </div>
                <div className="item">
                    <div className="para1">
                        <p>03.</p>
                        <p>QUALITY</p>
                    </div>
                    <img src={ringR}
                        alt="The gemstone of the ring is magnified"
                        data-aos="fade-left" />
                </div>
                <p>
                    Crafted with meticulous precision, each ring is designed to meet the highest standards to make it a timelessly elegant ring.
                </p>
            </div>
        </section>
    )
}
