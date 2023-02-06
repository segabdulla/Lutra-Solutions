import React, { useState, useEffect } from "react"
import { Box, Button, Text } from '@mantine/core';
import {
    Plus,
    CalendarEvent,
    Trash
} from 'tabler-icons-react';

// Listing Table
import CompletedShipmentListing from "./CompletedShipmentListing/CompletedShipmentListing";
// Delete Modal
import CompletedShipmentDelete from "./CompletedShipmentDelete/CompletedShipmentDelete";
// Search Form
import SearchForm from "./Search/Search";

// Custom Component
import OutlinedStyledSelect from "../../../../components/StyledSelect/OutlinedStyledSelect";
import OutlinedStyledCalendar from "../../../../components/StyledCalendar/OutlinedStyledCalendar";
import FilledStyledSelect from "../../../../components/StyledSelect/FilledStyledSelect";

const CompletedShipment = () =>{

    const [isCreateModal, setIsCreateModal] = useState<boolean>(false);
    const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);
    const [isCalendarModal, setIsCalendarModal] = useState<boolean>(false);
    const [dateValue, setDateValue] = useState<Date>(new Date());
    const [userType, setUserType] = useState<string>('');
    const [shipmentType, setShipmentType] = useState<string>('Export');

    return(
    <>
        <Box sx={(theme)=>({ 
            borderRadius: 10,     
            padding: 10,
            background: theme.colorScheme !== "dark" ? "#ffffff" : theme.colors.dark[7]
        })}>
            <Box sx={() => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                flexWrap: "wrap",
                padding: '20px 0',
                gap: 30,
                // '@media (max-width: 760px)': {
                //     justifyContent: 'center',
                //     flexDirection: 'column',
                // }
            })}>
                <Box 
                    sx={()=>({
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        '@media (max-width: 980px)': {
                            // flexDirection: "column",
                            flexWrap: "wrap"
                        },
                    })}
                >
                    <Box sx={()=>({
                        display: "flex",
                        alignItems: "center",
                        gap: 15
                    })}>
                        <Text sx={(theme)=>({
                            color: theme.colorScheme === "dark" ? "#FFFFFF" : "#2D363A", 
                            fontWeight: 600,
                            fontSize: "18",
                        })}>Sort by :</Text>
                        <OutlinedStyledSelect 
                            dataSet={["Vendor","Admin", "Driver",]}
                            dropDownValue={userType}
                            setDropDownValue={setUserType}/>
                    </Box>
                    <Button 
                        onClick={() => setIsCalendarModal(true) }
                        sx={(theme)=>({
                            height: 45,
                            width: 50,
                            fontSize: 25,
                            padding: 0,
                            borderRadius: 10,
                            color: theme.colorScheme === "dark" ? "#FFFFFF" : "#2D363A",
                            background: theme.colorScheme === "dark" ? "#0c0d21" : "#F4F5F7",
                            "&:hover":{
                                color: theme.colorScheme === "dark" ? "#FFFFFF" : "#2D363A",
                                background: theme.colorScheme === "dark" ? "#0c0d21" : "#F4F5F7"
                            }
                        })}
                    >
                        <CalendarEvent size={25} />
                    </Button>
                    <SearchForm />
                    <Button 
                        onClick={() => setIsDeleteModal(true) }
                        sx={(theme)=>({
                            height: 45,
                            width: 50,
                            fontSize: 25,
                            padding: 0,
                            borderRadius: 10,
                            color: theme.colorScheme === "dark" ? "#FFFFFF" : "#8E9AA0",
                            background: theme.colorScheme === "dark" ? "#0c0d21" : "#F4F5F7",
                            "&:hover":{
                                color: theme.colorScheme === "dark" ? "#FFFFFF" : "#8E9AA0",
                                background: theme.colorScheme === "dark" ? "#0c0d21" : "#F4F5F7"
                            }
                        })}
                    >
                        <Trash size={25} />
                    </Button>
                    <FilledStyledSelect 
                        dataSet={["Import","Export", "Cargo",]}
                        dropDownValue={shipmentType}
                        setDropDownValue={setShipmentType}
                        defaultValue="Month" />
                    </Box>
                </Box>
            <CompletedShipmentListing/>
        </Box>
    
       { isDeleteModal &&
        <CompletedShipmentDelete isOpen={isDeleteModal} setIsOpen={setIsDeleteModal} />
       }
       { isCalendarModal && 
        <OutlinedStyledCalendar
            isOpen={isCalendarModal}
            setIsOpen={setIsCalendarModal}
            dateValue={dateValue}
            setDateValue={setDateValue}
        />
       }
    </>
)}

export default CompletedShipment
