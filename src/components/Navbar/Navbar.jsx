
import { useState } from "react"
import  { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"
import { useNavigate } from "react-router-dom"

import images from "../../constants/images"

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, SetToggleMenu] =useState(false)

  // const navigate = useNavigate()
  return(
 <nav className='app__navbar'>
  <div className='app__navbar-logo'>
    <img src={images.gericht} alt='app logo' />
  </div>
  <ul className='app__navbar-links'>
    <li className='p__opensans'><a href='#home'>Home</a></li>
    <li className='p__opensans'><a href='#about'>About</a></li>
    <li className='p__opensans'><a href='#menu'>Menu</a></li>
    <li className='p__opensans'><a href='#awards'>Awards</a></li>
    <li className='p__opensans'><a href='#contact'>Contact</a></li>
  </ul>
  <div className='app__navbar-login'>
    {/* <a href='#login' className='p__opensans'>Log In / Register</a> */}
    {/* <div/> */}
    <a href='/' className='p__opensans'>Book A Table</a>
  </div>
  <div className='app__navbar-smallscreen'>
    <GiHamburgerMenu color='#fff' fontSize={27} onClick={() =>SetToggleMenu(true)}/>
    {toggleMenu && (
    <div className='app__navbar-smallscreen_overlay flex__center slide__bottom'>
      <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>SetToggleMenu(false)} />
      <ul className='app__navbar-smallscreen-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#menu'>Menu</a></li>
        <li className='p__opensans'><a href='#awards'>Awards</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
       </ul>
    </div>
    )}
  </div>
 </nav>
);
}

export default Navbar;
