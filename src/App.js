import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Page from './home/Page';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
<Header/>
      <Routes>
        <Route path='/' element={<Page />}>
        </Route>
        <Route path='/contact' element={<Contact />}>
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
