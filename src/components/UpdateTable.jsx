import React, { useEffect } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import {useNavigate, useParams} from 'react-router-dom'

function UpdateTable() {

  const params = useParams();
  const navigate = useNavigate();
    const formik = useFormik({
        initialValues : {
            name:"",
            age:"",
            position:"",
            companyName:"",
            salary:"",
            address:"",
        },
         validate : (values) =>{
            let errors = {};

            if(values.name === ""){
              errors.name = "Please Enter Name";
            }
            if(values.age === ""){
                errors.age = "Please Enter Age";
            }
            if(values.address === ""){
                errors.address = "Please Enter Address";
            }
            return errors;
         },
        onSubmit: async(values)=>{
          const response = await axios.put(`https://630b1174f280658a59d58092.mockapi.io/Table/${params.id}`,values);
          navigate(`/user-tables`);
        }
})

useEffect(()=>{
  getUpdateValue();
},[])
  const getUpdateValue = async() => {
      let user = await axios.get(`https://630b1174f280658a59d58092.mockapi.io/Table/${params.id}`);
      formik.setValues({
        name:user.data.name,
        age:user.data.age,
        position:user.data.position,
        companyName:user.data.companyName,
        salary:user.data.salary,
        address:user.data.address,
      })
  }

  return (
    <form className='col-lg-6' onSubmit={formik.handleSubmit} >
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" onChange={formik.handleChange}
    value={formik.values.name} name="name" required/>
    <span>{formik.errors.name}</span>
  </div>

  <div className="mb-3">
    <label htmlFor="age" className="form-label">Age</label>
    <input type="number" className="form-control" id="age" onChange={formik.handleChange}
    value={formik.values.age} name="age" required/>
     <span>{formik.errors.age}</span>
  </div>
  <div className="mb-3">
    <label htmlFor="position" className="form-label">Position</label>
    <input type="text" className="form-control" id="position" onChange={formik.handleChange}
    value={formik.values.position} name="position" required/>
  </div>
  <div className="mb-3">
    <label htmlFor="companyName" className="form-label">Company Name</label>
    <input type="text" className="form-control" id="companyName" onChange={formik.handleChange}
    value={formik.values.companyName} name="companyName"required/>
  </div>

  <div className="mb-3">
    <label htmlFor="salary" className="form-label">Salary</label>
    <input type="number" className="form-control" id="salary" 
    value={formik.values.salary} name="salary" onChange={formik.handleChange}required/>
  </div>
  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address</label>
    <input type="text" className="form-control" id="address" onChange={formik.handleChange}
    value={formik.values.address} name="address" required/>
     <span>{formik.errors.address}</span>
  </div>
  <button type="submit" value="submit" className="btn btn-primary" >Submit</button>
    </form>
 )
}



export default UpdateTable