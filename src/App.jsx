import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Ticket from "./components/Ticket";
import ImageUpload from "./components/ImageUpload";
import "./App.css";
import "./components/Navbar/Navbar.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    github: "",
  });

  const [error, setError] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    console.log(form);
  };

  useEffect(() => {
    errorhandler();
    checkFormCompletion();
  }, [form]);

  const errorhandler = () => {
    form.email.length !== 0 && !form.email.includes("@")
      ? setError(true)
      : setError(false);
  };

  const checkFormCompletion = () => {
    if (
      form.email.length > 0 &&
      form.name.length > 0 &&
      form.github.length > 0
    ) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  console.log("isGenerated", isGenerated)
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="container-content">
          { !isGenerated ?
            <div>
              <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
              <p>Secure your spot at next year’s biggest coding conference.</p>
            </div>
            :
            <div>
              <h1>Congrats, <span className="red-font-name">{form.name}</span>! Your ticket is ready.</h1>
              <p>We've emailed your ticket to <span className="red-font">{form.email}</span> and will send updates in the run up to the event.</p>
            </div>
          }
        </div>
        {!isGenerated ?
          <div className="container-form">
          <form action="">
            <ImageUpload />
            <div className="container-input-name">
              <label htmlFor="">Full Name</label>
              <br />
              <input
                type="text"
                placeholder="John Doe"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="container-input-email">
              <label htmlFor="">Email Address</label>
              <br />
              <input
                className={error ? "error-space" : null}
                type="email"
                placeholder="example@email.com"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            {error ? (
              <div className="container-disclaimer">
                <p className="disclaimer error">
                  <img src="/public/info-icon-red.svg" alt="info-icon" />
                  Please enter a valid email address.
                </p>
              </div>
            ) : null}
            <div className="container-input-github">
              <label htmlFor="">GitHub Username</label>
              <br />
              <input
                type="text"
                placeholder="@yourusername"
                name="github"
                value={form.github}
                onChange={handleChange}
              />
            </div>
            <button
              disabled={!isCompleted}
              type="button"
              onClick={ () => setIsGenerated(true)}
            >
              Generate My Ticket
            </button>
          </form>
        </div>
        :
        <Ticket/>
        }
      </div>
    </>
  );
}

export default App;
