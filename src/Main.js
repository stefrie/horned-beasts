import React from 'react';
import HornedBeast from './HornedBeast';

// --------------Lab 02------------//
// import './App.css';
// import Image from 'react-bootstrap/Image';

class Main extends React.Component {
	render() {
		return (
			<>
				{
					this.props.beastImages.map((beast, idx)=>(
						<HornedBeast
							title={beast.title}
							image_url={beast.image_url}
							description={beast.description}
							key={idx}
							index={idx}
						/>
					))
				}
			</>
		);
	}
}

export default Main;
