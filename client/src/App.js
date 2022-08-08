import {Routes, Route} from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">

      <Header/>

      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/details/:productId' element={<Details/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
