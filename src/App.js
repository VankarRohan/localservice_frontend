// import logo from './logo.svg';
import './App.css';
import ServiceList from './components/serviceprovider/ServiceList';
import ServiceProviderDashboard from './components/serviceprovider/ServiceProviderDashboard';
import AddService from './components/serviceprovider/AddService';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Sign_in from './components/pages/Sign_in';
import BookService from './components/user/BookService';
import MyBookings from './components/user/MyBookings';
import { ProtectedRoutes } from './hooks/ProtectedRoutes';
import PaymentBooking from './components/user/PaymentBooking';
import UserDashboard from './components/user/UserDashboard';
import DetailBookService from './components/user/DetailBookService';
import RegistrationForm from './components/pages/RegistrationForm';
import DetailService from './components/serviceprovider/DetailService';
import UpdateService from './components/serviceprovider/UpdateService';
import Profile from './components/pages/Profile';
import UserProfile from './components/user/UserProfile';
import ForgotPassword from './components/pages/ForgotPassword';
import ResetPassword from './components/pages/ResetPassword';
import Address from './components/user/Address';
import PaymentDemo from './components/user/PaymentDemo';
import UpdateAddress from './components/user/UpdateAddress';
import { About } from './components/pages/About';
import DetailBooking from './components/user/DetailBooking';
import axios from 'axios';


function App() {

  axios.defaults.baseURL = "https://localservice-backend-1.onrender.com"
  const path = window.location.pathname;
  console.log(path)

  return (
    <body className="g-sidenav-show bg-gray-100">




      {path === "/" ||

        path === "/sign-in" ||

        path === "" ||

        path === "/register" ||

        path === "/serviceprovider/sign-in" ||

        path === "/user/sign-in"

        ? null : <aside
          className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
          id="sidenav-main"
        >
          {path === "/" ||

            path === "/sign-in" ||

            path === "" ||

            path === "/serviceprovider/sign-in" ||

            path === "/user/sign-in"

            ? null :
            < SideBar />}
        </aside>
      }


      <main className="main-content border-radius-lg ps" >
        <div>
          <Routes >


            <Route path="/" element={<About></About>}></Route>
            <Route path="/sign-in" element={<Sign_in></Sign_in>}></Route>
            <Route path="/forgotpwd" element={<ForgotPassword></ForgotPassword>}></Route>
            <Route path="/resetpwd" element={<ResetPassword></ResetPassword>}></Route>

            <Route path='/register' element={<RegistrationForm />}></Route>
            <Route element={<ProtectedRoutes />}>
              <Route path="/serviceprovider/dashboard" element={<ServiceProviderDashboard />}></Route>
              <Route path="/serviceprovider/addservice" element={<AddService />}></Route>
              <Route path="/serviceprovider/details/:id" element={<DetailService />}></Route>
              <Route path="/serviceprovider/update/:id" element={<UpdateService />}></Route>
              <Route path="/serviceprovider/servicelist" element={<ServiceList />}></Route>
              <Route path="/serviceprovider/profile" element={<Profile />}></Route>
              <Route path="/user/bookservice" element={<BookService />}></Route>
              <Route path="/user/mybookings" element={<MyBookings />}></Route>
              <Route path="/user/detailservice/:id" element={<DetailBookService />}></Route>
              <Route path="/user/paymentbooking/:id" element=<PaymentBooking /> ></Route>
              <Route path="/user/address" element=<Address /> ></Route>
              <Route path="/user/paymentdemo/:id" element=<PaymentDemo /> ></Route>
              <Route path="/user/paymentdemo/updateaddress/:id" element=<UpdateAddress /> ></Route>
              <Route path="/user/dashboard" element={<UserDashboard />}></Route>
              <Route path="/user/profile" element={<UserProfile />}></Route>
              <Route path="/user/bookingdetails/:id" element={<DetailBooking />}></Route>


              
            </Route>
          </Routes>
        </div>
      </main>
    </body>
  );
}

export default App;
