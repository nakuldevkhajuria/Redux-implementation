import React, { useState } from 'react'
import './Student.css'

import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postAdded } from '../Redux/features/CounterSlice';

function StudentAdd() {


const navigate = useNavigate();
let dispatch = useDispatch();
  const [formData,setFormData] = useState(
    {
      name:'',
      age : '',
      course : '',
      batch : ''
    }
  )
 

  function submitChange(e){


e.preventDefault();

let name = formData.name;
let age = formData.age;
let course = formData.course;
let batch = formData.batch;

dispatch(postAdded({name,age,course,batch}))


setFormData({name:'',age:'',course:'',batch:''})

navigate(-1)

  }
  
  function changeValue(e){
   
     e.preventDefault();
          const newFormData = {...formData};
    
          newFormData[e.target.name] = e.target.value;
          setFormData(newFormData);
   
  }
  const handleCancel = ()=>{
    navigate('/student');
   } 
  return (
    <>
     { 
      <form className='form'>
        <div>
          <div className='item'>
      <label>Name :</label>
      <input type='text' name='name' value={formData.name} onChange={changeValue}   required pattern="[a-zA-Z]+"></input> <br/>
      </div>
      <div className='item'>
      <label>Age :</label>
      <input type='text' name='age' value={formData.age} onChange={changeValue}   required pattern="[a-zA-Z]+"></input> <br/>
      </div>
      </div>
      <div >
      <div className='item'>
      <label>Course :</label>
      <input type='text' name='course'  value={formData.course}   onChange={changeValue}   required pattern="[a-zA-Z]+"></input> <br/>
      </div>
      <div className='item'>
      <label>Batch :</label>
      <input type='text' name='batch' value={formData.batch}   onChange={changeValue}    required pattern="[a-zA-Z]+"></input> <br/>
      </div>
      </div>
      
     
      </form> }
      <div className='twoBox'>
      <button className='button' onClick={handleCancel}>Cancel</button>
      <button className='button' type='button' onClick={submitChange} >Submit</button>
    
      </div>
    </>

  )
}

export default StudentAdd