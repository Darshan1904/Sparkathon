import React from 'react'

const List = () => {
  return (
    <div className="mt-8 bg-white p-4 shadow rounded-lg">
            <h2 className="text-gray-500 text-lg font-semibold pb-4">Autorizaciones Pendientes</h2>
            <div className="my-1"></div>
            <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
            <table className="w-full table-auto text-sm">
              <thead>
                <tr className="text-sm leading-normal">
                  <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Foto</th>
                  <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre</th>
                  <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Rol</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-grey-lighter">
                  <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                  <td className="py-2 px-4 border-b border-grey-light">Juan Pérez</td>
                  <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
                </tr>
                {/* Add more rows */}
              </tbody>
            </table>
            <div className="text-right mt-4">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                Ver más
              </button>
            </div>
    </div>
  )
}

export default List