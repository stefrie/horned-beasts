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

export default App;
