import React from 'react';
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
  </Navbar>
  )
}