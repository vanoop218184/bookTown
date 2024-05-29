import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

export const AuthContext=createContext()
export default function AuthProvider({children}){
    const intialAuthuser=localStorage.getItem("users");
    const [authuser,setauthuser]=useState(
        intialAuthuser? JSON.parse(intialAuthuser):undefined
    )
    return (
        <AuthContext.Provider  value={[authuser,setauthuser]}>
        {children}
        </AuthContext.Provider>
    )
}
export const useAuth=()=>useContext(AuthContext);