import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Home from './Components/Home';
import Category from './Components/Category';
import SingleProduct from './Components/SingleProduct';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Newsletter from './Components/Newsletter';
import Context from './Utils/Context'; 
import AppContext from './Utils/Context';
import About from './Components/About';
import Contact from './Components/Contact';
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
       <AppContext>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/category/:id' element={<Category/>}/>
            <Route path='/product/:id' element={<SingleProduct />}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
          {/* <Newsletter/>
          <Footer/> */}
        </AppContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
