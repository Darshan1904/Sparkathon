import React from 'react'
import SideNav from './SideNav'
import Charts from './Charts'
import List from './List'
import TopCard from './TopCard'

const Dashboard = () => {
  return (
    <div className="flex-1 flex flex-wrap">
        <SideNav />
        <div className="flex-1 p-4 w-full md:w-1/2">
            <Charts />
            <List />
            <TopCard />
        </div>
    </div>
  )
}

export default Dashboard