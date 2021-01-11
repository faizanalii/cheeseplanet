import React from 'react';
import Navbar from '../header';
import {MDBMask,MDBView,MDBContainer,  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import {SocialIcon} from 'react-social-icons';
class Contact extends React.Component{
	constructor(props){
		super(props);
		this.state={
			fname:'',
			lname:'',
			phoneno:'',
			email:'',
			subject:'',
			message:''
		}
	}
		sendmsg=(e)=>{
			e.preventDefault();
			alert("hello");
			console.log("state is", this.state);
		}
sociallinks=()=>
  {
    return(
      <div>
	        <SocialIcon  url='https://www.facebook.com/cheeseplanet.co'/><span>  </span>
            <SocialIcon  url='https://www.instagram.com/cheese_planet_co/'/><span> </span>
          </div>
        );
  }
	render(){
		return(
			<>
				<Navbar/>
	
		<MDBContainer className="my-5" style={{paddingTop:'50px'}}>
      <h2  className=" text-white h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <p className=" text-white text-center w-responsive mx-auto pb-5">
     	CHEESE PLANET, Best Pizza in Town!
      </p>
      <MDBRow >
        <MDBCol md="9" className="md-0 mb-5">
          <form onSubmit={this.sendmsg}>
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput required value={this.state.fname} name="fname" onChange={(e)=>this.setState({fname:e.target.value})} type="text" id="contact-name" label="First Name" />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput value={this.state.lname} name="lname" onChange={(e)=>this.setState({lname:e.target.value})} type="text" id="contact-name" label="Last Name" />
                </div>
              </MDBCol>
              </MDBRow>
              <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput value={this.state.email} name="email" onChange={(e)=>this.setState({email:e.target.value})}
                    type="email" validate error="wrong" success="right"
                    id="contact-email"
                    label="Your email"
                  />
                </div>
              </MDBCol>
              <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput required value={this.state.phoneno} name="phoneno" onChange={(e)=>this.setState({phoneno:e.target.value})}
                      type="tel" min="10" max="13" validate="wrong" success="right"
                      pattern="[0-9]{4}[0-9]{3}[0-9]{4}"
                      id="form-contact-phone"
                      label="Your phone"
                    />
                  </div>
                </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput value={this.state.subject} name="subject" onChange={(e)=>this.setState({subject:e.target.value})}
                  type="text" id="contact-subject" label="Subject" />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput required value={this.state.message} name="message" onChange={(e)=>this.setState({message:e.target.value})}
                    type="textarea"
                    id="contact-message"
                    label="Your message"
                  />
                </div>
              </MDBCol>
            </MDBRow>
          <div className="text-center text-md-left">
            <MDBBtn type="Submit" outline color="info" className="rounded-pill">
              Send
            </MDBBtn>
          </div>
          </form>
        </MDBCol>
        <MDBCol md="3" className="text-center">
          <ul className="list-unstyled mb-0">
            <li>
            <a href="https://www.google.com/maps/place/Cheese+Planet/@33.6520939,73.2264758,17z/data=!3m1!4b1!4m5!3m4!1s0x38dfe964728791cf:0xdffe8467292003c9!8m2!3d33.6520895!4d73.2286645"
            target="_blank">
              <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
              </a>
              <p className="text-white">Thanda Pani, Main Lehtrar Road, Islamabad</p>
            </li>
            <li>
            <a href="tel:+92 304 8141114" target="_blank">
              <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
              </a>
              <p className="text-white">+92 304 8141114/312 520094</p>
            </li>
            <li>
              <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
              <p className="text-white">contact@example.com</p>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>	
      <MDBRow>
      	<MDBCol md="12" className="d-flex justify-content-center">
	  		{this.sociallinks()}
	  	</MDBCol>	
      </MDBRow>
		</MDBContainer>

				</>
			);
	}
}
export default Contact;