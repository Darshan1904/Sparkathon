import React from 'react'

const SideNav = () => {
  return (
    <div className={`p-2 bg-white w-full md:w-60 flex flex-col md:flex`} id="sideNav">
          <nav>
            <a className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
              <i className="fas fa-home mr-2"></i>Inicio
            </a>
            {/* Add more navigation links */}
          </nav>
          {/* ... (Rest of the code) ... */}
    </div>
  )
}

export default SideNav