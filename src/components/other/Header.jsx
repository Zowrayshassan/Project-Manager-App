import React, { useState, useEffect } from 'react';

const Header = (props) => {
  const logOut = () => {
    localStorage.removeItem('loggedInUser'); 
    props.changeUser('')             
  };
  return (
    <div className="px-4 sm:px-10 md:px-20 py-5 text-white">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-5">
        <h1 className="text-2xl leading-snug">
          Hello,<br />
          <span className="font-bold text-3xl">
            {props.data.name || 'Guest'} 👋
          </span>
        </h1>

        <button onClick={logOut}className="border border-cyan-500 rounded-lg bg-cyan-500 text-white h-11 px-6 text-lg hover:bg-transparent hover:text-cyan-500 transition-all duration-300">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
