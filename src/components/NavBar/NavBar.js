import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/homepage/paypallogo.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavBar = () => {
  const [showPersonalMenu, setShowPersonalMenu] = useState(false);
  const [showBusinessMenu, setShowBusinessMenu] = useState(false);

  const handlePersonalMenuToggle = () => {
    setShowPersonalMenu(!showPersonalMenu);
  };

  const handleBusinessMenuToggle = () => {
    setShowBusinessMenu(!showBusinessMenu);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-8" src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <div
                className="relative"
                onMouseEnter={handlePersonalMenuToggle}
                onMouseLeave={handlePersonalMenuToggle}
              >
                <button
                  type="button"
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  PERSONAL
                  <KeyboardArrowDownIcon className="h-5 w-5 ml-1" />
                </button>
                {showPersonalMenu && (
                  <div className="absolute mt-2 w-48 bg-white shadow-lg py-1 rounded-md">
                    <div className="grid grid-cols-3 gap-4 p-4">
                      <div>
                        <Link to="/personal">
                          <h3 className="text-sm font-medium text-gray-900">How PayPal works</h3>
                          <p className="text-sm text-gray-500">What can you do with a personal account</p>
                        </Link>
                      </div>
                      <div>
                        <Link to="/pay-online">
                          <h3 className="text-sm font-medium text-gray-900">Pay Online</h3>
                          <p className="text-sm text-gray-500">Online payment without borders</p>
                        </Link>
                      </div>
                      <div>
                        <Link to="/send-money-online">
                          <h3 className="text-sm font-medium text-gray-900">Send payments</h3>
                          <p className="text-sm text-gray-500">Send payments locally and abroad</p>
                        </Link>
                      </div>
                      <div>
                        <Link to="/requesting-payments">
                          <h3 className="text-sm font-medium text-gray-900">Get paid</h3>
                          <p className="text-sm text-gray-500">Request payments from almost anyone</p>
                        </Link>
                      </div>
                      <div>
                        <Link to="/mobile-apps">
                          <h3 className="text-sm font-medium text-gray-900">Get the PayPal App</h3>
                          <p className="text-sm text-gray-500">Manage your account mobile</p>
                        </Link>
                      </div>
                      <div>
                        <Link to="/shopping">
                          <h3 className="text-sm font-medium text-gray-900">Search for deals</h3>
                          <p className="text-sm text-gray-500">Pay with PayPal and save money</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={handleBusinessMenuToggle}
                onMouseLeave={handleBusinessMenuToggle}
              >
                <button
                  type="button"
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  BUSINESS
                  <KeyboardArrowDownIcon className="h-5 w-5 ml-1" />
                </button>
                {showBusinessMenu && (
                  <div className="absolute mt-2 w-48 bg-white shadow-lg py-1 rounded-md">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      <div>
                        <Link to="/merchant">
                          <h3 className="text-sm font-medium text-gray-900">All business solutions</h3>
                          <p className="text-sm text-gray-500">See our range of products</p>
                        </Link>
                      </div>
                      <div>
                        <Link to="/accept-payment-online">
                          <h3 className="text-sm font-medium text-gray-900">Accept online payments</h3>
                          <p className="text-sm text-gray-500">Get paid on your website</p>
                        </Link>
                      </div>
                      <div>
                        <Link to="/email-invoice">
                          <h3 className="text-sm font-medium text-gray-900">Send invoices</h3>
                          <p className="text-sm text-gray-500">Create and email online invoices</p>
                        </Link>
                      </div>
                      <div>
                        <Link to="/freelancers">
                          <h3 className="text-sm font-medium text-gray-900">PayPal for freelancers</h3>
                          <p className="text-sm text-gray-500">Grow your freelance business</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/partners-and-developers" className="font-medium text-gray-500 hover:text-gray-900">
                PARTNERS AND DEVELOPERS
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link
                to="/login"
                className="bg-white border border-blue-500 text-blue-500 font-bold text-sm py-1 px-4 rounded-full hover:opacity-75"
              >
                Log In
              </Link>
              <Link
                to="/sign-up"
                className="bg-blue-500 border border-blue-500 text-white font-bold text-sm py-1 px-4 rounded-full hover:opacity-75 ml-4"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
