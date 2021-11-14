import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center text-white items-center bg-red-400'
          : 'hidden'
      }
    >
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/dashboard">
        Dashboard
      </Link>
      {/* <Link className="p-4" to="/about">
        About
      </Link> */}
      {/* <Link className="p-4" to="/contact">
        Contact
      </Link> */}
    </div>
  );
};

export default Dropdown;
