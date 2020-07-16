import React from 'react'

// import { NavLink } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import Aux from '../Aux/Aux'

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink,
    NavDropdown,
    DropdownItem,
}
    from 'react-bootstrap'

const NavBar = props => {

    const isMobile = useMediaQuery({
        query: '(max-width: 959px)'
    })


    return (
        <Aux>
            <Navbar collapseOnSelect bg="light" variant="light" expand="lg" sticky="top">
                <NavbarBrand className="p-lg-3">
                    <NavLink href="/" style={{textDecoration: 'none', color: 'black'}}>จริงใจโลงศพ</NavLink>
                    </NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse color="dark">
                    <Nav className="ml-lg-auto pr-lg-5 mr-lg-5">
                        <NavLink
                            href="/"
                        >
                            หน้าแรก
                            </NavLink>
                        <NavDropdown title="โลงศพสำหรับผู้ใหญ่">
                            <NavDropdown className="p-2" title="ผู้ชาย" drop={isMobile ? "down" : "right"}>
                                <DropdownItem as="button">
                                    <NavLink
                                        href="/modern">
                                        มาตรฐาน
                                        </NavLink>
                                </DropdownItem>
                                <DropdownItem as="button">
                                    โมเดิร์น
                                    </DropdownItem>
                            </NavDropdown>
                            <NavDropdown className="p-2" title="ผู้หญิง" drop={isMobile ? "down" : "right"}>
                                <DropdownItem as="button">มาตรฐาน</DropdownItem>
                                <DropdownItem as="button">โมเดิร์น</DropdownItem>
                            </NavDropdown>
                        </NavDropdown>
                        <NavDropdown title="โลงศพสำหรับเด็ก">
                            <NavDropdown className="p-2" title="เด็กผู้ชาย" drop={isMobile ? "down" : "right"}>
                                <DropdownItem as="button">มาตรฐาน</DropdownItem>
                                <DropdownItem as="button">โมเดิร์น</DropdownItem>
                            </NavDropdown>
                            <NavDropdown className="p-2" title="เด็กผู้หญิง" drop={isMobile ? "down" : "right"}>
                                <DropdownItem as="button">มาตรฐาน</DropdownItem>
                                <DropdownItem as="button">โมเดิร์น</DropdownItem>
                            </NavDropdown>
                        </NavDropdown>
                        <NavLink>ติดต่อเรา</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <main>
                {props.children}
            </main>
        </Aux>
    )

}

export default NavBar
