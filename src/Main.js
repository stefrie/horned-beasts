
// --------------Lab 02------------//
// import { Component } from 'react';
// import beastImages from './data.json';
// import './App.css';
// import Image from 'react-bootstrap/Image'


function Main() {
    return (
        <>
            <h1>Coming Soon</h1>
            {/* <h1>{props.title}</h1>
            <h2>{props.imageUrl}</h2>
            <h2>{props.description}</h2> */}
        </>
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
