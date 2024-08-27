import React from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';


const Header = () => {
  return (
        <nav className='py-10 mb-12 flex justify-between'>
            <h1>Developed by Kabir</h1>
            <ul>
                <li><BsFillMoonStarsFill /></li>
                <li><a href="#">Resume</a></li>
            </ul>
        </nav>
  )
}

export default Header