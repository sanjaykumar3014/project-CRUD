import React from "react"
import Homepage from "./Components/Homepage"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Createuser from "./Components/Createuser"
import User from "./Components/User"
import Editusers from "./Components/Editusers"

const App=()=>{
    return( 
        <div>
        
            <BrowserRouter>
            <Homepage/>
            <Routes>
                <Route path="/" element={<Createuser/>}></Route>
                <Route path="/user" element={<User/>}></Route>
                <Route path="/edit/:index" element={<Editusers/>}></Route>
                 </Routes> 
            </BrowserRouter>               
                    
        </div>

    )
    }
    export default App