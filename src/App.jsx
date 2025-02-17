import {useEffect, useState} from 'react'
import Navbar from "./components/Navbar/Navbar";
import ImageUpload from './components/ImageUpload';
import "./App.css";
import "./components/Navbar/Navbar.css";


function App() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    github: '',
  })

  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm((prevForm) => ({
      ...prevForm,
      [name]:value,      
     }))    
  console.log(form);
  }

  useEffect(() => {
    errorhandler()
  }, [form.email])

  const errorhandler = () => {
    form.email.length !== 0 && !form.email.includes("@") ? setError(true) : setError(false)
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="container-content">
          <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
          <p>Secure your spot at next year’s biggest coding conference.</p>
        </div>
        <div className="container-form">
        <form action="">
        <ImageUpload/>
          <div className="container-input-name">
            <label htmlFor="">Full Name</label><br />
            <input type="text" placeholder="John Doe" name='name' value={form.name} onChange={handleChange}/>
          </div>
          <div className="container-input-email">
            <label htmlFor="">Email Address</label><br />
            <input className={error ? "error-space" : null} type="email" placeholder="example@email.com" name='email' value={form.email} onChange={handleChange} />
          </div>{ error ?
            <div className="container-disclaimer">
              <p className="disclaimer error">
                <img src="/public/info-icon-red.svg" alt="info-icon" />
                Please enter a valid email address.
              </p>
            </div>
          : null}
          <div className="container-input-github">
            <label htmlFor="">GitHub Username</label><br />
            <input type="text" placeholder="@yourusername" name='github' value={form.github} onChange={handleChange} />
          </div>
          <button type="submit">Generate My Ticket</button>
        </form>
        </div>
      </div>
    </>
  );
}

export default App;
