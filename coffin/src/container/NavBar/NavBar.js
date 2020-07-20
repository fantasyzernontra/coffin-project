import React, { Component } from 'react'
import {} from 'screen'

import Aux from '../../hoc/Aux/Aux'
import styles from './NavBar.module.css'

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink,
    NavDropdown,
    DropdownItem,
}
    from 'react-bootstrap'

class NavBar extends Component {
    

    render() {

        return (
            <Aux>
                
                <Navbar collapseOnSelect bg="light" variant="light" expand="lg" sticky="top">
                    <NavbarBrand className="p-lg-3">
                        จริงใจโลงศพ
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse color="dark">
                        <Nav className="ml-lg-auto pr-lg-5 mr-lg-5">
                            <NavLink href="#">หน้าแรก</NavLink>
                            <NavDropdown title="โลงศพสำหรับผู้ใหญ่">
                                <NavDropdown className="p-2" title="ผู้ชาย" >
                                    <DropdownItem as="button">มาตรฐาน</DropdownItem>
                                    <DropdownItem as="button">โมเดิร์น</DropdownItem>
                                </NavDropdown>
                                <NavDropdown className="p-2" title="ผู้หญิง" drop="right">
                                    <DropdownItem as="button">มาตรฐาน</DropdownItem>
                                    <DropdownItem as="button">โมเดิร์น</DropdownItem>
                                </NavDropdown>
                            </NavDropdown>
                            <NavDropdown title="โลงศพสำหรับเด็ก">
                                <NavDropdown className="p-2" title="เด็กผู้ชาย" drop="down">
                                    <DropdownItem as="button">มาตรฐาน</DropdownItem>
                                    <DropdownItem as="button">โมเดิร์น</DropdownItem>
                                </NavDropdown>
                                <NavDropdown className="p-2" title="เด็กผู้หญิง" drop="down">
                                    <DropdownItem as="button">มาตรฐาน</DropdownItem>
                                    <DropdownItem as="button">โมเดิร์น</DropdownItem>
                                </NavDropdown>
                            </NavDropdown>
                            <NavLink>ติดต่อเรา</NavLink>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </Aux>
        )
    }

}

export default NavBar
