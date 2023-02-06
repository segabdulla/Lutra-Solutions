import React, { useState } from "react"
import { Tabs } from '@mantine/core';
import {
    TruckDelivery
} from 'tabler-icons-react';

// Custom-Components
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb"
import StyledTabs from "../../../components/StyledTab/StyledTab";

// Unassigned-Shipment listing
import UnassignedShipment from "./UnassignedShipment/UnassignedShipment";
import PickupShipment from "./PickupShipment/PickupShipment";
import ArrivalShipment from "./ArrivalShipment/ArrivalShipment";
import LongDistanceShipment from "./LongDistanceShipment/LongDistanceShipment";
import EndMileShipment from "./EndMileShipment/EndMileShipment";
import CompletedShipment from "./CompletedShipment/CompletedShipment";


const Shipment = () =>{

    const [isCreateModal, setIsCreateModal] = useState<boolean>(false);

    return(
    <>
        <Breadcrumb 
            title="Shipment"
            icon={<TruckDelivery size={18}/>}
        />
       <StyledTabs defaultValue="1">
        <Tabs.List>
            <Tabs.Tab value="1">
                Unassigned Shipment <span>50</span>
            </Tabs.Tab>
            <Tabs.Tab value="2">
                Pickup shipment from Vendor <span>10</span>
            </Tabs.Tab>
            <Tabs.Tab value="3">
                Arrived to Nearest Hub <span>0</span>
            </Tabs.Tab>
            <Tabs.Tab value="4">
                Long-Distance Hub <span>0</span>
            </Tabs.Tab>
            <Tabs.Tab value="5">
                End-Mile <span>50</span>
            </Tabs.Tab>
            <Tabs.Tab value="6">
               Completed <span>10</span>
            </Tabs.Tab>
            <Tabs.Tab value="7">
              Verified<span>0</span>
            </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="1">
            <UnassignedShipment />
        </Tabs.Panel>
        <Tabs.Panel value="2">
            <PickupShipment />
        </Tabs.Panel>
        <Tabs.Panel value="3">
            <ArrivalShipment />
        </Tabs.Panel>
        <Tabs.Panel value="4">
            <LongDistanceShipment />
        </Tabs.Panel>
        {/* <Tabs.Panel value="5">
            <EndMileShipment />
        </Tabs.Panel>
        <Tabs.Panel value="6">
            <CompletedShipment />
        </Tabs.Panel> */}
       </StyledTabs>
    </>
)}

export default Shipment
