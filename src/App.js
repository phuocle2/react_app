import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
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
    </div>
  );
}

export default App;
