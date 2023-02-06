import React, {FC} from "react";

import { Box, Card, Text, Image, TextInput, PasswordInput, Button, Title, Group, Tabs } from '@mantine/core';

interface CardProps {
    title: string,
    data: {
        title: string,
        value: number
    }[]
}

const CardFour:FC<CardProps> = ({
    title, 
    data,
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
        <Box>
                    {data?.map(item=>
                     <Box key={item?.title} sx={()=>({
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: '18px 0',
                        borderBottom: '1px solid #E5E5E5' 
                        })}>
                    <Text
                        style={{
                            color: "#8E9AA0",
                            fontSize: 20
                        }}
                    >
                        {item?.title}
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
                        {item?.value}
                    </Title>
                    </Box>)}
        </Box>
    </Card>
)

export default CardFour;