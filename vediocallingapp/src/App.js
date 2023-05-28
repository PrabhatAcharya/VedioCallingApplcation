import logo from './logo.svg';
import './App.css';
import{Routes,Route} from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import Roompage from './pages/room/Roompage';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/room/:roomId' element={<Roompage/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
