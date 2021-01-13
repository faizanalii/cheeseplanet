import React,{Component} from 'react';
import Navbar from './header';
import billie from './Images/billie.jpg';
import pizzawall from './Images/pizzawall.jpg';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import {MDBCarouselItem,MDBCarouselInner,MDBCarousel} from 'mdbreact';
import GlitchClip from 'react-glitch-effect/core/Clip';
import GlitchText from 'react-glitch-effect/core/Text';
import paratha from './Images/paratha.jpg';
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
              <h1 >CHEESE PLANET</h1>
              <br/>
              <h5>THE CHEESIEST PIZZA IN TOWN</h5>
              
            </MDBMask>
        </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
  
        <MDBView src={billie}>
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <h1>CHEESE PLANET</h1>
              <br/>
              <h5>It will always stay visible on the top, even when you scroll down</h5>
              
            </MDBMask>
        </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
        <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <h1>CHEESE PLANET</h1>
              <br/>
              <h5>It will always stay visible on the top, even when you scroll down</h5>
              
            </MDBMask>
        </MDBView>
        </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
        </header>
        <br/>
        <main>
        <section>
          <div className='text-center'>
            <h1>Listen to your tongue....</h1>
          </div>   
          <Gallary/>
        </section>
        </main>
      </div>
      </>
      );
  }
}
export default App;