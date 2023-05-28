import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';

export default function TopBar() {
  return (
    <Navbar
      color="secondary"
      dark
    >
      <NavbarBrand href="/">
        Cybear Playlist App 
      </NavbarBrand>
      <NavbarBrand href="/library">Song Library
      </NavbarBrand>
    </Navbar>
  )
};


// <NavbarBrand href="/">
//   Cybear Playlist App
// </NavbarBrand>
