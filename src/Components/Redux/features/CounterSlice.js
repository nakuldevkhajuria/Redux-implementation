import { createSlice } from "@reduxjs/toolkit";




const initialState = [
  
]


export const createCounter =  createSlice(
    
    {
        name:'Counter',
       initialState,
        reducers:{
            postAdded : ((state,action)=>{
            console.log(action)
            console.log(state)
state.push(action.payload)//type and payload are the properties of action.

            })
            ,
            postUpdate : ((state,action)=>{
          
                 let index = action.payload.int;//i have passed the int , from the studentEdit using useLocation
              state[index] = {...state[index],...action.payload}//state[index] holds the complete state and action.payload contains the current updates values
              console.log(state[index])
                // })
            

            })
            
        }
    }
)
export const {postAdded,postUpdate} = createCounter.actions;
export default createCounter.reducer;