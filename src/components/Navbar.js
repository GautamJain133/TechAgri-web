import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import axios from 'axios';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarhome() {
    const { logOut, user } = useUserAuth();
  
    const navigate = useNavigate();
  
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };
    
    const createToken = async () => {
      const token = user && (await user.getIdToken());
  
      const payloadHeader = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${token}`,
        },
      };
      return payloadHeader;
    };
  
    const [name, setName] = useState("");
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${name}`);
      const header = await createToken();
      console.log("header is " + header.headers["x-auth-token"]);
  
      // console.log("hi" + header.headers["x-auth-token"]);
  
      axios
        .post(
          "/user",
          {
            Name: name,
          },
          header
        )
        .then((response) => {
          console.log("response received successfully");
        });
    };  

  return (
    <Navbar expand="lg" style={{backgroundColor: "#B5DEFC", padding: "10px"}}>
        <Navbar.Brand href="#home" style={{color: "green", marginLeft: "15px"}} className="fs-4">Kisaan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-text" className="collapse navbar-collapse">
          <Nav className="ms-2 me-0">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#team">about</Nav.Link>
            {user?
            (
              <NavDropdown
              title={user.email}
              id="basic-nav-dropdown"
              className="nav-link fs-6 p-0 ms-5"
            >
              <NavDropdown.Item href="# ">
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
              
            ):(
            <Nav.Link><Link to="/login">Login</Link></Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbarhome;