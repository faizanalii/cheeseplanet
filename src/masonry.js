import React from "react";
import "./App.css";
import billie from './Images/billie.jpg';
import Masonry from "react-masonry-component";
import pizzawall from './Images/pizzawall.jpg';
import baker from './Images/baker.jpg';
import beef from './Images/beef.jpg';
import fries from './Images/fries.jpg';
import beef_burger from './Images/beef_burger.jpg';
import coffee from './Images/coffee.jpg';
import smokingpizza from './Images/smokingpizza.jpg';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
let brakePoints = [300, 500,750];
let elements = [];
const imgId = [1014, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643];
for (let i = 0; i < imgId.length; i++) {
  const ih = 400 + Math.floor(Math.random() * 10) * 15;
  const iw=500 + Math.floor(Math.random() * 10) * 15
  elements.push("https://unsplash.it/400/" + ih + "?image=" + imgId[i]);
}
  let rand=[400];
const withs={
  width:rand[Math.floor(Math.random()*rand.length)] + Math.floor(Math.random() * 10) * 15+'px',
  height:rand[Math.floor(Math.random()*rand.length)] + Math.floor(Math.random() * 10) * 15+'px',
  };


class Gallery extends React.Component {
  render() {
    const childElements = elements.map(function (element) {
      return (
        <>
        <div className="test1">
          <img className="image-element-class" src={element} />
          <h1 style={{color:"white"}}>Hello</h1>
        </div>
      </>
      );
    });

    return (
      <>
      <div className="test1">
      <MDBRow>
      <MDBCol md="8">
      <MDBRow>
      <MDBCol md="6">
        <img className="image-element-class"  src={baker}/>
        </MDBCol>
        <MDBCol md="6">
        <img className="image-element-class"  src={smokingpizza} />
        </MDBCol>
        </MDBRow>
      </MDBCol>

      <MDBCol md="4">
        <img className="image-element-class"  src={coffee}/>
      </MDBCol>
      </MDBRow>
         <MDBRow>

      <MDBCol md="3">
        <img className="image-element-class"  src={fries}/>
      </MDBCol>
      <MDBCol md="9">
      <MDBRow>
      <MDBCol md="7">
        <img className="image-element-class"  src={beef_burger}/>
        </MDBCol>
        <MDBCol md="5">
        <img className="image-element-class"  src={beef} />
        </MDBCol>
        </MDBRow>
      </MDBCol>
      </MDBRow>
      <MDBRow>
      <MDBCol md="">
      </MDBCol>
      <MDBCol md="7">
        <img className="image-element-class"  src={billie} />
      </MDBCol>
      </MDBRow>
      </div>
      </>
    );
  }
}

export default Gallery;
