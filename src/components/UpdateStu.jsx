import axios from 'axios'
import React, {useState, useEffect} from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateStu = () => {
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

    let id = useParams()

    let getApi = async() => {
        let {data} = await axios.get(`http://localhost:5000/student/${id}`)
        setstu(data)
      }

    useEffect(() => {
        try{
          getApi()
        }
        catch(e) {
          console.log(e)
        }
      }, [])

    let onHandleSubmit = (event) => {
        event.preventDefault()
        try {
          let payLoad = stu
          axios.put(`http://localhost:5000/student/${id}`, payLoad)
          toast.success("Succesfully updated")
          navigate("/viewall")
        } catch(e) {
          console.log(e)
        }
    }



  return (
    <>
    <section>
        <h1>Updating student Details</h1>
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

export default UpdateStu