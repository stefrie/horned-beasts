import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import beastImages from './data.json';
// import SelectedBeast from './SelectedBeast';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beastImages: beastImages,
        };
    }

    handleSelectedBeast() {
        alert('Coming Soon: BEAST MODAL!');
    }

    render() {
        return (
            <>
                <Header title="Horned Beasts" />
                <Main
                    beastImages={this.state.beastImages}
                    selectedBeast={this.handleSelectedBeast}
                />
                <Footer author="Stefanie Riehle" />
                {/* <SelectedBeast /> */}
            </>
        );
    }
}

export default App;
