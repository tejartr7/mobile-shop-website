'use client';
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import '../globals.css';
import Image from "next/image";
import logo from '../images/logo.png'
const Header = () => {
  const [currPath, setCurrPath] = useState('');

  const isActive = (path) => currPath === path;

  const handleClick = (path) => {
    setCurrPath(path);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="font-Merriweather navbar-wrapper" >
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
          <Image src={logo} alt="logo" width={75} height={75} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav id="navitems" className="ms-auto">
            <Link href="/" className={isActive('/') ? 'link-active navlink' : 'link navlink'} onClick={() => handleClick('/')}>
              Home
            </Link>
            <Link href="/#about" className={isActive('/#about') ? 'link-active navlink' : 'link navlink'} onClick={() => handleClick('/#about')}>
              About
            </Link>
            <Link href="/#menu" className={isActive('/#menu') ? 'link-active navlink' : 'link navlink'} onClick={() => handleClick('/#menu')}>
              Menu
            </Link>
            <Link href="/#reviews" className={isActive('/#reviews') ? 'link-active navlink' : 'link navlink'} onClick={() => handleClick('/#reviews')}>
              Reviews
            </Link>
            <Link href="/#contact" className={isActive('/#contact') ? 'link-active navlink' : 'link navlink'} onClick={() => handleClick('/#contact')}>
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;