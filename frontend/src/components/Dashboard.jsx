import React from 'react'
import Charts from './Charts'
import List from './List'
import ProductSection from './Section'

const Dashboard = () => {
  return (
    <div className="w-full">
        <div className="flex-1 w-full">
            <ProductSection />
            <Charts />
            <List />
        </div>
    </div>
  )
}

export default Dashboard