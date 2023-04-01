import React from 'react'
import style from "./home.module.css"
 import {Link} from "react-router-dom"



const Homepage = () => {
  return (
   <section id={style.nav}>
    <Link to="/"><a>Create-Users</a></Link>
    <Link to="/user"><h2>User</h2></Link>
   </section>
  )
}

export default Homepage
