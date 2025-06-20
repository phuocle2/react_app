import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import MainPage from './components/MainPage';
import Greeting from './components/Greeting';

// CSS Style
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/profile' element={<MainPage />} />
          <Route path='/greeting' element={<Greeting />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

