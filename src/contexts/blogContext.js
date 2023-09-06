import {  createContext, useContext, useState } from "react";



const blogContext  = createContext();

export const blogProvider = ({children})=>{

    const [blog , setBlog] = useState([]);
     
    return <blogContext.Provider value={{blog , setBlog}}>
        {children}
    </blogContext.Provider>
}

export const useBlog = ()=>{
    return useContext(blogContext);
}