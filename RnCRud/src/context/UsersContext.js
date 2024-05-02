import React, { createContext, useReducer }  from 'react'
import Users from '../data/Users'

    const inicialState = { Users }  

 export const UserContext = createContext({})

 const actions = {
    createUser( state, action ) {
        const User = action.payload
        User.id = Math.random()
        return{
            ...state,
            Users: [...state.Users, User],
        }
    },
    deleteUsers(state, action) {
        const user = action.payload 
        return{
            ...state,
            Users: state.Users.filter(u => u.id !== user.id)
        }
    },
    updateUser( state, action ) {
        const updateUser = action.payload
        return{
            ...state,
            Users: state.Users.Map(u => u.id === updated.id ? updated : u )
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
