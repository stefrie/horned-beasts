import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import beastImages from './data.json';
import SelectedBeast from './SelectedBeast';
import Horns from './Horns';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewModal: false,
            selectedBeast: beastImages[0],
        };
    }

	formHandler = () => {
		alert(event.target.value);
	}

    renderModal = (index) => {
        let currentState = this.state.viewModal;
		console.log('hi', index);
		if (typeof index !== 'number') {
			this.setState({
				viewModal: !currentState,
			});
		} else {this.setState({
            viewModal: !currentState,
			selectedBeast: beastImages[index],
        });
	}}

    selectBeast = (index) => {
        this.setState({
            selectedBeast: beastImages[index],
        });
    }

    unselectBeast = () => {
        this.setState({
            selectedBeast: undefined,
        });
    }

    render() {
        return (
            <>
                <SelectedBeast viewModal={this.state.viewModal} closeModal={this.renderModal} singleModal={this.state.selectedBeast} />
                <Header title="Horned Beasts" />
				<Horns formHandler={this.formHandler} />
                <Main
                    beastImages={beastImages}
                    selectBeast={this.selectBeast}
					renderModal={this.renderModal}
                />
                {/* {this.state.selectedBeast === undefined ? null : (
                    <SelectedBeast onHide={this.unselectBeast} />
                )} */}
                <Footer author="Stefanie Riehle" />
                {/* <SelectedBeast /> */}
            </>
        );
    }
}

export default App;
