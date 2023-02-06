import React, { useState, FC } from 'react';
import {
  Text,
  Button,
  Modal,
  Group,
  Box,
  TextInput,
  Title,
  Textarea,
  Select,
  NumberInput 
} from '@mantine/core';
import { useLocation } from 'react-router-dom';
import { DatePicker } from '@mantine/dates';
import { useDispatch } from 'react-redux';
import {
  Plus
} from 'tabler-icons-react';


// Redux-Settings
import { setFilteredList, setAppliancesList, setTotalEntry } from '../../../../redux/appliancesSlice';


interface Props {
  isCreateModal: boolean;
  setIsCreateModal: (arg: boolean) => void;
}


const DriverCreate:FC<Props> = ({
  isCreateModal,
  setIsCreateModal
}) => {
  const dispatch = useDispatch();
  const {state} = useLocation();
  const [formValue, setFromValue] = useState();  
  const hendleCancel = () => setIsCreateModal(false)
  const [counter, setCounter] = useState(1);
// const fetchData = async () => {
//     const result = await vaccinationListService({ page: 1, token: state?.data?.accessToken });
//     if (result?.data?.success) {
//         dispatch(setVaccinationecordListTotalEntry(result?.data?.data?.count));
//         dispatch(setVaccinationRecordList(result?.data?.data?.list));
//     } else {
//         ErrorToast(result);
//     }
//     return true;
// };

// const handleCreate = async (e) => {
//     e.preventDefault();
//     const result = await createVaccinationListService({
//         type: formValue?.type || null,
//         note: formValue?.note || " ",
//         date: formValue?.date || new Date().setHours(0, 0, 0, 0).valueOf() / 1000,
//         token: state?.data?.accessToken
//     });
  
//     if (result?.data?.success) {
//         SuccessToast("Vaccination Record Created");
//         fetchData();
//         hendleCancel();
//     }
//     else {
//       ErrorToast(result);
//     }
 // };

  return (
    <Box>

      <Modal 
        opened={isCreateModal} 
        onClose={() => setIsCreateModal(false)} 
        centered
        size='50%'
        radius={10}
        zIndex={600}
        sx={() => ({
          '@media (max-width: 1450px)': {
            ".mantine-Modal-modal":{
                width: "70%"
              }
          },
          '@media (max-width: 1024px)': {
            ".mantine-Modal-modal":{
                width: "80%"
              }
          },
          '@media (max-width: 580px)': {
            ".mantine-Modal-modal":{
                width: "95%"
              }
          }
        })}
      >
        <form onSubmit={(values) => console.log(values)}>
          <Box 
            sx={()=>({
              padding: '0px 30px 15px 30px',
              '@media (max-width: 580px)': {
                ".mantine-Modal-modal":{
                    width: "95%"
                  },
                  padding: '0px 0px 15px 0px',
              }
            })}  
          >
              <Title 
                sx={(theme)=>({
                    textAlign: 'left',
                    fontSize: 28,
                    fontWeight: 900,
                    marginBottom: 20,
                    color: theme.colors.brand[4],
                    '@media (max-width: 1024px)': {
                      fontSize: 22,
                    },
                })}
              order={3}>
                Add Merchant
              </Title>
              <Box sx={()=>({
                  display: "flex",
                  alignItems: "center",
                  '@media (max-width: 1024px)': {
                   flexDirection: "column",
                   gap: 15
                  },
              })}>
                <Text sx={()=>({
                  color: "#8E9AA0", 
                  fontSize: "18", 
                  flex: '1 1 0',
                  '@media (max-width: 1024px)': {
                   width: "100%"
                   },
                  })}>Merchant Name</Text>
                <TextInput 
                  radius={6}
                  sx={()=>({
                    color: "8E9AA0", 
                    fontSize: "18", 
                    flex: '5 1 0',
                    '@media (max-width: 1024px)': {
                      width: "100%"
                      },
                  })}
                  placeholder="Name" />
              </Box>
              <Box sx={()=>({
                  display: "flex",
                  alignItems: "center",
                  marginTop: 20,
                  '@media (max-width: 1024px)': {
                   flexDirection: "column",
                   gap: 15
                  },
              })}>
                <Text sx={()=>({
                  color: "#8E9AA0", 
                  fontSize: "18", 
                  flex: '1 1 0',
                  '@media (max-width: 1024px)': {
                   width: "100%"
                   },
                  })}>Phone number</Text>
                <TextInput 
                  radius={6}
                  sx={()=>({
                    color: "8E9AA0", 
                    fontSize: "18", 
                    flex: '5 1 0',
                    '@media (max-width: 1024px)': {
                      width: "100%"
                      },
                  })}
                  placeholder="Phone Number" />
              </Box>
              <Box sx={()=>({
                  display: "flex",
                  marginTop: 20,
                  '@media (max-width: 1024px)': {
                   flexDirection: "column",
                   gap: 15
                  },
              })}>
                <Text sx={()=>({
                  color: "#8E9AA0", 
                  fontSize: "18", 
                  flex: '1 1 0',
                  '@media (max-width: 1024px)': {
                   width: "100%"
                   },
                  })}>Address</Text>
                <Textarea 
                  radius={6}
                  sx={()=>({
                    color: "8E9AA0", 
                    fontSize: "18", 
                    flex: '5 1 0',
                    '@media (max-width: 1024px)': {
                      width: "100%"
                      },
                  })}
                  placeholder="Address" />
              </Box>
          </Box>
          <Group 
              position="right" 
              mt="xl"
              sx={()=>({
                padding: '0px 30px 15px 30px',
                '@media (max-width: 780px)': {
                 "&.mantine-Group-root":{
                  justifyContent: "center"
                 }
                }
              })}
             >
            <Button 
            variant="outline" 
            onClick={hendleCancel}
            sx={()=>({
              width: 240,
              height: 40,
              borderRadius: 6,
              color: "#2D363A",
              background: "#D8D8D8",
              border: "none"
            })}
            >
              Cancel
            </Button>
            <Button
             type="submit"
             sx={()=>({
              width: 240,
              height: 40,
              borderRadius: 6,
              border: "none"
              })}
             >Save</Button>
          </Group>
        </form>
        
      </Modal>
    </Box>
  );
};

export default DriverCreate;
