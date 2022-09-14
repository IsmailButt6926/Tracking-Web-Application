import './App.css';

import {
  BrowserRouter,
  
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Maincomponent from './components/Maincomponent';
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Maincomponent/>
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;

