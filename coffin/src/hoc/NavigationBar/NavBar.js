import React from 'react'

import { useMediaQuery } from 'react-responsive'

import Aux from '../Aux/Aux'

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink,
    NavDropdown,
    DropdownItem,
    Dropdown,
    NavItem,
}
    from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = props => {

    const isMobile = useMediaQuery({
        query: '(max-width: 959px)'
    })

    return (
        <Aux>
            <Navbar collapseOnSelect bg="light" variant="light" expand="lg" sticky="top">
                <NavbarBrand className="p-lg-3">
                    <NavLink href="/">จริงใจโลงศพ</NavLink>
                </NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse color="dark" className="justify-content-end">
                    <Nav className="ml-lg-auto pr-lg-5 mr-lg-5" as="ul">
                        <NavItem as="li">
                            <NavLink as={Link} to="/">หน้าแรก</NavLink>
                        </NavItem>
                        <NavDropdown title="โลงศพสำหรับผู้ใหญ่">
                            <NavDropdown className="p-2" title="ผู้ชาย" drop={isMobile ? "down" : "right"}>
                                <DropdownItem as="button">
                                    <NavLink as={Link} to={{
                                        pathname: '/standard'
                                    }}>มาตรฐาน</NavLink>
                                </DropdownItem>
                                <DropdownItem as="button">
                                    <NavLink
                                        as={Link} to="/modern">
                                        โมเดิร์น
                                    </NavLink>
                                </DropdownItem>
                            </NavDropdown>
                            <NavDropdown className="p-2" title="ผู้หญิง" drop={isMobile ? "down" : "right"}>
                                <DropdownItem as="button">
                                    <NavLink as={Link} to="/standard">
                                        มาตรฐาน
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem as="button">
                                    <NavLink
                                        as={Link} to="/modern">
                                        โมเดิร์น
                                    </NavLink>
                                </DropdownItem>
                            </NavDropdown>
                            <Dropdown.Divider />
                            <NavDropdown className="p-2" title="ทุกเพศ" drop={isMobile ? "down" : "right"}>
                                <DropdownItem as="button">
                                    <NavLink
                                        as={Link} to="/standard">
                                        มาตรฐาน
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem as="button">
                                    <NavLink
                                        as={Link} to="/modern">
                                        โมเดิร์น
                                    </NavLink>
                                </DropdownItem>
                            </NavDropdown>
                        </NavDropdown>
                        <NavDropdown title="โลงศพสำหรับเด็ก">
                            <NavDropdown className="p-2" title="เด็กผู้ชาย" drop={isMobile ? "down" : "right"}>
                                <DropdownItem as="button">
                                    มาตรฐาน
                                    </DropdownItem>
                                <DropdownItem as="button">โมเดิร์น</DropdownItem>
                            </NavDropdown>
                            <NavDropdown className="p-2" title="เด็กผู้หญิง" drop={isMobile ? "down" : "right"}>
                                <DropdownItem as="button">มาตรฐาน</DropdownItem>
                                <DropdownItem as="button">โมเดิร์น</DropdownItem>
                            </NavDropdown>
                            <Dropdown.Divider />
                            <NavDropdown className="p-2" title="ทุกเพศ" drop={isMobile ? "down" : "right"}>
                                <DropdownItem as="button">
                                    มาตรฐาน
                                </DropdownItem>
                                <DropdownItem as="button">
                                    โมเดิร์น
                                </DropdownItem>
                            </NavDropdown>
                        </NavDropdown>
                        <NavLink as={Link} to="/">ติดต่อเรา</NavLink>
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
