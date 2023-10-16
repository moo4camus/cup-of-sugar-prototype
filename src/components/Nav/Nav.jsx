import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { NavVisibilityContext } from './NavVisibilityContext';
import './Nav.css';
import { useSelector } from 'react-redux';
import { useState } from 'react'
import BottomNavBar from './BottomNavBar/BottomNavBar';
import TopNavBar from './TopNavBar/TopNavBar';



function Nav() {
  const user = useSelector((store) => store.user);
  const [value, setValue] = useState(0);
  const { isNavVisible } = useContext(NavVisibilityContext);

  if (!isNavVisible) {
    return null;
  }

  return (

    <div className="nav">
      <div>
        {/* If a user is logged in, show these links */}
        {user.id && (
          <div className='loginNav'>

            <TopNavBar />
            <div>

            </div>

            <BottomNavBar id='bottomNav' value={value} setValue={setValue} />

          </div>
        )}
      </div>
    </div>
  );
};


export default Nav;