import { createContext, useEffect, useState } from "react";

export const DbContext = createContext()


export const DbProvider = ({ children }) => {
    const [database, setDatabase] = useState([]);
    const [token, setToken] = useState();
    const [user, setUser] = useState();
    const [id, setId] = useState(1);

    const CreateUser = (data) => {
        const newUser = {
            id: id,
            name: data.name,
            email: data.email,
            password: data.password,
        }
        setDatabase([...database, newUser])
        localStorage.setItem('@token', id)
        setUser(newUser)
        setToken(id)
        setId(id + 1)
    }

    const LoginUser = (data) => {
        const user = (database.find(user => user.email === data.email && user.password === data.password))
        if(user){
            setToken(user.id)
            return user.id
        }
    }

    const GetToken = () => {
        setToken(localStorage.getItem('@token'))
    }

    return (
        <DbContext.Provider value={{
            CreateUser,
            LoginUser,
            GetToken,
            token,
            user,
        }}>
            {children}
        </DbContext.Provider>
    )
}