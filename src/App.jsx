import './App.css'
import { use, useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

function App() {
  const [username,setUsername] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [loading , setLoading] = useState(false);

  const handleSubmit = (e) => {
    // error msg section
    e.preventDefault()
    if (username.trim() === ""){
      alert('Please Enter Your Name ')
    }else{
      alert(`Welcome ${username}!`)
    }
    // loder spinner
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert('Form submitted!')
    }, 1500);

  };
  return (
    <div className='logo-box'>
      <img src="/twitter.png" alt="" className='twitter-logo' />
      <h2>Sign In with Google</h2>

      <button>
        <img src="/google1.png" className='google-logo' alt="Google" />
        Sign In
      </button>

      <button>
        <img src="/apple.png" className='apple-logo' alt="apple" />
        Sign In
      </button>

      <hr className='line' />
      <span>OR</span>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Phone, email or username'  onChange={(e) => setUsername(e.target.value)}/>

        <div className='password-wrapper'>
          <input type={showPassword ? "text" : "password"} placeholder='Enter your Password'/>
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
       
        <button type="submit" disabled={loading} >{loading ? <span className='spinner'></span> : "Next"}</button>
      </form>

      <button>Forget password</button>
      <p>
        Don't Have an account <a href="">Sign Up</a>
      </p>
    </div>
  )
}

export default App
