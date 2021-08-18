import React from 'react';

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


// --------------Lab 01------------//
// function Main() {
//     return (
//         <div>
//             <HornedBeast
// 				title="Jackson's Chameleon"
// 				imageUrl="https://kids.sandiegozoowildlifealliance.org/sites/default/files/2018-10/animal-hero-jackson_0.jpg"
// 				description="Three-horned Chameleon native to East Africa, also found in Hawaii, Florida, and California" />
//             <HornedBeast
// 				title="Impala"
// 				imageUrl="http://www.storytrender.com/wp-content/uploads/2019/03/20_CATERS_MELTED_IMPALA_01-1024x683.jpg"
// 				description="Deformed horns found on a male impala in Africa" />
//         </div>
//     );
// }

// --------------Lab 02------------//
// class Main extends React.Component {
//     render() {
//         return (<h1>hello</h1>
//             <Container>
//                 <h1>Message here: {this.props.message}</h1>
//                 <Row>
//                     <Col>
//                         <BeastImage image_url={beastImages[0].image_url} />
//                     </Col>
//                     <Col>
//                         <BeastImage image_url={beastImages[1].image_url} />
//                     </Col>
//                     <Col>
//                         <BeastImage image_url={beastImages[1].image_url} />
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <BeastImage image_url={beastImages[2].image_url} />
//                     </Col>
//                     <Col>
//                         <BeastImage image_url={beastImages[3].image_url} />
//                     </Col>
//                     <Col>
//                         <BeastImage image_url={beastImages[1].image_url} />
//                     </Col>
//                 </Row>
//             </Container>
//         );
//     }
// }

// class BeastImage extends Component {

//     constructor(props) {
//         super(constructor);
//         this.state = {
//             "status": "Yay"
//         }
//     }

//     handleClick = () => {
//         const newStatus = this.state.status === "Nay" ? "Yay" : "Nay";
//         this.setState({
//             status: newStatus
//         })
//     }

//     render() {
//         return (
//             <div onClick={handleClick}>
//                 <Image src={this.props.image_url} alt="some horned beast" rounded fluid />
//                 <p>{this.state.status}</p>
//             </div>
//         );
//     }

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

export default Main;
