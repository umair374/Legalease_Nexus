import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ userType, email }) => {
  return (
    <nav className="flex flex-wrap justify-center sm:justify-start">
      {userType === 'user' && (
        <>
          <Link to="/user/dashboard" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2 sm:mb-0 sm:mr-2 ">
            <i className="fa fa-wrench me-2" /> Dashboard
          </Link>
          <Link to="/user/view-lawyer" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2 sm:mb-0 sm:mr-2">
            <i className="fa fa-briefcase me-2" /> View Lawyer
          </Link>
        </>
      )}
      {userType === 'admin' && (
        <>
          <Link to="/admin/dashboard" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2 sm:mb-0 sm:mr-2">
            <i className="fa fa-wrench me-2" /> Dashboard
          </Link>
          <Link to="/admin/manage-user" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2 sm:mb-0 sm:mr-2">
            <i className="fa fa-users me-2" /> Manage User
          </Link>
          <Link to="/admin/manage-lawyer" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2 sm:mb-0 sm:mr-2">
            <i className="fa fa-briefcase me-2" /> Manage Lawyer
          </Link>
        </>
      )}
      {userType === 'lawyer' && (
        <>
          <Link to={`/lawyer/dashboard/${email}`} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2 sm:mb-0 sm:mr-2">
            <i className="fa fa-wrench me-2" /> Dashboard
          </Link>
          {/* <Link to="/lawyer/accept-appointment" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2 sm:mb-0 sm:mr-2">
            <i className="fa fa-address-book me-2" aria-hidden="true"  /> Appointment
          </Link> */}
          <Link to="/lawyer/free-slots" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2 sm:mb-0 sm:mr-2">
            <i className="fa fa-plus me-2" aria-hidden="true"  /> Manage-Slots
          </Link>
        </>
      )}
      <Link to="/logout" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2 sm:mb-0 sm:mr-2">
        <i className="fa fa-sign-out me-2" /> Logout
      </Link>
    </nav>
  );
  
};

export default NavigationBar;
