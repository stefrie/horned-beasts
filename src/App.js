import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import beastImages from './data.json';

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
				<Main beastImages={this.state.beastImages} />
				<Footer author="Stefanie Riehle" />
			</>
		);
	}
}

/*
1. Send a function into your Main component that allows the user to update state in the App

2. Create a SelectedBeast component and include it in your App

3. Use the state in the App to render an individual beast in a Modal in the SelectedBeast component using React Boothstrap
*/


export default App;
