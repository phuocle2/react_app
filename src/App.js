import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import MainPage from './components/MainPage';

// CSS Style
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/profile' element={<MainPage />} />
        </Routes>
      </Router>
      Hello World
    </div>
  );
}

export default App;
