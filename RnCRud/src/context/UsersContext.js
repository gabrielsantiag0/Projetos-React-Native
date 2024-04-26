import React, { createContext }  from 'react'
import Users from '../data/Users'

 export const UserContext = createContext({})
    
  export  const UserProvider = props =>{
        return(
            <UserContext.Provider value={{
                state: {
                    Users
                }
            }}>
                {props.children}
            </UserContext.Provider>
        )
    }

