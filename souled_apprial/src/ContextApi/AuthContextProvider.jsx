import { createContext, useState } from "react"

export const AuthContext = createContext()


 const AuthContextProvider = ({children})=>{
 const [query , setquery] = useState("")
 const [cartData , setcartData] = useState([])
 const [adresstotal ,setAddresstotal] = useState(0)
 const[addressGst  , setAddressGst] = useState(0)
 const [showEmpty , setshowEmpty] = useState(false)

    return <AuthContext.Provider value={
        {
            query,setquery,
            cartData , setcartData,
            adresstotal ,setAddresstotal,
            addressGst  , setAddressGst,
            showEmpty , setshowEmpty,
        }
    }>{children}</AuthContext.Provider>
}
export default AuthContextProvider