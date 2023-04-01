import axios from 'axios'
import React, {  useEffect,useState } from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'


const User = () => {
  let [data,setData]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/content")
    .then((response)=>{
      setData(response.data)
    })
    .catch(()=>{
      console.log("Didn't Get");
    })
  },[])
  let deleteUser=(id)=>{
    axios.delete(`http://localhost:3000/content/${id}`)
    .then(()=>{console.log("Deleted");})
    .catch(()=>{console.log("Sorry");})
  
    window.location.assign(`/user`)
  }

  return (
    <div id ={style.myUsers}>
      {data.map((x)=>{
      return (
        <div id={style.cards}>
           <table>
            <tr>
                <th colSpan="2"><h4>Employee Details {x.id} </h4></th>
            </tr>

            <tr>
                <td><label>Name</label></td>
                <td>: {x.name} </td>
            </tr>

            <tr>
             <td><label>Salary</label></td>
                <td>: {x.salary} </td>
            </tr>

            <tr>
                <td><label>Company</label></td>
                <td>: {x.company} </td>
            </tr>
           
          <tr>
          <td><button><Link to ={`/edit/${x.id}`}>Edit</Link></button></td>
          <td><button onClick={()=>{deleteUser(x.id)}}>Delete</button></td>
        </tr>
        </table>
        </div>
      )})}
      
    </div>
  )
}

export default User
