import React, { useEffect } from "react"
import {Box} from '@mantine/core';

import {
    LayoutDashboard, 
    EaseInOut, 
    MapPin,
    ClipboardList,
    Truck,
    Users
} from 'tabler-icons-react';

import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb"
import CardOne from "./Elements/CardOne";
import CardTwo from "./Elements/CardTwo";
import CardThree from "./Elements/CardThree";
import CardFour from "./Elements/CardFour";
import CardFive from "./Elements/CardFive";

const Statistics = () => {
    return(
    <Box>
        <Breadcrumb 
            title="Dashboard"
            icon={<LayoutDashboard size={18}/>}
        />
        <Box sx={()=>({
            display: 'flex',
            gap: 30,
            marginBottom: 30,
            '@media (max-width: 660px)': {
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
             },
        })}>
            <CardOne 
            title="Number of Trips"
            icon={<MapPin size={26} />}
            totalTitle="Total Trips"
            totalValue="1,000"
            todayTitle="Today’s total Trips"
            todayValue="20"
            />
            <CardOne 
            title="Distance covered"
            icon={<EaseInOut size={26} />}
            totalTitle="Total"
            totalValue="25,000km"
            todayTitle="Today"
            todayValue="50km"
            /> 
        </Box>
        <Box sx={()=>({
            display: 'flex',
            gap: 30,
            marginBottom: 40,
            alignItems: 'flex-start',
            '@media (max-width: 1650px)': {
                flexDirection: "column",
                justifyContent: "flex-start",
             },
        })}>
            <Box sx={()=>({
                display: 'flex',
                gap: 30, 
                flex: '2 1 0',
                flexWrap: 'wrap',
                '@media (max-width: 1280px)': {
                    width: '100%'
                },
                '@media (max-width: 660px)': {
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                },
            })}>
                <Box sx={()=>({
                    flex: '1 1 0',
                    '@media (max-width: 660px)': {
                        width: '100%'
                    },
                    })}>
                    <CardTwo 
                    title = "Trucks"
                    iconTruck = {<Truck size={40} />}
                    iconUsers = {<Users size={40} />}
                    totalTruckTitle = 'Total Trucks'
                    totalTruckValue = "20"
                    todayDriversTitle = 'Total Drivrs'
                    todayDriversValue = "35"
                    />
                </Box>
                <Box sx={()=>({
                    flex: '1 1 0', 
                    display: 'flex', 
                    flexDirection: "column", 
                    gap: 30,
                    '@media (max-width: 660px)': {
                        width: '100%'
                    },
                })}>
                    <CardThree 
                    title="Number of Hubs"
                    icon={<ClipboardList size={30} />}
                    value="10"
                    backgoundColor="#E7E1FF"
                    textColor="#4E32C0"/>
                    <CardThree 
                    title="Number of Shipment"
                    icon={<ClipboardList size={30} />}
                    value="10,000"
                    backgoundColor="#FFF2DF"
                    textColor="#B57A24"/>
                </Box>
                <Box style={{width: '100%'}}>
                    <CardFive title="Shipment Statistics"/>
                </Box>
            </Box>
            <Box sx={()=>({
                display: 'flex',
                gap: 30,
                marginBottom: 30,
                flex: '1 1 0',
                '@media (max-width: 1360px)': {
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                },
                })}>
                    <CardFour 
                        title="Product Stored in hub"
                        data={[
                            {
                                title: "Warehouse 1", 
                                value: 5
                            },
                            {
                                title: "Warehouse 2", 
                                value: 15
                            },
                            {
                                title: "Warehouse 3", 
                                value: 120
                            },
                            {
                                title: "Warehouse 4", 
                                value: 5
                            },
                            {
                                title: "Warehouse 5", 
                                value: 15
                            },
                            {
                                title: "Warehouse 6", 
                                value: 120
                            },
                            {
                                title: "Warehouse 7", 
                                value: 5
                            },
                            {
                                title: "Warehouse 8", 
                                value: 15
                            },
                            {
                                title: "Warehouse 9", 
                                value: 120
                            },
                            {
                                title: "Warehouse 10", 
                                value: 120
                            }
                        ]}
                    />
            </Box>
        </Box>
    </Box>
)}

export default  Statistics
