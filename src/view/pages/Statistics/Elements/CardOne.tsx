import React, {FC} from "react";

import { Box, Card, Text, Image, TextInput, PasswordInput, Button, Title, Group, Tabs } from '@mantine/core';

interface CardProps {
    title: string,
    icon?: React.ReactNode,
    totalTitle?: string,
    totalValue?: string,
    todayTitle?: string,
    todayValue?: string
}

const CardOne:FC<CardProps> = ({
    title, 
    icon, 
    totalTitle, 
    totalValue,
    todayTitle,
    todayValue
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
            '@media (max-width: 1360px)': {
               flexDirection: "column",
               justifyContent: "flex-start",
               alignItems: "flex-start",
               gap: 35
            },
        })}>
            <Box style={{
                display: "flex",
                alignItems: "center",
                gap: 15
            }}>
                <Box style={{
                    height: 70,
                    width: 70,
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#FFFACF", 
                    color: "#8A8025"
                }}>
                    {icon}   
                </Box>
                <Box>
                    <Text
                        style={{
                            color: "#8E9AA0",
                            fontSize: 20
                        }}
                    >
                        {totalTitle}
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
                        {totalValue}
                    </Title>
                </Box>
            </Box>
            <Box sx={()=>({
                display: "flex",
                alignItems: "center",
                position: 'relative',
                gap: 15,
                paddingLeft: 70,
                '@media (max-width: 1480px)': {
                    paddingLeft: 30,
                  },
                '@media (max-width: 1370px)': {
                    "&:before":{
                        display: "none"
                    }
                },
                '@media (max-width: 1360px)': {
                    paddingLeft: 0,
                },
                "&:before":{
                    content: '""',
                    position: "absolute",
                    height: 52,
                    width: 1,
                    background: "#E8E8E8",
                    left: 0,
                    bottom: 15
                }
            })}>
                <Box style={{
                    height: 70,
                    width: 70,
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#D8FFF3", 
                    color: "#238164"
                }}>
                    {icon}   
                </Box>
                <Box>
                    <Text
                        style={{
                            color: "#8E9AA0",
                            fontSize: 20
                        }}
                    >
                        {todayTitle}
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
                        {todayValue}
                    </Title>
                </Box>
            </Box>
        </Box>
    </Card>
)

export default CardOne;