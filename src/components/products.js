import React,{Component} from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBIcon, MDBBtn} from
"mdbreact";

class CommercePage extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      size:'L',
      price:'900 Rs',
      quatity:1
    }
  }
  render(){
  return (
    <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce wide>
      <MDBCardImage cascade top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).jpg"
        waves />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle tag="h5">
          Pizza
        </MDBCardTitle>
        <MDBCardTitle>
          <strong>Chicken Tikka </strong>
        </MDBCardTitle>
        <MDBCardText>

        </MDBCardText>
        <MDBCardFooter>
          <span className="float-left">49$</span>
          <span className="float-right">
            <MDBTooltip placement="top">
              <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 mr-2 z-depth-0" >
                  <MDBIcon style={{color:"black"}} icon="shopping-cart"/>
              </MDBBtn>
              <div>Add to Cart</div>
            </MDBTooltip>
           
          </span>
        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
  );
}
}

export default CommercePage;