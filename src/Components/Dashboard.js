import React from 'react'
import Table from './Table'
import TopLinebar from './Top_Line_bar'
import Graph from './Graph'
// import Graphs from './Graph'

export default function Dashboard() {
  return (
    <>
     <div className="col-md-9 ml-sm-auto col-lg-10 px-md-4 px-lg-4">
   <TopLinebar/>
    <Graph/>
    <Table/>
    </div>

    </>
  )
}
