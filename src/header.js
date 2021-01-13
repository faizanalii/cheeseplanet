import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import logo from './Images/logo.png';
import Menu from './components/menu';
import Contact from './components/contact';
import About from './components/about';
import './App.css';
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <>        
            <MDBNavbar overlay="purple-light" color="black" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <img src={logo} height="30" class="d-inline-block align-top" alt="Cheese Planet logo"/>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav >
                  <MDBNavItem >
                    <MDBNavLink to="/about">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/menu">Menu </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/contact">Contact Us</MDBNavLink>
                  </MDBNavItem>
                  
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
        </>
    );
  }
}

export default Navbar;