import React from 'react'

const List = () => {
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
              <tr className="text-sm leading-normal">
                  <th className="py-2 px-4 bg-grey-lightest text-sm text-gray-400 border-b border-grey-light">1</th>
                  <th className="py-2 px-4 bg-grey-lightest text-sm text-gray-400 border-b border-grey-light">HP</th>
                  <th className="py-2 px-4 bg-grey-lightest text-sm text-gray-400 border-b border-grey-light">9/10</th>
                </tr>
                {/* Add more rows */}
              </tbody>
            </table>
    </div>
  )
}

export default List