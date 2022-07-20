import React, { useState } from "react";
import { Navbar, Collapse, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css";

export const CustomerNav = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="me-auto">Honey Rae's</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar >
                        <NavItem>
                            <NavLink href="/tickets" className='border-bottom m-0'>Tickets</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/profile" className='border-bottom m-0'>Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="" onClick={() => { localStorage.removeItem("honey_user") }}>Logout</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
