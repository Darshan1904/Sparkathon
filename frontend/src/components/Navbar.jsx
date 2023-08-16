import React, { useState } from 'react';
import { IoAddCircle } from 'react-icons/io5';
import { Dialog, DialogContent, DialogActions, Button, TextField, InputLabel } from '@mui/material';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [factor1, setFactor1] = useState('');
  const [factor2, setFactor2] = useState('');
  const [factor3, setFactor3] = useState('');
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
            <IoAddCircle className="text-2xl" onClick={() => setIsOpen(true)} />
          </button>
        </div>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogContent>
          <div className="factor-input">
            <InputLabel className = "input-label">Factor1</InputLabel>
            <TextField id="outlined-basic" variant="outlined" value = {factor1} onChange={(e)=>setFactor1(e.target.value)} />
          </div>
          <div className="factor-input">
            <InputLabel className = "input-label">Factor2</InputLabel>
            <TextField id="outlined-basic" variant="outlined" value = {factor2} onChange={(e)=>setFactor2(e.target.value)} />
          </div>
          <div className="factor-input">
            <InputLabel className = "input-label">Factor3</InputLabel>
            <TextField id="outlined-basic" variant="outlined" value = {factor3} onChange={(e)=>setFactor3(e.target.value)} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            setIsOpen(false);
          }}>Test</Button>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </nav>
  );
}

export default Navbar;