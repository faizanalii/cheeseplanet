import React,{Component} from 'react';
import Navbar from './header';
import billie from './Images/billie.jpg';
import pizzawall from './Images/pizzawall.jpg';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import {MDBCarouselItem,MDBCarouselInner,MDBCarousel} from 'mdbreact';
import GlitchClip from 'react-glitch-effect/core/Clip';
import GlitchText from 'react-glitch-effect/core/Text';
import './App.css';
import Gallary from './masonry';
class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <>
      <Navbar/>
      <div>
      <header>
       <MDBCarousel
      activeItem={1}
      length={3}
      showControls={false}
      showIndicators={true}
      className="z-depth-1"
    >
          <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
        <MDBView src={pizzawall}>
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <h1 className="border-bottom border-dark">CHEESE PLANET</h1>
              <h5>It will always stay visible on the top, even when you scroll down</h5>
              <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
              <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
            </MDBMask>
        </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
  
        <MDBView src={billie}>
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <h2>CHEESE PLANET</h2>
              <h5>It will always stay visible on the top, even when you scroll down</h5>
              <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
              <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
            </MDBMask>
        </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
        <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <h2>CHEESE PLANET</h2>
              <h5>It will always stay visible on the top, even when you scroll down</h5>
              <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
              <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
            </MDBMask>
        </MDBView>
        </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
        </header>

        <main>
          <h1>Best Pizza In Town</h1>
       <Gallary/>
       <h1>Test</h1>
        </main>
      </div>
      </>
      );
  }
}
export default App;