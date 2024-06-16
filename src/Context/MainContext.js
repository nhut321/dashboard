import { createContext, useState } from "react";

export const MainContext = createContext()

const MainContextProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(true)
    const selectTab = (value) => {
        console.log(value)
    }
    const data = {
        selectTab,
        isLogin
    }

    return (
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContextProvider