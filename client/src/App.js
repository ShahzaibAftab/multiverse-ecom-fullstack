import { ToastContainer, toast } from 'react-toastify';
import '../node_modules/react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/Header';
import Notfound from './components/Notfound';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Orderconfirmed from './pages/Orderconfirmed';
import AdminCanvas from './components/AdminCanvas';
import AdminProductList from './components/AdminProductList';
import Adminproductoperation from './pages/Adminproductoperation';
import Adminproductdetails from './pages/Adminproductdetails';

import Clientsignup from './pages/Clientsignup';
import Clientlogin from './pages/Clientlogin';
import Adminsignin from './pages/Adminsignin';
import Adminaddproduct from './pages/Adminaddproduct';
import PrivateRoutes from './components/PrivateRoutes';
import Customerorders from './pages/Customerorders';
import Customeraccounts from './pages/Customeraccounts';
import AdminProfile from './pages/AdminProfile';
import ShopPage from './pages/ShopPage';


export const BASEURL = 'http://localhost:5000'
function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/view-product' element={<Product />} />
          <Route path='/contact-us' element={<Header />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/order-confirmed' element={<Orderconfirmed />} />

          <Route path='/create-customer-account' element={<Clientsignup />} />
          <Route path='/customer-login' element={<Clientlogin />} />
          <Route path='/Admin-login' element={<Adminsignin />} />

          <Route element={<PrivateRoutes />}>
            <Route path='/Admin-Product-operation' element={<Adminproductdetails />} />
            <Route path='/Admin-Profile' element={<AdminProfile />} />
            <Route path='/add-Product' element={<Adminaddproduct />} />
            <Route path='/Customer-order' element={<Customerorders />} />
            <Route path='/product-return' element={<Adminproductdetails />} />
            <Route path='/customer-account-list' element={<Customeraccounts />} />
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
