import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from "./home.module.css"


const Editusers = () => {
  let [name,setName]=useState("")
  let [salary,setSalary]=useState("")
  let [company,setCompany]=useState("")

  let nameData=(e)=>{
    e.preventDefault()
    setName(e.target.value)
      }
      let salaryData=(e)=>{
        e.preventDefault()
        setSalary(e.target.value)
      }
      let companyData=(e)=>{
        e.preventDefault()
        setCompany(e.target.value)
      }
   let navigate=useNavigate();

  let {index}=useParams()
  console.log(index);

  useEffect(()=>{
    axios.get(`http://localhost:3000/content/${index}`)
    .then((resp)=>{
      console.log(resp.data);
      setName(resp.data.name)
      setSalary(resp.data.salary)
      setCompany(resp.data.company)
    })
  },[])

      let formData=(e)=>{
        e.preventDefault()
        let payload={name,salary,company}
        axios.put(`http://localhost:3000/content/${index}`,payload)
        .then(()=>{
            console.log("DATA UPDATED");
        })
        .catch(()=>{
            console.log("SOMETHING IS WRONG");
        })
        navigate("/user")
    }
  return (
    <div id ={style.myform}>
      <table>
        <tr>
          <th colSpan="2"><h4>Update User Details</h4></th>
        </tr>
        <tr>
          <td><label>Name</label></td>
          <td>:<input type="text" id='inp'value={name} onChange={nameData} /></td>
         </tr>
         <tr>
         <td><label>Salary</label></td>
          <td>:<input type="text" id='inp1'value={salary} onChange={salaryData} /></td>
         </tr>
         <tr>
         <td><label>Company</label></td>
          <td>:<input type="text" id='inp2' value={company} onChange={companyData} /></td>
         </tr>
         <tr>
          <th colSpan="2"><label><button onClick={formData}>Update</button></label></th>
         </tr>
      </table>
      
    </div>
  )
}

export default Editusers
