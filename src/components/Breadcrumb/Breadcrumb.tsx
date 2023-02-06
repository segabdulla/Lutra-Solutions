import React, {FC} from 'react';
import {  useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { 
    Box, 
    Burger, 
    Text
  } from '@mantine/core';

  import { selectIsSidemenuOpen, setSidemenuOpen } from '../../redux/utilitySlice';

interface INavigation {
 
    title: string,
    icon?: React.ReactNode;
}

const Breadcrumb:FC<INavigation> = ({title, icon }) => {
    const isSidemenuOpen = useSelector(selectIsSidemenuOpen);
    const dispatch = useDispatch();
    return (
        <Box sx={(theme)=> ({
            minHeight: 80,
            boxShadow: theme?.colorScheme !== "dark" ? '0px 0px 4px 3px rgb(241 241 241)' : '',
            display: 'flex',
            padding: '0 30px',
            alignItems: 'center',
            background: theme?.colorScheme !== "dark" ? '#ffffff' : theme.colors.dark[7],
            gap: 20,
            borderRadius: 10,
            marginBottom: 30
        })}>
            <Burger
                opened={isSidemenuOpen}
                onClick={() =>  dispatch(setSidemenuOpen(!isSidemenuOpen))}
                size="sm"
            />
            {icon &&
                <Box sx={(theme)=> ({
                    height: 40,
                    width: 40,
                    borderRadius: "50%",
                    background: '#ECF3FF',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: theme.colors.brand[5],
                    "span": {
                        lineHeight: 0,
                        "svg":{
                            color: theme.colors.brand[5]
                        }
                    }
                })}>
                    {icon}
                </Box>
            }
            <Text sx={()=>({
                fontSize: 25,
                "@media (max-width: 480px)":{
                    fontSize: 20
                }
            })}>{title}</Text>

       </Box>
    )
}

export default Breadcrumb
