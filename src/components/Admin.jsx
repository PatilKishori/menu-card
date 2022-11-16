import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Admin = () => {

  let [data, setdata] = useState({});

  let {id} = useParams();

  return (
    <>
        <h1>Order List</h1>

        <div className="container">

        <div className='row border border-dark p-5'>
            <div className='col-lg-4'>
               
           
            </div>
             <div className='col-lg-6 text-start'>
                <h3 className='text-center '><u>Details</u></h3>
             <h5>Table No:{data.table}</h5><br />
             <h5>Menu :{data.menu}</h5><br />
           
             </div>
        </div>
    </div>
        
    </>
  )
}

export default Admin;

