
// --------------Lab 02------------//
// import { Component } from 'react';
// import beastImages from './data.json';
// import './App.css';
// import Image from 'react-bootstrap/Image'

function Main() {
    return (
        <div>
            <HornedBeast
				title="Jackson's Chameleon"
				imageUrl="https://kids.sandiegozoowildlifealliance.org/sites/default/files/2018-10/animal-hero-jackson_0.jpg"
				description="Three-horned Chameleon native to East Africa, also found in Hawaii, Florida, and California" />
            <HornedBeast
				title="Impala"
				imageUrl="http://www.storytrender.com/wp-content/uploads/2019/03/20_CATERS_MELTED_IMPALA_01-1024x683.jpg"
				description="Deformed horns found on a male impala in Africa" />
        </div>
    );
}

function HornedBeast(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.imageUrl} alt="" title=""></img>
            <p>{props.description}</p>
        </div>
    );
}

// --------------Lab 02------------//
// class Main extends Component {
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

export default Main;
