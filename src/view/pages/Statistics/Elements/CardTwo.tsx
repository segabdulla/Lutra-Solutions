import React, {FC} from "react";

import { Box, Card, Text, Image, TextInput, PasswordInput, Button, Title, Group, Tabs } from '@mantine/core';

interface CardProps {
    title: string,
    iconTruck?: React.ReactNode,
    iconUsers?: React.ReactNode,
    totalTruckTitle?: string,
    totalTruckValue?: string,
    todayDriversTitle?: string,
    todayDriversValue?: string
}

const CardTwo:FC<CardProps> = ({
    title, 
    iconTruck, 
    iconUsers,
    totalTruckTitle, 
    totalTruckValue,
    todayDriversTitle,
    todayDriversValue
}) => (
    <Card 
        sx={()=>({
            width: '100%', 
            padding: '30px !important',
            borderRadius: 10
        })}
    >
        <Title 
          sx={(theme)=>({
              textAlign: 'left',
              margin: '0px auto 30px 0px',
              fontSize: 25,
              color: theme.colors.brand[4],
          })}
            order={4}>
          {title}
        </Title>
        <Box sx={()=>({
            display: 'flex',
            justifyContent: "space-between",
            alignItems: "center",
            gap: 25,
            '@media (max-width: 1480px)': {
               flexDirection: "column",
               justifyContent: "flex-start",
               alignItems: "flex-start",
               gap: 35
            },
        })}>
            <Box sx={()=>({
                display: "flex",
                gap: 5,
                minHeight: 200,
                flexDirection: 'column',
                minWidth: 200,
                background: "#F8F8F8",
                padding: "30px 20px",
                borderRadius: 10,
                '@media (max-width: 1480px)': {
                    width: '100%'
                 },
            })}>
                <Box style={{
                    color: "#3A78F2"
                }}>
                    {iconTruck}   
                </Box>
                <Text
                    style={{
                        color: "#8E9AA0",
                        fontSize: 20
                    }}
                >
                    {totalTruckTitle}
                </Text>
                <Title 
                    sx={(theme)=>({
                        fontSize: 35,
                        color: theme?.colorScheme !== "dark" ? theme.colors.brand[4] : theme.colors.dark[9],
                        '@media (max-width: 912px)': {
                            fontSize: 26,
                            },
                    })}
                        order={6}>
                    {totalTruckValue}
                </Title>
            </Box>
            <Box sx={()=>({
                display: "flex",
                gap: 5,
                minHeight: 200,
                flexDirection: 'column',
                minWidth: 200,
                background: "#F8F8F8",
                padding: "30px 20px",
                borderRadius: 10,
                '@media (max-width: 1480px)': {
                    width: '100%'
                 },
            })}>
                <Box style={{
                    color: "#3A78F2"
                }}>
                    {iconUsers}   
                </Box>
                <Text
                    style={{
                        color: "#8E9AA0",
                        fontSize: 20
                    }}
                >
                    {todayDriversTitle}
                </Text>
                <Title 
                    sx={(theme)=>({
                        fontSize: 35,
                        color: theme?.colorScheme !== "dark" ? theme.colors.brand[4] : theme.colors.dark[9],
                        '@media (max-width: 912px)': {
                            fontSize: 26,
                            },
                    })}
                        order={6}>
                    {todayDriversValue}
                </Title>
            </Box>
        </Box>
    </Card>
)

export default CardTwo;