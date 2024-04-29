import React, { createContext, useReducer }  from 'react'
import Users from '../data/Users'

    const inicialState = { Users }  

 export const UserContext = createContext({})

 const actions = {
    createUser( state, action ) {
        const user = action.payload
        user.id = Math.random()
        return{
            ...state,
            Users: [...state.Users, user],
        }
    },

    deleteUsers(state, action) {
        const user = action.payload 
        return{
            ...state,
            Users: state.Users.filter(u => u.id !== user.id)
        }
    }
 }
    
  export  const UserProvider = props =>{

    function reducer(state, action) {
      const fn = action [ action.type ]
        return fn ? fn ( state, action )  : state
    }

    const [ state, dispatch ] = useReducer(reducer, inicialState)   


        return(
            <UserContext.Provider value={{ state, dispatch }}>
                {props.children}
            </UserContext.Provider>
        )
    }
