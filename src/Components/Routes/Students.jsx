import React, {  } from 'react'
import { NavLink } from 'react-router-dom'

import './Student.css'
import Table from '../Redux/Table'

function Students() {
  
  return (
    <div> 
      <div className='headButton'>
      <span> Student Details</span>
      <button><NavLink to='/student-add'>Add new student </NavLink></button>
      
      </div>
  <Table  />

    </div>
  )
}

export default Students