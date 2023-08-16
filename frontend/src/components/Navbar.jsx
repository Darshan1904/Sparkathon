import React from 'react';
import { IoAddCircle } from 'react-icons/io5';

const Navbar = () => {
  return (
    <nav className="bg-white text-[#B8BBC9] p-2 flex items-center justify-between my-4 mx-auto rounded-sm w-11/12 shadow-md">
      <div className="flex items-center relative w-full">
        <div className="flex items-center w-1/2">
          <img src={require("../supplyChain.png")} alt="Logo" className="w-8 h-8 mr-2" />
          <h1 className="text-md text-[#4CA5F4]">VendorVerse</h1>
        </div>
        <div className='flex items-end justify-end realtive w-1/2'>
          <p className="text-[#858688] my-3 mx-4 font-bold">Test Supplier</p>
          <button className="bg-[#4CA5F4] hover:bg-[#4CA5F4] text-white my-3 mr-4 font-bold rounded-full">
            <IoAddCircle className="text-2xl" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;