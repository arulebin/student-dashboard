import { useState } from 'react'
import clgbg from './assets/College-Logo-with-College-Name-Transparent.png'
import menu from './assets/menu.svg'
import './App.css'

function App() {
  const [phone, setPhone] = useState("");
  const [iframe, setIframe] = useState(`https://www.sxcce.edu.in/mobile/dashboard.php?ph=`)
  const [showSidebar, setShowSidebar] = useState(true);

  const handleInput= (e) =>{
    setIframe(`https://www.sxcce.edu.in/mobile/dashboard.php?ph=${phone}`)
  }
  const handleChange =(e)=>{
    setPhone(e.target.value);
  }

  const handleBtn=(e)=>{
    const value= e.target.value;
    setIframe(`https://www.sxcce.edu.in/mobile/${value}.php?ph=${phone}`)
  }
  const toggleSidebar=()=>{
    setShowSidebar(!showSidebar);
  }
  return (
    <>
       <div className="container">
        <div className={`sidebar ${showSidebar? "": "show"}`}>
            <img src={`${clgbg}`}alt="" className="logo"/>
            <button className="btn" onClick={handleBtn} value="dashboard">Home</button>
            <button className="btn" onClick={handleBtn} value="studview">Student Details</button>
            <button className="btn" onClick={handleBtn}  value="fees">Fees Balance</button>
            <button className="btn" onClick={handleBtn} value="emarks">Semester Marks</button>
            <button className="btn" onClick={handleBtn} value="imarks">Internal Marks</button>
            <button className="btn" onClick={handleBtn} value="absent">Attendance Details</button>
            <button className="btn" onClick={handleBtn} value="discipline">Discipline Details</button>
            <button className="btn" onClick={handleBtn} value="events">College Events</button>
        </div>
        <div className="main-content">
            <div className="head">
                <h1>Student Information</h1>
                <button className="menu" onClick={toggleSidebar}><img src={`${menu}`} className="menu"/></button>
            </div>
            <div className="phone-input">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" placeholder="Enter your Phone Number " onChange={handleChange} value={phone}/>
                <button id="submitBtn" onClick={handleInput} >Check</button>
            </div>
            <iframe id="Frame" src={iframe} style={{ border: "none" }}></iframe>
        </div>
    </div>
    </>
  )
}

export default App