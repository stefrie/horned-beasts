import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class SelectedBeast extends React.Component {
    render() {
        return (
			<>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
				show={this.props.viewModal}
            >
                <Modal.Header>Title?
                </Modal.Header>
                <Modal.Body>
					<img src={this.props.image_url} style={{ width: '75%' }}></img>
                    <p>{this.props.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
			</>
        );
    }
}

export default SelectedBeast;
