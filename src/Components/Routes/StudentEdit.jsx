import React, {  } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { postUpdate } from '../Redux/features/CounterSlice';
import './Student.css'

function StudentEdit() {
//   const myContext = useContext(context);
let Data1 = useSelector(state => state.counter);
let dispatch = useDispatch();
  const location = useLocation(); // returns the location object 
 // the id present with the state property of the l;ocation object
  const navigate = useNavigate();
  const index = (location.state.data);
 
   // array of objects : context.entries
   // function         : context.updateFunction


   // the object in which the changes will be done 
   const newObj = {
       name : Data1[index].name,
       age : Data1[index].age,
       course : Data1[index].course,
       batch : Data1[index].batch
      

   }
   
//    console.log("Index : " + index)
   const handleChange = (event) =>
   {
       newObj[event.target.name] = event.target.value;
      // console.log(newObj);     
   }

  const handleUpdate = (event) =>{
    let name =  newObj.name; 
    let age =  newObj.age; 
    let course =  newObj.course; 
    let batch =  newObj.batch; 
    let int = index;
dispatch(postUpdate({name,age,course,batch,int}))
   
    
      navigate('/student');
   }
   const handleCancel = ()=>{
    navigate('/student');
   } 
  
 
  return (
    <>
    <div className='form'>
      <div>
       <div className='item'>
       <label>Name : </label>
        <input name='name' onChange={handleChange} defaultValue={Data1[index].name}  />
        </div> 
        <div className='item'>
        <label>Age : </label>
        <input name='age' onChange={handleChange} defaultValue={Data1[index].age}  />
        </div></div>
        <div>
        <div className='item'>
        <label>Course : </label>
        <input name='course' onChange={handleChange} defaultValue={Data1[index].course}  />
        </div>
        <div className='item'>
        <label>Batch : </label>
        <input name='batch' onChange={handleChange} defaultValue={Data1[index].batch}  />
        </div></div>
        
    </div>
    <div className='twoBox'>
    <button className='button' onClick={handleCancel}>Cancel</button>
    <button className='button' onClick={handleUpdate}>Update</button>
    </div>
    </>
  )
}

export default StudentEdit
