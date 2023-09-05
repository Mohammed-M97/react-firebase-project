import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from "react-bootstrap/Dropdown";

export function Navbars() {
  const [user] = useAuthState(auth);
  const signUserOut = async () => {
    await signOut(auth);
  } 

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Text>
          <Link to="/"> Home </Link>
          {
            !user ? (
            <Link to="/login"> Login </Link>
          ) : (
            <Link to="/createpost"> Create Post </Link>
            )
          }
          
        </Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            
            <div className="user">
              {user &&
                <>
                Signed in as: <a href="#login" style={{marginLeft: "10px"}}>{user?.displayName}</a>
                </>
              }
            </div>
            <Dropdown className="dropdown inline">
              <Dropdown.Toggle id="dropdown-basic" className="dropdown">
                <img src={user?.photoURL || ""} width="30" height="30" style={{borderRadius: '50%'}} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                <button
                onClick={signUserOut}
                className="nav-link"
                style={{ color: "black" }}
                >
                  Logout
                </button>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}