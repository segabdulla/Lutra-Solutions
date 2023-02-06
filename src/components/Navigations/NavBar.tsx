import React from 'react';
import { Navbar } from '@mantine/core';
import { useSelector } from 'react-redux';

import NavItems from './NavItem'

import { selectIsSidemenuOpen } from '../../redux/utilitySlice';

const NavBar = () => {
  const isSidemenuOpen = useSelector(selectIsSidemenuOpen);
  console.log("isSidemenuOpen", isSidemenuOpen)
  return(
      <Navbar 
        height='100vh'
        p="xs" 
        hidden={isSidemenuOpen} 
        width={{ sm: 200, lg: 250 }}
        position={{ top: 0, left: 0 }}
        sx={() => ({
          '@media (max-width: 800px)': {
            position: 'fixed',
          },  
          width: '200px',
          height:'100%'
        })}
      >
        <Navbar.Section grow mt="md">
          <NavItems />
        </Navbar.Section>
      </Navbar>
    )};
  

export default NavBar;