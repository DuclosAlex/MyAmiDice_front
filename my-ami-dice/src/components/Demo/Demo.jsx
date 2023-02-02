import React from 'react';

import './style.scss';
import logo from '../../assets/images/logoDice.jpg'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Demo() {

/* const features = [
    {
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos deserunt reiciendis, voluptate vero molestiae itaque vel dolorum, voluptatibus necessitatibus eum eos eaque earum tempore quidem eius laboriosam assumenda ut in.",
      image: logo
    },
    {
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos deserunt reiciendis, voluptate vero molestiae itaque vel dolorum, voluptatibus necessitatibus eum eos eaque earum tempore quidem eius laboriosam assumenda ut in.",
      image: logo
    },
    {
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos deserunt reiciendis, voluptate vero molestiae itaque vel dolorum, voluptatibus necessitatibus eum eos eaque earum tempore quidem eius laboriosam assumenda ut in.",
      image: logo
    }
  ]
 */

  return (
    <div className='home'>
      <Header />
        <div className='feature'>
          
              <div className='feature-container'>
                <div className='feature-container-text'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos deserunt reiciendis, voluptate vero molestiae itaque vel dolorum, voluptatibus necessitatibus eum eos eaque earum tempore quidem eius laboriosam assumenda ut in.
                </div>
                <img className='feature-container-image' src={logo} alt="logo-MyAmiDice" />
              </div>
          
            <div className='feature-container'>
              <img className='feature-container-image' src={logo} alt="logo-MyAmiDice" />
              <div className='feature-container-text'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos deserunt reiciendis, voluptate vero molestiae itaque vel dolorum, voluptatibus necessitatibus eum eos eaque earum tempore quidem eius laboriosam assumenda ut in.
              </div>
            </div>
            
            <div className='feature-container'>
              <div className='feature-container-text'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos deserunt reiciendis, voluptate vero molestiae itaque vel dolorum, voluptatibus necessitatibus eum eos eaque earum tempore quidem eius laboriosam assumenda ut in.
              </div>
              <img className='feature-container-image' src={logo} alt="logo-MyAmiDice" />
            </div>

            <div className='feature-container'>
              <img className='feature-container-image' src={logo} alt="logo-MyAmiDice" />
              <div className='feature-container-text'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos deserunt reiciendis, voluptate vero molestiae itaque vel dolorum, voluptatibus necessitatibus eum eos eaque earum tempore quidem eius laboriosam assumenda ut in.
              </div>
            </div>

        </div>
      <Footer />
    </div>
  )
}

export default Demo