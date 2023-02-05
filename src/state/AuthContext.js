import { createContext, useEffect, useReducer } from 'react'
import AuthReducer from "./AuthReducer"

// define the state
const initialState = {
    user: JSON.parse(sessionStorage.getItem("user")) || null,
    // user: {
    //     _id:"63d42635454a280aa2fd2d74",
    //     username:"shotaro",
    //     email:"okada@mail.com",
    //     password:"test1234",
    //     profilePicture:"/person/1.jpeg",
    //     coverPicture:"",
    //     followers:[],
    //     followings:[],        
    //     isAdmin:false,
    // },
isFetching: false,
    error: false,
}

// aministrate the data grobally
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    useEffect(()=>{
        sessionStorage.setItem("user",JSON.stringify(state.user));

    },[state.user])

    return (<AuthContext.Provider
        value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}
    >
        {children}
    </AuthContext.Provider>
    )
};