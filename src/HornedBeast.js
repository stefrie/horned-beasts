import React from 'react';
import './App.css';
// import SelectedBeast from './SelectedBeast';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
            vote: (this.state.vote += 1),
        });
    };

    render() {
        return (
            <Card style={{ width: '14rem' }} onClick={() => this.props.renderModal(this.props.index)}>
                <Card.Img
                    onClick={() => {
						this.props.selectBeast(this.props.index);
					}}
                    variant='top'
                    src={this.props.image_url}
                    alt='a horned beast'
                    rounded
                    fluid
                />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Button
                        variant='outline-danger'
                        size='sm'
                        onClick={this.handleClick}
                    >
                        Click to Favorite
                    </Button>
                    <Card.Text>💗{this.state.vote}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default HornedBeast;
