import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { NavLink } from 'react-router-dom'

const ViewAll = () => {
  const [stu, setstu] = useState([])
  let getData = async() => {
    let {data} = await axios.get("http://localhost:5000/student")
    setstu(data)
  }
  useEffect(() => {
    try{
      getData()
    }
    catch(e) {
      console.log(e)
    }
  }, [])


  let deleteStu = (id) => {
    axios.delete(`http://localhost:5000/student/${id}`)
    toast.success("User Deleted SuccessFully")
    .then(() => {
        getData()
    }) 
}


  
  return (
    <>
    <section>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>UserEmail</th>
            <th>More Details</th>
          </tr>
        </thead>
        <tbody>
          {stu.length === 0 ? "Loading" : stu.map(val => {
            return(
              <Fragment key={val.id}>
              <tr>
                <td>{val.id}</td>
                <td>{val.userName}</td>
                <td>{val.userEmail}</td>
                <td>
                  <NavLink to={`/edit/${val.id}`}>
                    <button>Update</button>
                  </NavLink>
                  <button onClick={() => {deleteStu(val.id)}}>Delete</button>
                </td>
              </tr>
              </Fragment>
            )
          }) }
        </tbody>
      </table>
    </section>
    </>
  )
}

export default ViewAll