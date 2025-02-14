import {useState} from 'react'
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import "./components/Navbar/Navbar.css";


function App() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    github: '',
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm((prevForm) => ({
      ...prevForm,
      [name]:value,      
     }))    
  console.log(form);
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

        <div className="container-upload">
            <label htmlFor="">Upload Avatar</label>
            <div className="upload-area">
              <img src="/public/upload-icon.svg" alt="upload-icon" />
              <p className="upload-text">Drag and drop or click to upload</p>
            </div>
            <div className="container-disclaimer">
              <p className="disclaimer">
                <img src="/public/info-icon.svg" alt="info-icon" />
                Upload your photo (JPG or PNG, max size: 500KB).
              </p>
            </div>
          </div>
          <div className="container-input-name">
            <label htmlFor="">Full Name</label><br />
            <input type="text" placeholder="John Doe" name='name' value={form.name} onChange={handleChange}/>
          </div>
          <div className="container-input-email">
            <label htmlFor="">Email Address</label><br />
            <input type="email" placeholder="example@email.com" name='email' value={form.email} onChange={handleChange} />
          </div>
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
