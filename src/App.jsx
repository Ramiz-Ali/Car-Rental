import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Homepage/home'
import Login from './components/Login/login';
import Signin from './components/SignIn/signin';
import Forget from './components/Forget/forget';
import Otp from './components/Otp/otp';
import Createnew from './components/Createnew/createnew';
import Vehicle from './pages/Vehicle/vehicle';  
import Rent from './pages/Rent/rent';
import Myprofile from './pages/Myprofile/myprofile';
import Favourite from './pages/Favourite/favourite';
import Contact from './pages/Contact/contact';
import History from './pages/History/history';
import Payment from './pages/Payment/payment';
function App() {
  

  return (
    <>
      <div className='app'>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/createnew" element={<Createnew />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/myprofile" element={<Myprofile />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/payment' element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
       </div>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App
