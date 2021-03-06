import React from "react";
import Navbar from "react-bootstrap/Navbar";

function NavComponent() {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="https://react-bootstrap.github.io/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                React Bootstrap
                </Navbar.Brand>
            </Navbar>
        </div>
        
    )
}

export default NavComponent;