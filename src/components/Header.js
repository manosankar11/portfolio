import React, { useState } from 'react';
import './Header.css'


const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='Responsive-mobile space-x-10'>

      <ul className='flex flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-end font-thin'>
        <h1 className='Topic'>RamShiva</h1>
        <li>
          <a href='#projects' className='mobile_display py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Projects
          </a>
        </li>
        <li>
          <a href='#contact' className='mobile_display py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Contact
          </a>
        </li>
        <li>
          <a href='#skill' className='mobile_display py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Skills
          </a>
        </li>
        <li>
          <a href='./Muruganandham.S__Resume.pdf' target='_blank' rel='noreferrer' className='mobile_display py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Resume
          </a>
        </li>
        {/* <div>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          HI
        </div>
        {isOpen && <Mobile setIsOpen={setIsOpen} isOpen={isOpen} /> }
        </div> */}
      </ul>
    </nav>
  );
};

export default Header;
