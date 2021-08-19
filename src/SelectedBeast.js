// import React from "react";
// import { Modal } from "react-bootstrap";

// class SelectedBeast extends React.Component {

// }

// function BeastModal(props) {
// 	return (
// 		<Modal
// 			{...props}
// 			size="lg"
// 			aria-labelledby="contained-modal-title-vcenter"
// 			centered
// 		>
// 			<Modal.Header closeButton>
// 				<Modal.Image id="contained-modal-title-vcenter">
// 					{this.props.image_url}
// 				</Modal.Image>
// 			</Modal.Header>
// 			<Modal.Body>{this.props.description}</Modal.Body>
// 			<Modal.Footer>
// 				<Button onClick={props.onHide}>Close</Button>
// 			</Modal.Footer>
// 		</Modal>
// 	);
// }

// function App() {
// 	const [modalShow, setModalShow] = React.useState(false);

// 	return (
// 		<>
// 			<Button variant="primary" onClick={() => setModalShow(true)}>
// 			Launch vertically centered modal
// 			</Button>
	
// 			<MyVerticallyCenteredModal
// 			show={modalShow}
// 			onHide={() => setModalShow(false)}
// 			/>
// 		</>
// 	);
// }

// render(<App />);

// export default SelectedBeast;
