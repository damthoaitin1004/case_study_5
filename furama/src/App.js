import logo from './logo.svg';
import './App.css';
import ListService from './component/fancility/ListService';
import Footer from './component/fancility/Footer';
import Headers from './component/fancility/Header';
import ListCustomer from './component/customer/ListCustomer';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import ListContract from './component/contract/ListContract';
import CreateService from './component/fancility/CreateService';
import EditService from './component/fancility/EditService';
import CreateCustomer from './component/customer/CreateCustomer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import EditCustomer from './component/customer/EditCustomer';


function App() {
  return (
    <> <Headers />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<ListService />} />
        <Route path='/customer' element={<ListCustomer />} />
        <Route path='/contract' element={<ListContract />} />
        <Route path='/customer/create' element={<CreateCustomer />} />
        <Route path='/customer/edit/:id' element={<EditCustomer />} />
        <Route path="/fancility/create" element={<CreateService />} />
        <Route path="/fancility/edit/:id" element={<EditService />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
