import React from 'react';
import Navbar from '../header';
import billie from '../Images/billie.jpg';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';

class Menu extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<>
				<Navbar/>
				<header>
		        <MDBView src={billie}>
		            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
		              <h2>CHEESE PLANET</h2>
		              <h5>It will always stay visible on the top, even when you scroll down</h5>
		              <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
		              <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
		            </MDBMask>
		          </MDBView>
    			</header>
				</>
			);
	}
}
export default Menu;