import React, { useRef} from 'react';
import { Settings2, Trash, Search } from 'tabler-icons-react';
import {  useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
    Box, 
    Header, 
    Menu,
    Title,
    TextInput,
    Group, 
    ActionIcon, 
    useMantineColorScheme,
    Burger
  } from '@mantine/core';


// Auth-Service
import { removeUserSession, getUser, getToken } from '../../utils/AuthService';

import UserButton from '../UtilityButton/UserButton';
import { selectIsSidemenuOpen , setSidemenuOpen } from '../../redux/utilitySlice';

const AppHeader = () => {
    const inputRef = useRef(null);
    const navigate = useNavigate();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const handleLogot = () => {
        removeUserSession();
        navigate('/home'); 
    };
    const dispatch = useDispatch();
    const isSidemenuOpen = useSelector(selectIsSidemenuOpen);
    return (
        <Header p="md" 
            zIndex={600}
            height={80}
            sx={() => ({
                position: 'fixed',
                width: '100%'
            })} 
        >
            <Group 
                sx={() => ({
                    height: '100%'
                })}
                position="apart"
            > 
            <Box sx={() => ({
                display: 'flex',
                gap: 120,
                alignItems: 'center'
            })}>
               <Title 
                    sx={()=>({
                        textAlign: 'left',
                        fontSize: 28,
                        fontWeight: 900,
                        '@media (max-width: 1024px)': {
                            fontSize: 22
                        },
                        '@media (max-width: 480px)': {
                            fontSize: 18
                        },
                    })}
                    order={3}>     
                    Lutra solutions
                </Title>
                {/* <Burger
                opened={isSidemenuOpen}
                onClick={() =>  dispatch(setSidemenuOpen(!isSidemenuOpen))}
                size="sm"
                mr="xl"
                /> */}
                <TextInput 
                sx={(theme) => ({
                    width: 450,
                    '@media (max-width: 1280px)': {
                        width:300,
                    },
                    '@media (max-width: 980px)': {
                        display: 'none'
                    },
                    ".mantine-TextInput-input":{
                        backgroundColor: colorScheme === 'dark' ? theme.colors.dark[8]  :theme.colors.brand[2],
                    }
                })}
                variant="filled"
                radius={20} 
                placeholder="Search anything" 
                icon={<Search style={{ width: 16 }} />} />
            </Box>
            <Box sx={() => ({
                display: 'flex',
                alignItems: 'center',
                gap: 30,
                '@media (max-width: 980px)': {
                    flexDirection: "row-reverse",
                    gap: 15
                }
            })}>
                    <Menu 
                        zIndex={999999}
                        withArrow
                        >
                        <Menu.Target>
                            <UserButton
                                image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                                name="Dani Ginting"
                            />
                        </Menu.Target>
                        <Menu.Dropdown>
                        <Menu.Item 
                            onClick={handleLogot}
                            icon={<Trash size={14} />}
                        >
                            Logout
                        </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>

                     <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                        {colorScheme === 'dark' ? <Settings2 style={{color: '#ffffff'}} size={16} /> : <Settings2 style={{color: '#000000'}} size={16} />}
                    </ActionIcon> 
                    
                    <Box sx={() =>({
                        display: "none",
                        '@media (max-width: 980px)': {
                           display: "block"
                        }
                    })}>
                        <Menu 
                            width={250} 
                            closeOnItemClick={false} 
                            position="left" 
                            transition="slide-left"
                        > 
                            <Menu.Target ref={inputRef}>
                                <Box style={{lineHeight: 0}}>
                                    <Search  size={18} />
                                </Box>
                            </Menu.Target>
                            <Menu.Dropdown
                                sx={()=>({
                                    border: 'none',
                                    background: 'transparent',
                                    transform: 'translateX(15px)!important',
                                    ".mantine-Menu-item": {
                                        background: 'transparent !important',
                                    },
                                    ".mantine-TextInput-input": {
                                        boxShadow: '0px 0px 4px 3px rgb(241 241 241)'
                                    },
                                    '@media (max-width: 370px)': {
                                        transform: 'translateX(70px)!important',
                                    },
                                })}
                            >
                                <Menu.Item>
                                <TextInput 
                                    sx={(theme) => ({
                                        width: 250,
                                        ".mantine-TextInput-input":{
                                            backgroundColor: colorScheme === 'dark' ? theme.colors.dark[8]  :theme.colors.brand[2],
                                        }
                                    })}
                                    variant="filled"
                                    radius={20} 
                                    placeholder="Search anything" 
                                    icon={<Search style={{ width: 16 }} />} 
                                />
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </Box>
                </Box>
            </Group>
        </Header>
    )
}

export default AppHeader
