import React from 'react';
import { Text, Group, List, Header, Anchor  } from '@mantine/core';
import { Link  } from "react-router-dom";

const Footer = () =>(
        <Header p="xs"
            sx={() => ({
                height: '80px',
                '@media (max-width: 1050px)': {
                    width: '100%', 
                    height: 'auto',

                }  
          })}
        >
            <Group sx={() => ({
              height: '100%',
              padding: '15px 50px',
              '@media (max-width: 1050px)': {
                    justifyContent: 'center',
                    flexDirection: 'column-reverse'
                }  
            })}
            position="apart">
                <Text sx={() => ({
                    '@media (max-width: 1050px)': {
                        textAlign: 'center'
                    }  
                })}>
                    Copyright 2022 © Admin | Dr. Mommy Baby by {' '}
                    <Anchor href="https://segwitz.com/" target="_blank">
                         Segwitz Sdn Bhd
                    </Anchor>
                </Text>
            </Group>
        </Header>
    )
export default Footer;