import React from 'react';
import './App.css';

class HornedBeast extends React.Component {
	render() {
		return(
			<>
				<h2>{this.props.title}</h2>
				<img src={this.props.image_url} alt="" title="" />
				<p>{this.props.description}</p>
			</>
		);
	}
}


// class BeastImage extends Component {
//     constructor(props) {
//         super(constructor);
//         this.state = {
//             "vote": "addVote"
//         }
//     }

//     handleClick = () => {
//         const newHeart = this.state.heart === "like" ? "Yay" : "Nay";
//         this.setState({
//             heart: newHeart
//         })
//     }

//     render() {
//         return (
//             <div onClick={handleClick}>
//                 <Image src={this.props.image_url} alt="some horned beast" rounded fluid />
//                 <p>{this.state.heart}</p>
//             </div>
//         );
//     }

export default HornedBeast;

// --------------Lab 03------------//
