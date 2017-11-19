import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap';

export default class navBar extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Compair</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#"><Glyphicon glyph="fire"/></NavItem>
                        <NavItem eventKey={2} href="#"><Glyphicon glyph="arrow-up"/></NavItem>
                        <NavItem eventKey={2} href="#"><Glyphicon glyph="user"/></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

