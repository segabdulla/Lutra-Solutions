import React, { useState, useEffect } from "react"
import {Box, Button} from '@mantine/core';
import {
    LayoutDashboard, 
    EaseInOut, 
    MapPin,
    ClipboardList,
    Plus,
    Truck,
    Users
} from 'tabler-icons-react';
import { StorefrontOutline, AddOutline, TrashOutline} from 'react-ionicons'


import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb"

// Listing Table
import MerchantListing from "./MerchantListing/MerchantListing";
// Search Form
import SearchForm from "./Search/Search";
// Create Modal
import MerchantCreate from "./MerchantCreate/MerchantCreate";
// Delete Modal
import MerchantDelete from "./MerchantDelete/MerchantDelete";
// Custom Component
import FilledStyledSelect from "../../../components/StyledSelect/FilledStyledSelect";

const Merchant = () =>{

    const [isCreateModal, setIsCreateModal] = useState<boolean>(false);
    const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);
    const [shipmentType, setShipmentType] = useState<string>('Export');

    return(
    <>
        <Breadcrumb 
            title="Merchant"
            icon={
            <StorefrontOutline
                height="20px"
                width="20px"
            />}
        />
        <Box sx={(theme)=>({ 
            borderRadius: 10,     
            padding: 10,
            background: theme.colorScheme !== "dark" ? "#ffffff" : theme.colors.dark[7]
        })}>
            <Box sx={() => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 0',
                gap: 30,
                flexWrap: "wrap",

                // '@media (max-width: 760px)': {
                //     justifyContent: 'center',
                //     flexDirection: 'column',
                //     gap: 30
                // }
            })}>
                 <Box sx={()=>({
                    flex: "2 1 0"
                })}>
                    <Button 
                        leftIcon={<AddOutline height="18px" width="18px" color="#FFFFFF" />} 
                        style={{borderRadius: 10, 
                        minHeight: 45,
                        minWidth: 250
                    }}
                        onClick={() => {
                            setIsCreateModal(true);
                        }}
                        >
                        Add Merchant
                    </Button>
                </Box>
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
                            <TrashOutline height="18px" width="18px" />
                        </Button>
                        <FilledStyledSelect 
                        dataSet={["Import","Export", "Cargo",]}
                        dropDownValue={shipmentType}
                        setDropDownValue={setShipmentType}
                        defaultValue="Export" />
                    </Box>
                </Box>
            </Box>
            <MerchantListing/>
        </Box>
       { isCreateModal &&
        <MerchantCreate isCreateModal={isCreateModal} setIsCreateModal={setIsCreateModal} />
       }
       { isDeleteModal &&
        <MerchantDelete isOpen={isDeleteModal} setIsOpen={setIsDeleteModal} />
       }
    </>
)}

export default Merchant
