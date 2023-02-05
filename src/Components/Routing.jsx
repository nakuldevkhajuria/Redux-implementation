import React, {  } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Students from './Routes/Students'
import Contactus from './Routes/Contactus'

import StudentAdd from './Routes/StudentAdd'
import StudentEdit from './Routes/StudentEdit'

function Routing() {
  
 
  return (
    <div>
       
         <Routes>
            <Route path='/' element={<Home />}></Route>
         
         
                <Route path='/student' element={<Students />}></Route>
         
            <Route path='/contactus' element={
             <Contactus />
            }></Route>    
           <Route path='/student-add' element={
           
            <StudentAdd />
        
            }></Route>
             <Route path='/student-edit' element={
         
            <StudentEdit />
         
            }></Route>
            </Routes>

       
    </div>
  )
}

export default Routing