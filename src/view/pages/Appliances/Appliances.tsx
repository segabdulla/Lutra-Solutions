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

import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb"

// Listing Table
import AppliancesListing from "./AppliancesListing/AppliancesListing";
// Search Form
import SearchForm from "./Search/Search";
// Create Modal
import AppliancesCreate from "./AppliancesCreate/AppliancesCreate";

const Appliances = () =>{

    const [isCreateModal, setIsCreateModal] = useState<boolean>(false);

    return(
    <>
        <Breadcrumb 
            title="Appliances"
            icon={<ClipboardList size={18}/>}
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
                '@media (max-width: 760px)': {
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: 30
                }
            })}>
                <Button 
                    leftIcon={<Plus size={18} />} 
                    style={{borderRadius: 10, 
                    minHeight: 45}}
                    onClick={() => {
                        setIsCreateModal(true);
                      }}
                    >
                    Appliances/Variation
                </Button>
                <Box style={{ display: 'flex', gap: '16px' }}>
                    <SearchForm />
                </Box>
            </Box>
            <AppliancesListing/>
        </Box>
       { isCreateModal &&
        <AppliancesCreate isCreateModal={isCreateModal} setIsCreateModal={setIsCreateModal} />
       }
    </>
)}

export default Appliances
