import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import beastImages from './data.json';
import SelectedBeast from './SelectedBeast';
import { Button } from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			viewModal: false,
			selectedBeast: beastImages[0],
        };
		this.selectBeast = this.selectBeast.bind(this);
    }

    // handleSelectedBeast() {
    //     alert('Coming Soon: BEAST MODAL!');
    // }
	renderModal() {
		let currentState = this.state.viewModal;
		this.setState({
			viewModal: !currentState
		});
		// alert(this.state.selectedBeast);
	}

	selectBeast(index) {
		this.setState({
			selectedBeast: beastImages[index]
		});
	}

	unselectBeast() {
		this.setState({
			selectedBeast: undefined
		});
	}	

    render() {
		return (
			<>
				<Button onClick={this.renderModal}>Click</Button>
				<SelectedBeast viewModal={this.state.viewModal} />
				<Header title="Horned Beasts" />
                <Main
                    beastImages={beastImages}
                    selectBeast={this.selectBeast}
                />
				{this.state.selectedBeast === undefined ? null : <SelectedBeast onHide={this.unselectBeast} />}
                <Footer author="Stefanie Riehle" />
                {/* <SelectedBeast /> */}
			</>
		);
    }
}

export default App;
