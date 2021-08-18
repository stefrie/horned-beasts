import React from 'react';
import './App.css';

class HornedBeast extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            vote: 0,
			title: this.props.title,
        };
    }

	handleClick = () => {
		this.setState({
			vote: this.state.vote += 1,
		});
    }

	render() {
		console.log(this.state);
		return(
			<div onClick={this.handleClick}>
				<h2>{this.props.title}</h2>
				<img src={this.props.image_url} alt="" title="" />
				<p>{this.props.description}</p>
				<p>💗: {this.state.vote}</p>
			</div>
		);
	}
}

export default HornedBeast;
