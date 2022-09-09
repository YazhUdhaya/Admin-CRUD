import axios from 'axios'
import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom';

function UserTables() {

    const [tableData, setTableData] = useState([]);
   
     const getUserData = async()=>{
        const response = await axios.get(`https://630b1174f280658a59d58092.mockapi.io/Table`)
        setTableData(response.data); 
    }
    
   
    useEffect(() =>{   
        getUserData();
       
    },[])
     const userDelete = async(id) =>{
      const response = await axios.delete(`https://630b1174f280658a59d58092.mockapi.io/Table/${id}`)
      getUserData();
     }
     
  return (

<>
    <div className="d-sm-flex align-items-center justify-content-between">
    <h1>User Table Data</h1>
    <Link to='/create-userdata' className=" btn btn-sm btn-primary shadow-sm"> Create Data</Link>
    </div>

    <table className="table">
  <thead>
    <tr>
      <th scope="col">#SL</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Position</th>
      <th scope="col">Comapny Name</th>
      <th scope="col">Salary</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    
   {
    tableData.map((data,index) =>{
        return( <tr>
        <td>{index+1}</td>
        <td>{data.name}</td>
        <td>{data.age}</td>
        <td>{data.position}</td>
        <td>{data.companyName}</td>
        <td>{data.salary}</td>
        <td>{data.address}</td>
        <td>
        <Link to={`/user-tables/${data.id}`}className='btn btn-warning'>View</Link>
        <Link to={`/update-userdata/${data.id}`} className='btn btn-primary'>Update</Link>
        <button onClick={()=>{userDelete(data.id)}}className='btn btn-secondary'>Delete</button>
        </td>
        </tr>
        )
    })
   }
   
  </tbody>
  <tfoot>
    <tr>
      <th scope="col">#SL</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Position</th>
      <th scope="col">Comapny Name</th>
      <th scope="col">Salary</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </tfoot>
  </table>
 
  </>
  )
}

export default UserTables