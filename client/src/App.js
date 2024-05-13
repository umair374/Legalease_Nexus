import React from 'react';
import './App.css';
import Login from './Components/Login';
import JoinRoom from './Components/JoinRoom';
import Register from './Components/Register';
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Logout from './Components/Logout';
import NotFound from './Components/NotFound';
import Home from './Components/Home';
import Private from './Private';
import VerifyOtp from './Components/VerifyOtp';
import VerifyOtp2 from './Components/VerifyOtp2';
import ForgotPassword from './Components/ForgotPassword';
import AdminDashboard from './Components/AdminDashboard';
import LawyerDashboard from './Components/LawyerDashboard';
import ManageUser from './Components/ManageUser';
import ManageLawyer from './Components/ManageLawyer';
import NavigationBar from './Components/NavigationBar';
import ViewLawyer from './Components/ViewLawyer';
import MakeAppointment from './Components/AppointmentForm';
import AcceptAppointment from './Components/AcceptAppointment';
import Room from './Components/Room';
import Unauthorized from './Components/Unauthorized';
import UserFeedback from './Components/UserFeedback';
import freeslot from './Components/ManageFreeSlots';

function App() {

  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');


  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      if (res.status === 200) {
        const result = await res.json();
        setUserType(result.userType);
        if(result.email){setEmail(result.email)}
        setauth(true)
        setauth1(false)
      }

      if (res.status === 401) {
        setauth(false)
        setauth1(true)
      }
    } catch (error) {
      console.log(error)
      setauth(false)
      setauth1(true)
      setUserType("");
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, [])

  return (
    <div>

      <div>

        <nav>
          {auth1 ? (
            <>
              <Link to="/login" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2 sm:mb-0 sm:mr-2">
                <i className="fa fa-sign-in me-2" /> Login
              </Link>
              <Link to="/register" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2 sm:mb-0 sm:mr-2">
                <i className="fa fa-user-plus me-2" /> Register
              </Link>
              <Link to="/verify-otp" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2 sm:mb-0">
                <i className="fa fa-check-circle me-2" /> Verify Account
              </Link>
            </>
          ) : (
            <div>
              <NavigationBar userType={userType} email={email}/>
            </div>
          )}
        </nav>


      </div>

      <div>
        <Routes>
          <Route path="/user/lawyer-feedback" element={<Private component={UserFeedback} auth={auth} userType={userType} />} /> 
          <Route path="/user/dashboard" element={<Private component={Dashboard} auth={auth} userType={userType} />} />
          <Route path="/user/view-lawyer" element={<Private component={ViewLawyer} auth={auth} userType={userType} />} />
          <Route path="/user/make-appointment/:lawyer_email/:lawyer_name" element={<Private component={MakeAppointment} auth={auth} userType={userType} />} />
          <Route path="/admin/dashboard" element={<Private component={AdminDashboard} auth={auth} userType={userType} />} />
          <Route path="/lawyer/dashboard/:email" element={<Private component={LawyerDashboard} auth={auth} userType={userType} />} />
          {/* <Route path="/lawyer/dashboard" element={<Private component={LawyerDashboard} auth={auth} userType={userType} />} /> */}
          <Route path="/lawyer/accept-appointment" element={<Private component={AcceptAppointment} auth={auth} userType={userType} />} />
          <Route path="/lawyer/free-slots" element={<Private component={freeslot} auth={auth} userType={userType} />} />
          <Route path="/admin/manage-user" element={<Private component={ManageUser} auth={auth} userType={userType} />} />
          <Route path="/admin/manage-lawyer" element={<Private component={ManageLawyer} auth={auth} userType={userType} />} />
          
          <Route path="/logout" element={<Private component={Logout} auth={auth} userType={""} />} />
          <Route path="/login" element={<Private component={Login} auth={auth1} userType={""} />} />
          <Route path="/register" element={<Private component={Register} auth={auth1} userType={""} />} />
          


          <Route path="/join-room" element={<JoinRoom />} />
          <Route path="/verify-otp/:email" element={<VerifyOtp />} />
          <Route path="/verify-otp" element={<VerifyOtp2 />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Home />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/room/:roomId" element={<Room />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
