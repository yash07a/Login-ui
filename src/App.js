import React, { useState } from 'react';
import './App.css';
const btname = "Next >"
function App() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });
  const toggleTheme = (e) => {
    e.preventDefault();
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      document.body.style = 'background: white;'
    }
    else {
      setMyStyle({
        color: 'white',
        backgroundColor: '#6600cc'
      })
      document.body.style = 'background: #6600cc;';
    }
  }
  return (
    <div style={myStyle}>
    <div className='cont'  style={myStyle}>
      <button onClick={(e) => toggleTheme(e)} style={myStyle} className='batan'>{myStyle.color === 'black' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</button>
    </div>
    <form className='container' style={myStyle}>
      <div className='icons' style={myStyle}>
        <div >
          <i className="fas fa-lock"></i>
          <h5>Account</h5>
        </div>
        <div >
          <i className="fa-solid fa-user"></i>
          <h5>Personal</h5>
        </div>
        <div >
          <i className="fas fa-dollar-sign"></i>
          <h5>Billing</h5>
        </div>
        <div style={myStyle}>
          <i className="far fa-thumbs-up"></i>
          <h5>Done</h5>
        </div>
      </div>
      <div className="mb-3" style={myStyle}>
        <label htmlFor="examplename" className="form-label">Name</label>
        <i className="gg-info"></i>
        <input type="text" className="form-control" id="examplename" aria-describedby="nameHelp" />
      </div>
      <br />
      <div className="mb-3" style={myStyle}>
        <label htmlFor="exampleInputEmail1" className="form-label">Email*</label>
        <i className="gg-info"></i>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">Please input a real email address.</div>
      </div>
      <br />
      <div className="row" style={myStyle}>
        <div className="col1">
          <label htmlFor="examplepassword" className="form-label">Password*</label>
          <i className="gg-info"></i>
          <input type="password" className="form-control" aria-label="First name" />
          <div id="emailHelp" className="form-text">Please enter your Password.</div>
        </div>
        <div className="col2" style={myStyle}>
          <label htmlFor="examplepassword1" className="form-label">Confirm Password*</label>
          <i className="gg-info"></i>
          <input type="password" className="form-control" aria-label="Last name" />
          <div id="emailHelp" className="form-text">Passwords need to match</div>
        </div>
      </div>
      <br />
      <div className="form-check" style={myStyle}>
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">I accept the terms and privacy policy</label>
      </div>
      <button type="submit" className="btn">{btname}</button>
    </form>
    </div>
  );
}

export default App;
