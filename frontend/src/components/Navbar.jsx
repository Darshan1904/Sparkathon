import React, { useState, useContext } from 'react';
import { IoAddCircle } from 'react-icons/io5';
import { Dialog, DialogContent, DialogActions, Button, TextField, InputLabel } from '@mui/material';
import factorContext from '../context/factorContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [curr, setCurr] = useState("")
  const {factors, setFactors, setResult, names, setNames} = useContext(factorContext);
  const handleSubmit =async()=>{
    // e.preventDefault();
    console.log(factors);
    const response = await fetch('/api',{
      method:"POST",

      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(factors)
    });

    let data = await response.json();
    setResult(data.predictions[0][0].toFixed(2));

    setNames([ ...names, {name: curr, score:data.predictions[0][0].toFixed(2)} ]);
  }
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
              <InputLabel className = "input-label">Supplier</InputLabel>
              <TextField id="outlined-basic" variant="outlined" name="Quality" onChange={(e) => {
         setCurr(e.target.value);
      }}/>
          </div>
        <div className="factor-input">
            <InputLabel className = "input-label">Quality</InputLabel>
            <TextField id="outlined-basic" variant="outlined" value = {factors.Quality} name="Quality" onChange={(e) => {
  setFactors({ ...factors, [e.target.name]: e.target.value });
}}/>
          </div>
          <div className="factor-input">
            <InputLabel className = "input-label">Price</InputLabel>
            <TextField id="outlined-basic" variant="outlined" value = {factors.Price} name="Price" onChange={(e) => {
  setFactors({ ...factors, [e.target.name]: e.target.value });
}}/>
          </div>
          <div className="factor-input">
            <InputLabel className = "input-label">Distance</InputLabel>
            <TextField id="outlined-basic" variant="outlined" value = {factors.Distance} name="Distance" onChange={(e)=>setFactors({...factors, [e.target.name]:e.target.value})} />
          </div>
          <div className="factor-input">
            <InputLabel className = "input-label">Orders</InputLabel>
            <TextField id="outlined-basic" variant="outlined" value = {factors.Orders} name="Orders" onChange={(e) => {
  setFactors({ ...factors, [e.target.name]: e.target.value });
}}/>
          </div>
          <div className="factor-input">
            <InputLabel className = "input-label">Sales</InputLabel>
            <TextField id="outlined-basic" variant="outlined" value = {factors.Sales} name="Sales" onChange={(e) => {
  setFactors({ ...factors, [e.target.name]: e.target.value });
}}/>
          </div>
          <div className="factor-input">
            <InputLabel className = "input-label">Benefits per Order</InputLabel>
            <TextField id="outlined-basic" variant="outlined" value = {factors.Benefit} name="Benefit" onChange={(e)=>setFactors({...factors, [e.target.name]:e.target.value})} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            handleSubmit();
            setIsOpen(false);
          }} variant='contained'>Test</Button>
          <Button onClick={() => setIsOpen(false)} variant='outlined'>Cancel</Button>
        </DialogActions>
      </Dialog>
    </nav>
  );

}

export default Navbar;