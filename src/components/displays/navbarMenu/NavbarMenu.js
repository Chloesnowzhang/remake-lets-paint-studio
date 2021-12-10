import React, { useState } from 'react';
import DropdownMenu from './dropdownMenu/DropdownMenu';
import Navbar from './navbar/Navbar';

const NavbarMenu = ({ setClose }) => {
  const [extended, setExtended] = useState(false);

  return (
    <div>
      <Navbar
        extended={extended}
        setExtended={setExtended}
        setClose={setClose}
      />
      <DropdownMenu extended={extended} />
    </div>
  );
};

export default NavbarMenu;
