import React from 'react'
import {SideBarContainer,Icon,CloseIcon,SideBarWrapper,SideBarMenu,
SidebarLink
} from './SideBarElements';

const Sidebar = ({toggle,isOpen}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle} >
                <CloseIcon  />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SidebarLink to='sobre' onClick={toggle}>
                        Sobre
                    </SidebarLink>
                    <SidebarLink to='portfolio' onClick={toggle}>
                        Portfolio
                    </SidebarLink>
                    <SidebarLink to='contato' onClick={toggle}>
                        Contato
                    </SidebarLink>
                    <SidebarLink to='github' onClick={toggle}>
                        Github
                    </SidebarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}
export default Sidebar;
