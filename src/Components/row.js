import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'

export default function row() {
  return (
    <div className="container-fluid">
    <div className="row">
    <Sidebar/>
    <Dashboard/>
    </div>
  </div>
  )
}
