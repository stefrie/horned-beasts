// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'


function App() {
	return (
		<div>
			<Header title="Horned Beasts" />
			<Header message="Check out these amazing animals!" />
			<Main />
			<Footer author="Stefanie Riehle" />
		</div>
	);
}

export default App;
