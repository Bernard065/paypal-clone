import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/homepage/paypallogo.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavBar = () => {
  const [showPersonalMenu, setShowPersonalMenu] = useState(false);
  const [showBusinessMenu, setShowBusinessMenu] = useState(false)

  const handlePersonalMenuToggle = () => {
    setShowPersonalMenu(!showPersonalMenu);
  };

  const handleBusinessMenuToggle = () => {
    setShowBusinessMenu(!showBusinessMenu);
  };

  return (
    <>
      <div className='flex items-center justify-between px-16 py-4'>
        <div>
          <Link to=''>
            <img src={Logo} alt='Logo' width={150} />
          </Link>
        </div>
        <div className=''>
          <ul className='flex items-center justify-center space-x-6'>
            <li
              className='relative'
              onMouseEnter={handlePersonalMenuToggle}
              onMouseLeave={handlePersonalMenuToggle}
            >
              

              PERSONAL
              <KeyboardArrowDownIcon />
              {showPersonalMenu && (
                <div className='absolute'>
                  <ul className=''>
                    <li>
                      <Link to='/personal'>
                        <h3>How PayPal works</h3>
                        <p>What can you do with a personal account</p>
                        </Link>
                    </li>
                    <li>
                      <Link to='/pay-online'>
                        <h3>Pay Online</h3>
                        <p>Online payment without borders</p>
                      </Link>
                    </li>
                    <li>
                      <Link to='/send-money-online'>
                        <h3>Send payments</h3>
                        <p>Send payments locally and abroad</p>
                      </Link>
                    </li>
                    <li>
                      <Link to='/requesting-payments'>
                        <h3>Get paid</h3>
                        <p>Request payments from almost anyone</p>
                      </Link>
                    </li>
                    <li>
                      <Link to='/mobile-apps'>
                        <h3>Get the PayPal App</h3>
                        <p>Manage your account mobile</p>
                      </Link>
                    </li>
                    <li>
                      <Link to='/shopping'>
                        <h3>Search for deals</h3>
                        <p>Pay with Paypal and save money</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li 
              className='relative'
              onMouseEnter={handleBusinessMenuToggle}
              onMouseLeave={handleBusinessMenuToggle}
            >
              BUSINESS
              <KeyboardArrowDownIcon />
              {showBusinessMenu && (
                <div className='absolute'>
                  <ul>
                    <li>
                      <Link to='/merchant'>
                        <h3>All business solutions</h3>
                        <p>See our range products</p>
                      </Link>
                    </li>
                    <li>
                      <Link to='/accept-payment-online'>
                        <h3>Accept online payments</h3>
                        <p>Get paid on your website</p>
                      </Link>
                    </li>
                    <li>
                      <Link to='/email-invoice'>
                        <h3>Send invoices</h3>
                        <p>Create and email online invoices</p>
                      </Link>
                    </li>
                    <li>
                      <Link to='/freelancers'>
                        <h3>PayPal for freelancers</h3>
                        <p>Grow your freelance business</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link to='/partners-and-developers'>PARTNERS AND DEVELOPERS</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className='flex space-x-6'>
            <li>
              <Link to='login' className='bg-white border border-blue text-[#0070BA] font-bold text-sm py-1 px-4 rounded-full hover:opacity-75'>Log In</Link>
            </li>
            <li>
              <Link to='sign-up'className='bg-[#0070BA] border border-blue text-white font-bold text-sm py-1 px-4 rounded-full hover:opacity-75'>Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar