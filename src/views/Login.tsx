import { useState } from "react"
import { useNavigate } from 'react-router-dom'

type User = { 
  email: string,
  password: string,
}

const Login = () => {
  const [ values, setValue ] = useState({
    email: '',
    password: '',
  }) 

  const navigate = useNavigate()

  const handleSubmit = (event: Event) => {
    event.preventDefault()

    const user: User | undefined = JSON.parse(localStorage.getItem('user'))
    
    if (!user) {
      alert('User was not found')
    }
 
    if(user && user.password) {
      if (user.password === values.password && user.email === values.email) {
        localStorage.setItem('isAuthenticated', 'true')
        alert('Logging in...')
      } else {
        alert('Password or email is incorrect')
      }
    }
    navigate('/home')
    setValue({
      email: '',
      password: '',
    })
  }

  return (
    <>
      <h1 className="text-center font-extrabold text-3xl mt-10 mb-5">Login page</h1>

      <form
        onSubmit={handleSubmit} 
        className="flex flex-col items-center">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '400px',
          }}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border p-1 outline-none mb-5"
            value={values.email}
            onChange={e => setValue({ ...values, email: e.target.value })}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            maxWidth: '400px',
          }}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="border p-1 outline-none"
            value={values.password}
            onChange={e => setValue({ ...values, password: e.target.value })}
          />
        </div>
        <div className="flex justify-start">
          <button type="submit" className="border mt-5 w-48 py-1 bg-gray-500 text-white font-semibold">Login</button>
        </div>
      </form>
    </>
  )
}

export default Login
