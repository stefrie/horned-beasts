import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class SelectedBeast extends React.Component {
    render() {
        return (
            <>
                <Modal
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.props.viewModal}
                >
                    <Modal.Header>
						<p>{this.props.singleModal.title}</p>
					</Modal.Header>
                    <Modal.Body>
                        <img
                            src={this.props.singleModal.image_url}
                            style={{ width: '400px' }}
                        ></img>
						<hr></hr>
                        <p>{this.props.singleModal.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default SelectedBeast;
