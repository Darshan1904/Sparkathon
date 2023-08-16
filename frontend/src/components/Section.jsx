import React from 'react';
import { Dialog, DialogContent, DialogActions, Button, TextField, InputLabel } from '@mui/material';
import { useState } from 'react';
const ProductSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [factor1, setFactor1] = useState('');
  const [factor2, setFactor2] = useState('');
  const [factor3, setFactor3] = useState('');
  return (
    <section className="text-gray-600 body-font bg-white rounded-md w-11/12 mx-auto shadow-sm">
      <div className="container mx-auto">
        <div className="mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="w-1/2 h-fit object-cover object-center rounded-lg my-auto"
            src={require("../bg2.jpg")}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 px-4">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Uncover the Best Suppliers for Your Business Needs

</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Refine Supplier Selection</h1>
            <div className="flex mb-4">
              {/* SVG icons */}
            </div>
            <p className="leading-relaxed">
            Welcome to VendorVerse – Your Ultimate Supplier Scoring Solution. Whether you're seeking top-notch materials, unparalleled service, or unbeatable reliability, we've got you covered. Our innovative platform empowers you to make informed decisions by evaluating suppliers based on a comprehensive set of parameters. Say goodbye to guesswork and hello to data-driven supplier selection.
            </p>
            <div className="flex mt-6 items-center pb-3 border-b-2 border-gray-100 mb-5">
              {/* Color and Size selection */}
            </div>
            <div className="flex">
              <button className="flex mr-auto text-white bg-[#4CA5F4] border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded" onClick={()=>setIsOpen(true)}>Get Started</button>
            </div>
          </div>
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
          }} variant='contained'>Test</Button>
          <Button onClick={() => setIsOpen(false)} variant='outlined'>Cancel</Button>
        </DialogActions>
      </Dialog>
    </section>
  );
}

export default ProductSection;