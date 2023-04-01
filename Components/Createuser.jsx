import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./home.module.css"

const Createuser = () => {
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")

    let navigate=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }

    let formhandle=(e)=>{
        e.preventDefault()
        let payload={name,salary,company}
        axios.post("http://localhost:3000/content",payload)
        .then(()=>{
            console.log("DATA HAS BEEN ADDED");
        })
        .catch(()=>{
            console.log("SOMETHING IS WRONG");
        })
        navigate("/user")
    }
    
  return (
    <div id={style.myform}>
        <table>
            <tr>
                <th colSpan="2"><h4>User Details</h4></th>
            </tr>

            <tr>
                <td><label>Name</label></td>
                <td><input type="text"  id='inp' value={name} onChange={nameData}/></td>
            </tr>

            <tr>
             <td><label>Salary</label></td>
                <td><input type="text" id='inp1' value={salary} onChange={salaryData}/></td>

            </tr>

            <tr>
                <td><label>Company</label></td>
                <td><input type="text" id='inp2' value={company} onChange={companyData}/></td>
            </tr>
            <tr>
                <th colSpan="2"><button onClick={formhandle}>submit</button></th>
            </tr>
        </table>
     
    </div>
  )
}

export default Createuser
