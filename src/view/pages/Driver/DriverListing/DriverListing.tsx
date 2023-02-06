import React, { useEffect } from "react"
import {Box, UnstyledButton} from '@mantine/core';
import DataTable from 'react-data-table-component';
import {
    LayoutDashboard, 
    EaseInOut, 
    MapPin,
    ClipboardList,
    Truck,
    Users
} from 'tabler-icons-react';
import { CreateOutline } from 'react-ionicons'

// Fake-Data import
import Data from "../Data/Data"

const DriverListing = () => {
    const columns = [
        {
          name: "Name",
          selector: (row: any) => row?.name,
          sortable: false,
          minWidth: "150"
        },
        {
            name: "Phone Number",
            selector: (row: any) => row?.phoneNumber,
            sortable: false
        },
        {
            name: "Address",
            selector: (row: any) => row?.address,
            sortable: false,
            minWidth: "250"
        },
        {
            name: "Action",
            selector: (row: any) => <UnstyledButton>
              <CreateOutline height="20px" width="20px" color="#8E9AA0" />
            </UnstyledButton>,
            sortable: false
        }
    ];

    return(
        <Box
        sx={() => ({
          minHeight: '100vh',
          '.rdt_TableCol_Sortable div:first-of-type':{
            whiteSpace: 'initial',
            textOverflow: 'initial',
            overflow: 'visible'
          },
          '.rdt_TableCell div:first-of-type':{
            whiteSpace: 'initial',
            padding: '5px 0'
          },
          '@media (max-width: 820px)': {
            overflow: 'scroll',
          },
        })}
      >
        <Box className="rui-filemanager-content">
          <Box className="table-responsive-lg mb-20 inner-content-fix">
                <DataTable
                columns={columns}
                data={Data}
                pagination
                selectableRows
                />
          </Box>
        </Box>
      </Box>
    )
}

export default  DriverListing
