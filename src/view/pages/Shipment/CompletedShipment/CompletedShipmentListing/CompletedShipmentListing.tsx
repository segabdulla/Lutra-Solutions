import React, { FC, useEffect, useState } from "react"
import {Box, Button, Text} from '@mantine/core';
import DataTable from 'react-data-table-component';


// View Completion Modal
import EndMileShipmentCompletion from "../CompletedShipmentCompletion/CompletedShipmentCompletion";

// Fake-Data import
import Data from "../Data/Data"

interface Props{
  dataSet :  string[],
}

const CompletedShipmentListing = () => {
  const [isCompletionModal, setIsCompletionModal] = useState(false);
  const [formValue, setFormValue] = useState({});
    const columns = [
        {
          name: "Name",
          selector: (row: any) => row?.name,
          sortable: false,
          minWidth: "150"
        },
        {
            name: "Destination Address",
            selector: (row: any) => row?.address,
            sortable: false
        },
        {
          name: "Delivery Date/Time",
          selector: (row: any) => row?.deliveryTime,
          sortable: false
      },
        {
            name: "Assigned Lorry",
            selector: (row: any) => row?.lorryNumber,
            sortable: false
        },
        {
          name: "Trip Number",
          selector: (row: any) => row?.trip,
          sortable: false
        },
        {
          name: "Driver Commissions",
          selector: (row: any) => `RM ${row?.trip}`,
          sortable: false
        },
        {
            name: "Completion Report",
            selector: (row: any) =>  
            <Text 
            onClick={()=>{
              setFormValue(row);
              setIsCompletionModal(true);
            }}
            sx={()=>({
              textDecoration: "underline", 
              color:  "#425EBE",
              cursor: "pointer"
            })}>View</Text>,
            sortable: false
        }
    ];

    return(
      <>
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
      {isCompletionModal &&
        <EndMileShipmentCompletion 
        formValue={formValue}
        isCompletionModal={isCompletionModal}
        setIsCompletionModal={setIsCompletionModal}
        />
      }
      </>
    )
}

export default  CompletedShipmentListing
