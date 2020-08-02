import React, { useState } from 'react'

import { useMediaQuery } from 'react-responsive'

import Aux from '../Aux/Aux'

import {
    Navbar,
    Nav,
    NavLink,
    NavDropdown,
    DropdownItem,
    Dropdown,
    NavItem,
    Container,
    Col,
    Row,
    Image,
    NavbarBrand
}
    from 'react-bootstrap'
import {
    Bag
}
    from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = props => {

    const [expandedControl, setExpandedControl] = useState(false)

    const ExpandedHandler = () => {
        setExpandedControl(!expandedControl)
    }

    const isMobile = useMediaQuery({
        query: '(max-width: 959px)'
    })

    return (
        <Aux>
            <Container className="d-none d-lg-block">
                <Row className="pt-3">
                    <Col lg={2}>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="https://images.unsplash.com/photo-1594882798546-724755e85978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                                roundedCircle
                                width="150"
                                fluid
                                className={styles.logo}
                            />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="text-left"><h1><NavLink as={Link} to="/" className={styles.HeaderBrand}>จริงใจโลงศพ</NavLink></h1></div>
                        <div className="text-left"><h3>ออกแบบโลงศพ มาตรฐาน-โมเดิร์น</h3></div>
                    </Col>
                    <Col lg={3}>
                    </Col>
                    <Col lg={3}>
                        <div className={styles.cartWrapper}>
                            <h5>ตะกร้าสินค้า</h5>
                            <Link to="/" className={styles.cartLink}><Bag size={60} className={styles.cart}/></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Navbar collapseOnSelect expanded={expandedControl} bg="light" variant="light" expand="lg" sticky="top" className={styles.navBar}>
                <NavbarBrand className="d-md-block d-lg-none">
                    <NavLink
                        as={Link}
                        to="/"
                        className={styles.HeaderBrand}
                    >
                        จริงใจโลงศพ
                    </NavLink>
                </NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={ExpandedHandler} />
                <Navbar.Collapse color="dark" className="justify-content-end">
                    <Nav className="ml-lg-auto pr-lg-5 mr-lg-5" as="ul">
                        <NavItem as="li">
                            <NavLink
                                onClick={ExpandedHandler}
                                as={Link} to="/">
                                หน้าแรก
                                </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavDropdown title="โลงศพสำหรับผู้ใหญ่">
                                <NavDropdown className="p-2" title="ผู้ชาย" drop={isMobile ? "down" : "right"}>
                                    <DropdownItem as="button">
                                        <NavLink onClick={ExpandedHandler} as={Link} to={{
                                            pathname: '/standard/adult',
                                            state: {
                                                ageType: 'ผู้ใหญ่',
                                                gender: 'ผู้ชาย',
                                                type: 'มาตรฐาน'
                                            }
                                        }}>มาตรฐาน</NavLink>
                                    </DropdownItem>
                                    <DropdownItem as="button">
                                        <NavLink
                                            onClick={ExpandedHandler}
                                            as={Link} to={{
                                                pathname: '/modern/adult',
                                                state: {
                                                    ageType: 'ผู้ใหญ่',
                                                    gender: 'ผู้ชาย',
                                                    type: 'โมเดิร์น'
                                                }
                                            }}>
                                            โมเดิร์น
                                    </NavLink>
                                    </DropdownItem>
                                </NavDropdown>
                                <NavDropdown className="p-2" title="ผู้หญิง" drop={isMobile ? "down" : "right"}>
                                    <DropdownItem as="button">
                                        <NavLink
                                            onClick={ExpandedHandler}
                                            as={Link} to={{
                                                pathname: '/modern/adult',
                                                state: {
                                                    ageType: 'ผู้ใหญ่',
                                                    gender: 'ผู้หญิง',
                                                    type: 'มาตรฐาน'
                                                }
                                            }}>
                                            มาตรฐาน
                                    </NavLink>
                                    </DropdownItem>
                                    <DropdownItem as="button">
                                        <NavLink
                                            onClick={ExpandedHandler}
                                            as={Link} to={{
                                                pathname: '/modern/adult',
                                                state: {
                                                    ageType: 'ผู้ใหญ่',
                                                    gender: 'ผู้หญิง',
                                                    type: 'โมเดิร์น'
                                                }
                                            }}>
                                            โมเดิร์น
                                    </NavLink>
                                    </DropdownItem>
                                </NavDropdown>
                                <Dropdown.Divider />
                                <NavDropdown className="p-2" title="ทุกเพศ" drop={isMobile ? "down" : "right"}>
                                    <DropdownItem as="button">
                                        <NavLink
                                            onClick={ExpandedHandler}
                                            as={Link} to={{
                                                pathname: '/standard/adult',
                                                state: {
                                                    ageType: 'ผู้ใหญ่',
                                                    gender: 'ทุกเพศ',
                                                    type: 'มาตรฐาน'
                                                }
                                            }}>
                                            มาตรฐาน
                                    </NavLink>
                                    </DropdownItem>
                                    <DropdownItem as="button">
                                        <NavLink
                                            onClick={ExpandedHandler}
                                            as={Link} to={{
                                                pathname: '/modern/adult',
                                                state: {
                                                    ageType: 'ผู้ใหญ่',
                                                    gender: 'ทุกเพศ',
                                                    type: 'โมเดิร์น'
                                                }
                                            }}>
                                            โมเดิร์น
                                    </NavLink>
                                    </DropdownItem>
                                </NavDropdown>
                            </NavDropdown>
                        </NavItem>
                        <NavDropdown title="โลงศพสำหรับเด็ก">
                            <NavDropdown className="p-2" title="เด็กผู้ชาย" drop={isMobile ? "down" : "right"}>
                                <DropdownItem as="button">
                                    <NavLink
                                        onClick={ExpandedHandler}
                                        as={Link}
                                        to={{
                                            pathname: '/standard/child',
                                            state: {
                                                ageType: 'เด็ก',
                                                gender: 'ผู้ชาย',
                                                type: 'มาตรฐาน'
                                            }
                                        }}
                                    >
                                        มาตรฐาน
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem as="button">
                                    <NavLink
                                        onClick={ExpandedHandler}
                                        as={Link}
                                        to={{
                                            pathname: '/modern/child',
                                            state: {
                                                ageType: 'เด็ก',
                                                gender: 'ผู้ชาย',
                                                type: 'โมเดิร์น'
                                            }
                                        }}
                                    >
                                        โมเดิร์น
                                    </NavLink>
                                </DropdownItem>
                            </NavDropdown>
                            <NavDropdown className="p-2" title="เด็กผู้หญิง" drop={isMobile ? "down" : "right"}>
                                <DropdownItem as="button">
                                    <NavLink
                                        onClick={ExpandedHandler}
                                        as={Link}
                                        to={{
                                            pathname: '/standard/child',
                                            state: {
                                                ageType: 'เด็ก',
                                                gender: 'ผู้หญิง',
                                                type: 'มาตรฐาน'
                                            }
                                        }}
                                    >
                                        มาตรฐาน
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem as="button">
                                    <NavLink
                                        onClick={ExpandedHandler}
                                        as={Link}
                                        to={{
                                            pathname: '/modern/child',
                                            state: {
                                                ageType: 'เด็ก',
                                                gender: 'ผู้หญิง',
                                                type: 'โมเดิร์น'
                                            }
                                        }}
                                    >
                                        โมเดิร์น
                                    </NavLink>
                                </DropdownItem>
                            </NavDropdown>
                            <Dropdown.Divider />
                            <NavDropdown className="p-2" title="ทุกเพศ" drop={isMobile ? "down" : "right"}>
                                <DropdownItem as="button">
                                    <NavLink
                                        onClick={ExpandedHandler}
                                        as={Link}
                                        to={{
                                            pathname: '/standard/child',
                                            state: {
                                                ageType: 'เด็ก',
                                                gender: 'ทุกเพศ',
                                                type: 'มาตรฐาน'
                                            }
                                        }}
                                    >
                                        มาตรฐาน
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem as="button">
                                    <NavLink
                                        onClick={ExpandedHandler}
                                        as={Link}
                                        to={{
                                            pathname: '/modern/child',
                                            state: {
                                                ageType: 'เด็ก',
                                                gender: 'ทุกเพศ',
                                                type: 'โมเดิร์น'
                                            }
                                        }}
                                    >
                                        โมเดิร์น
                                    </NavLink>
                                </DropdownItem>
                            </NavDropdown>
                        </NavDropdown>
                        <NavLink
                            onClick={ExpandedHandler}
                            as={Link} to="/">
                            ติดต่อเรา
                        </NavLink>
                        <NavLink
                            as={Link} to="/"
                            className="d-md-block d-lg-none"
                        >
                            ตะกร้าสินค้า <Bag size={30}/>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Aux >
    )

}

export default NavBar
