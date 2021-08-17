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
      <Header title="The First Fifteen Lives of Harry August" />
      <Main message="Literary Fiction at Its Finest" />
      <Footer author="Claire North" />
    </div>
  );
}

export default App;
