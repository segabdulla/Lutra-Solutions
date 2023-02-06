import React, {FC} from "react";

import { Box, Card, Text, Image, TextInput, PasswordInput, Button, Title, Group, Tabs } from '@mantine/core';

interface CardProps {
    title: string,
    icon?: React.ReactNode,
    value?: string,
    backgoundColor?: any,
    textColor?: any
}

const CardThree:FC<CardProps> = ({
    title, 
    icon, 
    value, 
    backgoundColor = "#E7E1FF",
    textColor = "#4E32C0"
}) => (
    <Card 
        sx={()=>({
            width: '100%', 
            padding: '30px !important',
            borderRadius: 10,
        })}
    >
        <Box sx={()=>({
            display: 'flex',
            justifyContent: "space-between",
            '@media (max-width: 1480px)': {
               flexDirection: "column-reverse",
               justifyContent: "flex-start",
               alignItems: "flex-start",
               gap: 35
            },
        })}>
                <Box>
                    <Text
                         sx={(theme)=>({
                            color: theme?.colorScheme !== "dark" ? theme.colors.brand[4] : theme.colors.dark[9],
                            fontSize: 25
                        })}
                    >
                        {title}
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
                        {value}
                    </Title>
                </Box>
                <Box sx={()=>({
                    height: 70,
                    width: 70,
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${backgoundColor ? backgoundColor : '#E7E1FF'}`, 
                    color: `${textColor ? textColor : '#4E32C0'}`,
                        })}>
                    {icon}   
                </Box>
        </Box>
    </Card>
)

export default CardThree;