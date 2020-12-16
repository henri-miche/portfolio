import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav,NavbarContainer,NavLogo,
MobileIcon,
NavMenu,
NavItem,
NavLinks,
NavLinks2,
} from './NavbarElements';

export const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='home'>Henri Michel</NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="sobre">Sobre</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portfolio">Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contato">Contato</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks2 href="https://github.com/henri-miche" target="_blank">Github</NavLinks2>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}
export default Navbar;