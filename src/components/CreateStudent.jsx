import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const CreateStudent = () => {
    const [stu, setstu] = useState({
      userName: "",
      userEmail: ""
    })

    let navigate = useNavigate()

    let {userName, userEmail} = stu

    let onChangeValue = (event) => {
      let {name, value} = event.target 
      setstu({...stu, [name]: value})
    }

    let onHandleSubmit = (event) => {
        event.preventDefault()
        try {
          let payLoad = stu
          axios.post("http://localhost:5000/student", payLoad)
          toast.success("Succesfully added")
          navigate("/viewall")
        } catch(e) {
          console.log(e)
        }
    }
  return (
    <>
    <section>
        <h1>Welcome to homePage</h1>
        <form onSubmit={onHandleSubmit}>
            <div>
            <label htmlFor='uname'>UserName</label>
            <input id='uname' type="text" name='userName' value={userName} onChange={onChangeValue} required  />
            </div>
            <div>
            <label htmlFor='uemail'>UserEmail</label>
            <input id='uemail' type="email" name='userEmail' value={userEmail} onChange={onChangeValue} required />
            </div>
            <button>Submit</button>
        </form>
    </section>
    </>
  )
}

export default CreateStudent