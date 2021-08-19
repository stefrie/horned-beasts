import React from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// --------------Lab 02------------//
// import './App.css';
// import Image from 'react-bootstrap/Image';

class Main extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row xs={1} md={2} lg={4} xl={6} xxl={8} className="g-4">
                    {this.props.beastImages.map((beast, idx) => (
                        <Col>
                            <HornedBeast
								selectedBeast={this.props.selectedBeast}
                                title={beast.title}
                                image_url={beast.image_url}
                                description={beast.description}
                                key={idx}
                                index={idx}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Main;
