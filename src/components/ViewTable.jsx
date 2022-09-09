import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useState,useEffect} from 'react';

function ViewTable() {
    const params = useParams();
   
    const [viewData, setViewData] = useState([])

    const viewTableData = async()=>{
        const response = await axios.get(`https://630b1174f280658a59d58092.mockapi.io/Table/${params.id}`);
        setViewData(response.data);
    }

    useEffect(()=>{
        viewTableData();
    },[])
  return (
   
    <div className="card text-center d-flex " style={{width: "18rem"}}>
  <div className="card-header justify-content-center align-items-center">
    {viewData.name}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{viewData.age}</li>
    <li className="list-group-item">{viewData.position}</li>
    <li className="list-group-item">{viewData.companyName}</li>
    <li className="list-group-item">{viewData.salary}</li>
    <li className="list-group-item">{viewData.address}</li>
  </ul>
</div>
  )
}

export default ViewTable