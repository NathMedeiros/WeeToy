import { useEffect } from "react";
import { createContext, useState } from "react";
import { api } from "./../request/api"

interface iAuthProps{
    children: React.ReactNode;
}

interface iAuthContext{
    setLogged: React.Dispatch<React.SetStateAction<boolean>>,
    isLogged: boolean
}

export const AuthContext = createContext({} as iAuthContext)

export function AuthProvider({children}: iAuthProps){

    const [logged, setLogged] = useState(false)

    const [isLogged, setIsLogged] = useState(false)

    useEffect(()=>{
        const token = localStorage.getItem("@TOKEN: WeeToys")

        const userIdLocal = localStorage.getItem("@USER: WeeToys")
        
        async function loadUser(){
            if(token && userIdLocal !== null){
                
                const userId = await JSON.parse(userIdLocal)
                
                try{
                    const request = await api.get(`/users/${userId.id}`, {headers: {authorization: `Bearer ${token}`}})

                    if(request.data){
                        setIsLogged(true)
                    }
                }catch(err){
                    return null
                }
            }
        }

        loadUser()


    },[logged])

    return (
        <AuthContext.Provider value={{setLogged, isLogged}}>
            {children}
        </AuthContext.Provider>
    )
}