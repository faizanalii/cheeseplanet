import React from 'react';
import Navbar from '../header';
import billie from '../Images/billie.jpg';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import {additem,delitem} from '../actions';
import {connect} from 'react-redux';
import CommercePage from './products';
class Menu extends React.Component{
	constructor(props){
		super(props);
		this.state={
			item:''
		};
	}
	additem=()=>{
		console.log("Add Items Clicked from Menu",this.state.item);
		if(this.state.item.length>=1){
		this.props.additem(this.state.item);
		}
		else{
			alert("You Should Add Item");
		}
	}
	delitem=(id)=>{
		console.log("Del Item clicked from Menu",id);
		this.props.delitem(id);
	}
	showitems=()=>{
		const {itemscart}=this.props;
		console.log("Props are",this.props);
		if(itemscart.length>0){
		return(
			<ul style={{color:'white'}}>
				{itemscart.map(item=>
					{return(
							<li key={item.id}>
							<h1>{item.item}</h1>
							<button onClick={()=>this.delitem(item.id)} type="button" class="btn btn-info">-</button>
							</li>
						)})
				}
			</ul>
			);
		}
		else {
			console.log("Item Cart is Empty");
		}
	}
	render(){
		return(
			<>
				<Navbar/>
				<div className="my-5">
				<h1 style={{color:'white'}}>Hello</h1>
				<input onChange={event=>this.setState({item:event.target.value})}/>
				<button onClick={()=>this.additem()} type="button" class="btn btn-dark">Add</button>
				{this.showitems()}
				<CommercePage/>
				</div>
				</>
			);
	}
}
function mapStateToProps(state){
	return {
		itemscart:state
	}
}
export default connect(mapStateToProps,{additem,delitem})(Menu);