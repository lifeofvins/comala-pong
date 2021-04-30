import './App.css';
import CPheader from "./components/CPheader"
import CPform from "./components/CPform"
import CPlist from "./components/CPlist"
import Container from "react-bootstrap/Container"

function App() {
  return (
    <>
      <CPheader />
      <Container fluid>
        <CPform />
        <CPlist />
      </Container>
    </>
  );
}

export default App;
