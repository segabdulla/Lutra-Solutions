import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useForm } from '@mantine/form';
import { Box, Card, Image, TextInput, PasswordInput, Button, Title, Group, Tabs } from '@mantine/core';

import { useNavigate } from 'react-router-dom';

// Utility-Service
import { setUserSession } from '../../utils/AuthService';

// import { loginService } from '../../service/auth.service'
import Loading from '../Loading/Loading';

/*
    Props-Funcation: 
    1. logo props for logo-image path
        > Value-type: string
    2. LogoVariantInside for set logo in inside of Card Component
        >  Value-type: Boolean
    2. LogoVariantOutside for set logo in outside of Card Component
        >  Value-type: Boolean
*/

const LoginForm = ({
    shadow = 'lg',
}) => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<string | null>('Admin');
    const form = useForm({
        initialValues: {
            mobile: '',
            password: '' 
        },
    });
    const [loading, setLoading] = useState(false);

    const handleLogin = async (values: any, e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUserSession("askjdfhaboinionn", {
            mobile: values?.mobile,
            password: values?.password,
            userType: activeTab
        });
        navigate('/');
        // setLoading(true);
        // const result = await loginService({
        //         mobile: values.mobile,
        //         password: values.password,
        //         userType
        // })
        // if(result?.data?.success){
        //     setLoading(false);
        //     setUserSession(result?.data?.data?.tokens?.access?.token, result?.data?.data?.user);
        //     navigate('/');
        // }else{
        //     setLoading(false) 
        //     ErrorToast(result);
        // }
        return false;
    }


    if(loading){
        return <Loading /> 
    }

    return (
        <Box style={{ width: '100%' }} >
            <Card 
                sx={()=>({
                    width: '100%', 
                    padding: '65px !important',
                    '@media (max-width: 480px)': {
                        padding: '50px 30px !important',
                    },
                 })}
                shadow={!shadow ? shadow : 'lg'}>
                <Title 
                    sx={(theme)=>({
                        textAlign: 'center',
                        margin: '0 auto 60px auto',
                        display: 'none',
                        fontSize: 28,
                        fontWeight: 900,
                        color: theme.colorScheme === "dark" ?  theme.colors.dark[9] : theme.colors.brand[4],
                        '@media (max-width: 1023px)': {
                            display: 'block'
                          },
                    })}
                order={3}>
                    Lutra solutions
                </Title>
                <Title  
                sx={(theme)=>({
                    margin: '0 auto 50px 0',
                    textAlign: 'left',
                    fontSize: 38,
                    fontWeight: 700,
                    color: theme.colors.brand[1]
                })}
                order={3}>LOGIN</Title>
                <Tabs value={activeTab} onTabChange={setActiveTab}>
                    <Tabs.List style={{marginBottom: 65}}>
                        <Tabs.Tab value="Admin">Admin</Tabs.Tab>
                        <Tabs.Tab value="Merchant">Merchant</Tabs.Tab>
                        <Tabs.Tab value="Driver">Driver</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="Admin">
                        <form onSubmit={form.onSubmit((values, e) => handleLogin(values, e))}>
                            <TextInput
                                required
                                style={{height: 48}}
                                label="Email/Phone number"
                                placeholder="1234567890"
                                {...form.getInputProps('mobile')}
                            />
                            <PasswordInput 
                                required
                                label="Password"
                                placeholder="Password"
                                mt="sm"
                                style={{height: 48, marginTop: 40, marginBottom: 50}}
                                autoComplete="on"
                                {...form.getInputProps('password')}
                            />
                            <Group position="right" mt="xl">
                                <Button variant="filled"
                                    type="submit"
                                    styles={(theme) => ({
                                        root: {
                                            transition: 'all 0.3s ease-in',
                                            marginTop: 20,
                                            width: 240,
                                            height: 50
                                        }
                                    })}
                                >
                                    Login
                                </Button>
                            </Group>
                        </form>
                    </Tabs.Panel>
                    <Tabs.Panel value="Merchant">
                        <form onSubmit={form.onSubmit((values, e) => handleLogin(values, e))}>
                            <TextInput
                                required
                                style={{height: 48}}
                                label="Email/Phone number"
                                placeholder="1234567890"
                                {...form.getInputProps('mobile')}
                            />
                            <PasswordInput 
                                required
                                label="Password"
                                placeholder="Password"
                                mt="sm"
                                style={{height: 48, marginTop: 40, marginBottom: 50}}
                                autoComplete="on"
                                {...form.getInputProps('password')}
                            />
                            <Group position="right" mt="xl">
                                <Button variant="filled"
                                    type="submit"
                                    styles={(theme) => ({
                                        root: {
                                            transition: 'all 0.3s ease-in',
                                            marginTop: 20,
                                            width: 240,
                                            height: 50
                                        }
                                    })}
                                >
                                    Login
                                </Button>
                            </Group>
                        </form>
                    </Tabs.Panel>
                    <Tabs.Panel value="Driver">
                        <form onSubmit={form.onSubmit((values, e) => handleLogin(values, e))}>
                            <TextInput
                                required
                                style={{height: 48}}
                                label="Email/Phone number"
                                placeholder="1234567890"
                                {...form.getInputProps('mobile')}
                            />
                            <PasswordInput 
                                required
                                label="Password"
                                placeholder="Password"
                                mt="sm"
                                style={{height: 48, marginTop: 40, marginBottom: 50}}
                                autoComplete="on"
                                {...form.getInputProps('password')}
                            />
                            <Group position="right" mt="xl">
                                <Button variant="filled"
                                    type="submit"
                                    styles={(theme) => ({
                                        root: {
                                            transition: 'all 0.3s ease-in',
                                            marginTop: 20,
                                            width: 240,
                                            height: 50
                                        }
                                    })}
                                >
                                    Login
                                </Button>
                            </Group>
                        </form>
                    </Tabs.Panel>
                </Tabs>
            </Card>
        </Box>
    );
}

export default LoginForm

LoginForm.prototypes = {
    children: PropTypes.string
}