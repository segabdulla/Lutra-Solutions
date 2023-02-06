
import React, { FC } from 'react';
import {
  AppShell,
  Box,
  useMantineTheme
} from '@mantine/core';

import { useSelector } from 'react-redux';

import { selectIsSidemenuOpen } from '../redux/utilitySlice';

import NavBar from '../components/Navigations/NavBar';
import AppHeader from '../components/Navigations/HeaderMenu';

interface Props {
    children: React.ReactNode;
}

const Layout:FC<Props> = ({children}) => {
  const theme = useMantineTheme();
  
  return (
    <AppShell
      zIndex={500}
      padding="md"
      navbar={
      <Box sx={() =>
        ({'.mantine-Navbar-hidden': {
        display: 'none'
      }})}>
        <NavBar/>
      </Box>}
      header={<AppHeader />}
      styles={() => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Box
        style={{ position: 'relative' }}
        // sx={() => ({
        //   margin: '100px auto 0 auto'
        // })}
      >
        {children}
      </Box>
    </AppShell>
  )
};


export default Layout;
