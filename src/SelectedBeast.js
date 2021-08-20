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
                <Modal.Header closeButton>
                    <Modal.Image id="contained-modal-title-vcenter">
						{this.props.image_url}
					</Modal.Image>
                </Modal.Header>
                <Modal.Body>
                    {this.props.description}
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
