import React, { useContext } from 'react'
import factorContext from '../context/factorContext'

const List = () => {
  const {names} = useContext(factorContext);
  return (
    <div className="mb-4 shadow-lg bg-white p-4 rounded-sm w-11/12 mx-auto">
            <h2 className="text-gray-500 text-lg font-semibold pb-4">Scores</h2>
            <div className="my-1"></div>
            <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
            <table className="w-full table-auto text-sm">
              <thead>
                <tr className="text-sm leading-normal">
                  <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">No.</th>
                  <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Name</th>
                  <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Score</th>
                </tr>
              </thead>
              <tbody>
              {names.map((item, index) => index>=1 && (
                <tr className="text-sm leading-normal" key={index}>
                  <th className="py-2 px-4 bg-grey-lightest text-sm text-gray-400 border-b border-grey-light">{index}</th>
                  <th className="py-2 px-4 bg-grey-lightest text-sm text-gray-400 border-b border-grey-light">{item.name}</th>
                  <th className="py-2 px-4 bg-grey-lightest text-sm text-gray-400 border-b border-grey-light">{item.score}</th>
                </tr>
              ))}
              </tbody>
            </table>
    </div>
  )
}

export default List