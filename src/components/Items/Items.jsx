import { useEffect } from 'react'
import './Items.css'
import Earrings from '../../assets/images/earrings.jpg'
import Necklace from '../../assets/images/Necklace.jpg'
import Bracelet from '../../assets/images/bracelet.jpg'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Aos from 'aos'

export default function Items() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, []);
  const items = [
    {
      id: 1,
      img: Earrings,
      alt: 'Diamond Earrings',
      head: 'Morning Sun',
      title: 'Diamond Earrings',
      price: '$1500'
    },
    {
      id: 2,
      img: Necklace,
      alt: 'Necklace',
      head: 'Hearty Sunshine',
      title: 'Pendant Necklace',
      price: '$3000'
    },
    {
      id: 3,
      img: Bracelet,
      alt: 'Golden Bracelet',
      head: 'Sunrise Embellishment',
      title: 'Golden Bracelet',
      price: '$2800'
    },
  ]
  return (
    <section className='Items'>
      {
        items.map(item => (
          <div key={item.id} className='Item'
            data-aos={item.id === 1 ? 'fade-right'
              : item.id === 2 ? 'fade-up'
                : item.id === 3 ? "fade-left" : ''}>
            <Zoom>
              <img src={item.img} alt={item.alt} />
            </Zoom>
            <h6>{item.head}</h6>
            <h6>{item.title}</h6>
            <p>{item.price}</p>
          </div>
        ))
      }
    </section>
  )
}
