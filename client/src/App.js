import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from "./Component/LandingPage/LandingPage.jsx";

function App() {

  return (
      <div className="App">
        <Router>
          <Route path='/' element={<LandingPage />} />
        </Router>
      </div>

  );
}

export default App;
