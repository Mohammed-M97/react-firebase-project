import photo from "../images/user.png";
import logout from "../images/logout.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function Navbars() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate()
  const signUserOut = async () => {
    await setMenu(!menu);
    await signOut(auth);
    navigate("/");
  } 
  const [menu, setMenu] = useState(true)

  const toggle = () => {
    setMenu(!menu)
  }

  return (
    <nav>
      <ul>
        <li>
          <a>
          <Link to="/"> Home </Link>
          </a>
        </li>
        {
            !user ? (
            <a>
              <Link to="/login" className="loginStyle"> Login </Link>
            </a>
            
          ) 
          : (
            <li>
              <a>
                <Link to="/createpost"> Create Post </Link>
              </a>
            </li>
            )
        }
      </ul>
      {
        !user ? "" : (
          <img src={user?.photoURL || ""} className="user-pic" onClick={toggle} />
        )
      }

      <div className={
        menu ? "sub-menu-wrap" : "sub-menu-wrap-open"
      }>
        <div className="sub-menu">
          <div className="user-info">
            <img src={user?.photoURL || ""}/>
            <h3>{user?.displayName}</h3>
          </div>
          <hr />

          <a href="#" className="sub-menu-link">
            <img src={logout}/>
            <p
            onClick={signUserOut}>Logout</p>
          </a>
        </div>
      </div>
    </nav>
  )
}