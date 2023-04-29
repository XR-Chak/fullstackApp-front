import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'


export default function Home() {
  const [user,setUser] = useState([]);
  useEffect(()=>{
    loadusers();
  },[])

  const loadusers = async () =>{
    const result = await axios.get("http://localhost:8080/users");
    
    setUser(result.data);
    console.log(user);
    
  }



  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Edit</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    user.map((user,index)=>{
                      return( 
                      <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td><button type="button" class="btn btn-primary mx-2">View</button>
                        <button type="button" class="btn btn-outline-primary mx-2">Edit</button>
                        <button type="button" class="btn btn-danger mx-2">Delete</button>
                        </td>

                      </tr>
                      )
                     
                    })
                  }


                  {/* <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Mark</td>
                  </tr>   */}
                </tbody>
            </table>
        </div>
    </div>
  )
}
