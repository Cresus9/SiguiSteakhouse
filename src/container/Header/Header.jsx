import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components'

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper-info'>
      <SubHeading title="chase the new flavour" />
      <h1 className='app__header-h1'>The key to Fine Dinning</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sequi accusamus dolorum, maiores modi praesentium. Amet dolores iure cupiditate assumenda! </p>
      <button type='button' className='custome__button'>Expolre Menu</button>

    </div>
    <div className='app__wrapper-img'>
      <img src={images.welcome} alt='header img'/>

    </div>
  </div>
);

export default Header;
