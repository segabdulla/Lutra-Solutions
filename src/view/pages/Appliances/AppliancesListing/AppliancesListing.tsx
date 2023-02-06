import React, { useEffect } from "react"
import {Box} from '@mantine/core';
import DataTable from 'react-data-table-component';
import {
    LayoutDashboard, 
    EaseInOut, 
    MapPin,
    ClipboardList,
    Truck,
    Users
} from 'tabler-icons-react';

// Fake-Data import
import Data from "../Data/Data"

const AppliancesListing = () => {
    console.log(Data)
    const columns = [
        {
          name: "Name",
          selector: (row: any) => row?.title,
          sortable: false,
          minWidth: "150"
        },
        {
            name: "Brand",
            selector: (row: any) => row?.director,
            sortable: false
        },
        {
            name: "Model Number",
            selector: (row: any) => row?.modelNumber,
            sortable: false
        },
        {
            name: "Variations",
            selector: (row: any) => `${row?.runtime} Inch`,
            sortable: false
        },
        {
            name: "Service",
            selector: (row: any) => row?.title,
            sortable: false,
            minWdth: 250
        },
        {
            name: "Service Amount",
            selector: (row: any) => `RM${row?.runtime}`,
            sortable: false
        },
        {
            name: "Driver Commission",
            selector: (row: any) => `RM${row?.runtime}`,
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

export default  AppliancesListing
