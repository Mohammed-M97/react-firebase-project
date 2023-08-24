import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { async } from "@firebase/util";

export function Navbar() {
  const [user] = useAuthState(auth);
  const signUserOut = async () => {
    await signOut(auth);
  } 

  return (
    <div className="navbar">
      <div className="links">
        <div className="home">
          <Link to="/"> Home </Link>
        </div>
        {
          !user ? (
            <div className="login">
              <Link to="/login"> Login </Link>
            </div>
          ) : (
            <div className="createpost">
              <Link to="/createpost"> Create Post </Link>
            </div>
          )
        }
      </div>

      <div className="user">
        {user &&
          <>
          <p> {user?.displayName} </p>
          <img src={user?.photoURL || ""} width="20" height="20" />
          <button onClick={signUserOut}>Logout</button>
          </>
        }
      </div>
    </div>
  )
}