import "./Login.css";
import Logo from '../assets/logo_lp.svg'
import Circle from '../assets/circle_lp.svg'
import book from '../assets/book.svg'
import finger from '../assets/finger.svg'
import elip from '../assets/elip.svg'
import rect from '../assets/rect.svg'
import yellow from '../assets/yellow.svg'
import indigos from '../assets/indigos.svg'
import loginlogo from '../assets/loginlogo.svg'

import p1_lp from '../assets/p1_lp.svg'
function Login() {
  

  return (
    <div className="login">
      <div className="up">
        <div className="left">
          <img src={Logo} alt="" className="logo" />
          {/* <img src="" alt="1" /> */}
        </div>
        <div className="right">
          <div className="btn rightbtn">
            {/* <NavLink to="/signup"> */}
              <button className="big-button">signup</button>
            {/* </NavLink> */}
          </div>
          <div className="symbol">
            {/* <img src="../assets/3circles.svg" alt="" className="circles" /> */}
            <img src={Circle} alt="circle" />
          <img src={Circle} alt="circle" />
          <img src={Circle} alt="circle" />
          <img src={yellow} alt="" className="yellowcircle" /> 
          </div>
        </div>
      </div>
      <div className="down">
        <div className="first">
          <img src={book} alt="8" className="book" />
          <img src={finger} alt="4" className="finger" />
          <img src={elip} alt="5" className="elipse" />
        </div>
        <div className="second">
          <div className="grid">
            <img src={rect} alt="" className="gridimg" />
          </div>
          <div className="circle">
            <img src={yellow} alt="" className="yellowcircle" />
          </div>
          <div className="form">
            <form action="POST">
              <label className="user" htmlFor="username">
                Userna<span>m</span>e
              </label>
              <div className="inputsubmit">
                <div className="usernameinput">
                  <input
                    // onChange={(e) => setUsername(e.target.value)}
                    className="textuser"
                    type="text"
                  />
                </div>
                <div className="submit" style={{b:{loginlogo}}}>
                  <input
                    // onClick={handleSubmit}
                    type="image"
                    name="submit"
                    src={loginlogo}
                    value="submit"
                  />
                </div>
              </div>
              <div className="passlabel">
                <label className="pass" htmlFor="password">
                  Pass<span>w</span>ord
                </label>
              </div>
              <div className="pass">
                <input
                  // onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  className="password"
                />
              </div>
            </form>
          </div>
          <div className="indigo">
            <img src={indigos} alt="" className="indigogrid" />
          </div>
        </div>
        <div className="third">
          <img src={p1_lp} alt="" className="page" />
        </div>
      </div>
    </div>
  );
}

export default Login;
