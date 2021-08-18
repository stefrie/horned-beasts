// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import beastImages from './data.json';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			beastImages: beastImages,
		};
	}
	render(){
		return (
			<>
				<Header title="Horned Beasts" />
				<Header message="Check out these amazing animals!" />
				<Main />
				<Footer author="Stefanie Riehle" />
			</>
		);
	}
}

export default App;
