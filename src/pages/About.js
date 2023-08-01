import React from 'react'
import MultiplePizzas from '../assets/multiplespices.jpg'
import "../styles/About.css"
function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${MultiplePizzas})`}}></div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>At our company, we are passionate about bringing the rich flavors of India to kitchens all over the world. Our selection of Indian spices is carefully curated to ensure
             that each spice is of the highest quality and 
             authenticity. We believe that cooking with our spices
             is a journey of discovery, allowing you to experience 
             the unique tastes and aromas that have made Indian
              cuisine so beloved. From the warm and comforting notes of cinnamon to the fiery heat of red chili powder, our spices are sure to add depth and complexity to any dish. We are dedicated to sharing the
               magic of Indian spices with you and invite you to 
               join us on this flavorful adventure.</p>
      </div>
    </div>
  )
}

export default About
 