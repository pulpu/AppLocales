import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import UploadTranslations from './pages/UploadTranslations';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Route exact path="/upload-translations" component={UploadTranslations}/>
      </Router>
    );
  }
}

export default App;
