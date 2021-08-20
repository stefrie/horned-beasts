import React from 'react';
import { Form } from 'react-bootstrap';

class Horns extends React.Component {
	render() {
		return (
			<Form onChange={this.props.formHandler} style={{ width: '25%' }}>
				<Form.Select aria-label="Default select example">
					<option>Select the number of horns</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="100">100</option>
				</Form.Select>
			</Form>
		);
	}
}

export default Horns;
