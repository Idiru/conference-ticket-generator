import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import "./components/Navbar/Navbar.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="container-content">
          <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
          <p>Secure your spot at next year’s biggest coding conference.</p>
        </div>
        <div className="container-form">
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
          <div className="container-input-fullname">
            <label htmlFor="">Full Name</label><br />
            <input type="text" />
          </div>
          <div className="container-input-email">
            <label htmlFor="">Email Address</label><br />
            <input type="email" placeholder="example@email.com" />
          </div>
          <div className="container-input-github">
            <label htmlFor="">GitHub Username</label><br />
            <input type="text" placeholder="@yourusername" />
          </div>
          <button type="submit">Generate My Ticket</button>
        </div>
      </div>
    </>
  );
}

export default App;
