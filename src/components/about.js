import React from 'react';
import Navbar from '../header';
class About extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<>
				<Navbar/>
				<div className="my-5">
				<h1 style={{color:'white'}}>Hello</h1>
				</div>
				</>
			);
	}
}
export default About;