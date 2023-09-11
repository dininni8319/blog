import { useState } from "react"
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [ values, setValue ] = useState({
    email: '',
    password: '',
    password_repeat: '',
    username: '',
  }) 

  const navigate = useNavigate()

  const handleSubmit = (event: Event) => {
    event.preventDefault()
    
    if (values.password !== values.password_repeat) {
      alert("The passwords are not the same")
      return
    }
    
    JSON.stringify(localStorage.setItem('user', JSON.stringify(values)))
    
    const user = JSON.parse(localStorage.getItem("user"))
    if (user && user.username) {
      alert('User was created')
      setValue({
        email: '',
        password: '',
        password_repeat: '',
        username: '',
      })
      navigate('/home')
    } else {
      alert('User was not created')
    }
  }

  return (
     <>
      <h1 className="text-center font-extrabold text-3xl mt-10 mb-5">Register page</h1>

      <form
        onSubmit={handleSubmit} 
        className="flex flex-col items-center">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '400px',
          }}
          className="w-full max-w-xs rounded overflow-hidden shadow-lg my-2 bg-white mx-auto"
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="p-1 outline-none mb-5"
            value={values.email}
            onChange={e => setValue({ ...values, email: e.target.value })}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '400px',
          }}
          className="w-full max-w-xs rounded overflow-hidden shadow-lg my-2 bg-white mx-auto"
        >
          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="text"
            className="p-1 outline-none mb-5"
            value={values.username}
            onChange={e => setValue({ ...values, username: e.target.value })}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            maxWidth: '400px',
          }}
          className="w-full max-w-xs rounded overflow-hidden shadow-lg my-2 bg-white mx-auto"
        >
        <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="p-1 outline-none mb-5"
            value={values.password}
            onChange={e => setValue({ ...values, password: e.target.value })}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            maxWidth: '400px',
          }}
          className="w-full max-w-xs rounded overflow-hidden shadow-lg my-2 bg-white mx-auto"
        >
        <label htmlFor="password_repeat">Repeat Password</label>
          <input
            type="password"
            id="password_repeat"
            className="p-1 outline-none mb-5"
            value={values.password_repeat}
            onChange={e => setValue({ ...values, password_repeat: e.target.value })}
          />
        </div>
        <div className="flex justify-start">
          <button 
            type="submit"
            disabled={ 
              values.password === ''
              || values.email === ''
              || values.username === ''
              || values.password_repeat === ''
            } 
            className="border mt-5 w-96 py-2 bg-gray-700 text-white font-semibold"
          >Login</button>
        </div>
      </form>
    </>
  )
}

export default Register
