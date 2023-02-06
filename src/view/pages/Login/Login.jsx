import React from 'react';
import { Box, Image, Title, Text } from '@mantine/core';
import { useLocation } from 'react-router-dom';

import LoginForm from '../../../components/Forms/LoginForm';


const LoginPage = () => {
  const { state } = useLocation();
  return (
    <Box
      sx={(_) => ({
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: '#EBEBEB',
      })}
    >
       <Title 
          sx={(theme)=>({
              textAlign: 'left',
              margin: '50px auto 80px 95px',
              display: 'none',
              fontSize: 28,
              fontWeight: 900,
              color: theme.colors.brand[4],
              '@media (min-width: 1024px)': {
                display: 'block'
              },
          })}
        order={3}>
          Lutra solutions
        </Title>
      <Box
        sx={(_) => ({
          margin: '0 auto',
          display: 'flex',
          '@media (max-width: 912px)': {
            position: 'absolute',
            left: 0,
            right: 0,
            margin: '0 auto'
          },
        })}
      >
        <Box
          sx={(theme) => ({
            width: 650,
            margin: 'auto',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: theme.colorScheme !== 'dark' ? '#FFFFFF ' : theme.black,
            position: 'relative',
            flexDirection: 'row',
            borderRadius: '5px',
            '@media (max-width: 912px)': {
              width: '80%',
              flexDirection: 'column',
            },
            '@media (max-width: 512px)': {
              width: '90%',
            },
          })}
        >
          {/* <Image
            sx={(_) => ({
              height: '110px',
              width: '150px',
              margin: '20px 0',
              '@media (min-width: 912px)': {
                display: 'none',
              },
            })}
            src={Logo}
            alt="Dashboard Logo"
          /> */}
          <LoginForm userType={state?.role} shadow={false} />
        </Box>
      </Box>
    </Box>

  );
};

export default LoginPage;
