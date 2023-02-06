import React, { FC, useEffect, useState } from "react"
import {Box, Button} from '@mantine/core';
import DataTable from 'react-data-table-component';
import {
    Check
} from 'tabler-icons-react';

// Custom Component
import OutlinedStyledSelect from "../../../../../components/StyledSelect/OutlinedStyledSelect";

// Fake-Data import
import Data from "../Data/Data"

interface Props{
  dataSet :  string[],
}

const LorrySelect:FC<Props> = ({dataSet}: Props) => {
  const [lorry, setLorry] = useState<string>('')
  return (
          <OutlinedStyledSelect 
            dropDownValue ={lorry}
            setDropDownValue={setLorry}
            dataSet = {dataSet}
            width = {110}
          />
  )
}

const ShipmentCShipmentListingreate = () => {
  
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
            name: "Destination Address",
            selector: (row: any) => row?.address,
            sortable: false
        },
        {
            name: "Assigned Lorry",
            selector: (row: any) => <LorrySelect dataSet={row?.lorryNumber} />,
            sortable: false
        },
        {
          name: "Trip Number",
          selector: (row: any) => row?.trip,
          sortable: false
         },
        {
            name: "Bar Code",
            selector: (row: any) => row?.barcode ? 
            <Button sx={()=>({
              height: 28,
              minWidth: 120,
              background: "#38BC5D",
              color: "#FFFFFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              fontSize: 14,
              borderRadius: 20,
              cursor: "not-allowed",
              ".mantine-Button-label":{
                gap: 10
              },
              "&:hover":{
                background: "#38BC5D",
                color: "#FFFFFF",
              }
            })}>
              Scanned
              <Check size={14} />
            </Button> : 
            <Button sx={()=>({
              height: 28,
              minWidth: 120,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              fontSize: 14,
              borderRadius: 20,
              ".mantine-Button-label":{
                gap: 10
              },
            })}>
              Scan
            </Button>
            ,
            sortable: false,
            minWidth: "130"
        },
        {
            name: "Current location",
            selector: (row: any) => row?.currentLocation,
            sortable: false
        },
        {
          name: "Action",
          selector: (row: any) => row?.barcode ? 
          <Button sx={()=>({
            height: 39,
            minWidth: 120,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            fontSize: 14,
            borderRadius: 20,
            ".mantine-Button-label":{
              gap: 10
            },
          })}>
            Load
          </Button> 
          :
          <Button 
          disabled
          sx={()=>({
            height: 39,
            minWidth: 120,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            fontSize: 14,
            borderRadius: 20,
            color: "#FFFFFF !important",
            background: "#D3D3D3 !important",
            ".mantine-Button-label":{
              gap: 10
            },
          })}>
            Load
          </Button>
          ,
          sortable: false,
          minWidth: "130"
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
            padding: '5px 0',
            "&.mantine-Select-item":{
              padding: "8px 12px"
            }
          },
          '@media (max-width: 820px)': {
            overflow: 'scroll',
          },
        })}
      >
        <Box className="rui-filemanager-content">
          <Box className="table-responsive-lg mb-20 inner-content-fix">
                <DataTable
                className="rui-datatable rui-filemanager-table table mb-20 mt-10"
                columns={columns}
                data={Data}
                pagination
                selectableRows
                responsive
                />
          </Box>
        </Box>
      </Box>
    )
}

export default  ShipmentCShipmentListingreate
