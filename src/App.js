import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css'; // needed for google font import
import { createGlobalStyle } from 'styled-components';

import Header from './components/Header'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import Footer from './components/Footer'

/* Styles */
const GlobalStyle = createGlobalStyle`
  :root {font-family: 'Poppins', sans-serif;}
  body {
    margin: 0;
    padding: 0;
    color: white;
    background-color: black;
  }
  img {
    filter: contrast(180%) saturate(6);
  }
`
/* Styles END */

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Header />

      <Switch>
        <Route exact path="react-test-site/">
          <Home />
        </Route>
        <Route path="react-test-site/about">
          <About />
        </Route>
        <Route path="react-test-site/contact">
          <Contact />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
