import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState('open');

  return (
    <div className="h-full">
      {/* MENU BAR  */}
      <div className="w-full overlay px-4 md:px-10 grid z-50 grid-cols-2 h-auto md:h-16 pt-5 md:pt-0 justify-between items-center bg-secondary text-secondary-light fixed top-0">
        <div className="flex space-x-2 pb-5 font-bold md:pb-0">
          <h1>Vester.AI</h1>
          <div className="h-2 w-2 rounded-full bg-secondary-light"></div>
        </div>

        <ul className="hidden md:flex space-x-6 justify-self-end items-center">
          <li className="menu">
            <Link to="/">Home</Link>
          </li>
          <li className="menu">
            <Link to="/docs">Docs</Link>
          </li>
          <li className="menu border py-2 font-extrabold px-3 rounded-md hover:border-primary-dark">
            <Link to="/login">Sign{'\u00A0'}In</Link>
          </li>
          <li className="menu border py-2 bg-secondary-light text-secondary-dark font-extrabold px-3 rounded-md hover:border-primary-dark">
            <Link to="/form-1">Get{'\u00A0'}Started</Link>
          </li>
        </ul>
        {menu === 'open' ? (
          <img
            src="/menu.png"
            alt="Open Menu Logo"
            className="bg-icon pb-5 md:pb-0 flex justify-self-end md:hidden cursor-pointer"
            width={30}
            height={30}
            onClick={() => {
              setShow(true);
              setMenu('close');
            }}
          />
        ) : (
          <img
            src="/close.png"
            alt="Close Menu Logo"
            className="bg-icon pb-5 md:pb-0 flex justify-self-end md:hidden cursor-pointer"
            width={20}
            height={20}
            onClick={() => {
              setShow(false);
              setMenu('open');
            }}
          />
        )}

        {show === true && (
          <ul className="absolute overlay px-4 md:px-10 text-base mt-16 top-0 left-0 bg-secondary md:hidden w-full col-span-2">
            <li className="focus:text-primary-dark w-full border py-2 font-extrabold px-3 rounded-md hover:border-primary-dark hover:text-primary-dark transition delay-200 ease-in-out duration-1000 pb-2 pt-2 hover:cursor-pointer flex hover:font-extrabold hover:scale-95">
              <Link className="w-full" to="/login">
                Sign{'\u00A0'}In
              </Link>
            </li>
            <li className="focus:text-primary-dark w-full border py-2 bg-secondary-light text-secondary-dark font-extrabold px-3 rounded-md hover:border-primary-dark hover:text-primary-dark transition delay-200 ease-in-out duration-1000 pb-2 pt-2 hover:cursor-pointer flex hover:font-extrabold hover:scale-95 mt-5">
              <Link className="w-full" to="/form-1">
                Get{'\u00A0'}Started
              </Link>
            </li>
            <li className="menu-block focus:text-primary-dark w-full">
              <Link className="w-full" to="/">
                Home
              </Link>
            </li>
            <li className="focus:text-primary-dark w-full hover:text-primary-dark transition delay-200 ease-in-out duration-1000 border-b-none border-b-gray-800 pb-2 pt-2 hover:cursor-pointer flex hover:font-extrabold hover:scale-95">
              <Link className="w-full" to="/docs">
                Docs
              </Link>
            </li>
          </ul>
        )}
      </div>
      {/* BODY */}
      <main>
        <div className="w-full">{children}</div>
      </main>
      {/* FOOTER */}
      <footer className="w-full overlay grid z-50 py-4 h-auto justify-items-center items-center bg-secondary text-secondary-light">
        <div className="flex space-x-6">
          <Link to="https://github.com" target="_blank">
            <img
              src="/github.png"
              width={15}
              height={15}
              alt="github logo"
              className="bg-icon icon"
            />
          </Link>

          <Link to="https://whatsapp.com" target="_blank">
            <img
              src="/whatsapp.png"
              width={15}
              height={15}
              alt="whatsapp logo"
              className="bg-icon icon"
            />
          </Link>
          <Link to="https://www.linkedin.com" target="_blank">
            <img
              src="/linkedin.png"
              width={15}
              height={15}
              alt="linkedin logo"
              className="bg-icon icon"
            />
          </Link>
          <Link to="https://instagram.com" target="_blank">
            <img
              src="/instagram.png"
              width={15}
              height={15}
              alt="instagram logo"
              className="bg-icon icon"
            />
          </Link>
          <Link to="https://twitter.com" target="_blank">
            <img
              src="/twitter.png"
              width={15}
              height={15}
              alt="twitter logo"
              className="bg-icon icon"
            />
          </Link>
        </div>
        <p className="text-xs leading-9 tracking-wide text-gray-200 font-thin">
          &copy; {new Date().toLocaleDateString('en-us', { year: 'numeric' })}{' '}
          Vester.AI, ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}
