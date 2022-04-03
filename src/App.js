
import './App.css';
import { Routes, Route } from "react-router-dom";
import DashBoard from './Components/DashBoard/DashBoard';
import Home from './Components/Home/Home'
import Reviews from './Components/Reviews/Reviews'
import About from './Components/About/About'
import Blogs from './Components/Blogs/Blogs'
import NotFound from './Components/NotFound/NotFound'
import Header from './Components/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
