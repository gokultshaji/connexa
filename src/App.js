import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import View from './pages/Singleview'

function App() {
  return (
    <div className="App">
      <Header></Header>
<Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/view/:name' element={<View></View>}></Route>
  
</Routes>    
<Footer></Footer>

    </div>
  );
}

export default App;
