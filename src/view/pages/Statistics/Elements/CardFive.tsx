import React, {FC, useState} from "react";

import { Box, Card, Text, Select,  Image, TextInput, PasswordInput, Button, Title, Group, Tabs } from '@mantine/core';
import { CaretDown } from 'tabler-icons-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Custom Component
import FilledStyledSelect from "../../../../components/StyledSelect/FilledStyledSelect";

interface CardProps {
    title: string,
}

const CardFive:FC<CardProps> = ({
    title
}) => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      const [duration, setDuration] = useState('Month');
     
    return(
    <Card 
        sx={()=>({
            width: '100%', 
            padding: '30px !important',
            borderRadius: 10
        })}
    >
        <Box sx={()=>({
            display: "flex",
            justifyContent: "space-between"
        })}>
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
                <FilledStyledSelect 
                dataSet={["Day","Month", "Year",]}
                dropDownValue={duration}
                setDropDownValue={setDuration}
                defaultValue="Month" />
            </Box>
        </Box>
        <Box>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart
            height={350}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="natural" dataKey="uv" stroke="#03A7FA" fill="#D1EFFF" />
          </AreaChart>
        </ResponsiveContainer>   
        </Box>
    </Card>
)}

export default CardFive;