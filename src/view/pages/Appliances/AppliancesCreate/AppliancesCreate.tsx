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


const AppliancesCreate:FC<Props> = ({
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
              borderBottom: '1px solid #EBEBEB',
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
                Create Appliances
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
                  })}>Appliance Name</Text>
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
          </Box>
          <Box 
            sx={()=>({
              padding: '10px 30px 50px 30px',
              '@media (max-width: 580px)': {
                  padding: '10px 0px 50px 0px',
              }
            })}  
          >
            <Box style={{display: 'flex', justifyContent: "space-between"}}>
              <Title 
                  sx={(theme)=>({
                      textAlign: 'left',
                      fontSize: 20,
                      fontWeight: 900,
                      marginBottom: 20,
                      color: theme.colors.brand[4],
                      '@media (max-width: 1024px)': {
                        fontSize: 18
                      },
                  })}
                order={6}>
                  Variations
                </Title>
                <Button 
                  variant="outline"
                  sx={()=>({
                    height: 40,
                    width: 40,
                    background: "#DEE5FD",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#425EBE",
                    borderRadius: "50%",
                    border: "none"
                  })}
                  onClick={() => {
                    setCounter((prevState) => prevState + 1)
                  }}
                >
                  <Plus size={16} />
                </Button>
            </Box>
            <Box style={{borderBottom: "1px solid #EBEBEB", paddingBottom: 15}}>
              <Box sx={()=>({
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 15,
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
                    }
                    })}>Select Brand</Text>
                  <Select 
                    radius={6}
                    sx={()=>({
                      color: "8E9AA0", 
                      fontSize: "18", 
                      flex: '5 1 0',
                      '@media (max-width: 1024px)': {
                        width: "100%"
                        }
                    })}
                    placeholder="Select Brand"
                    data={["Samsung", "Toshiba", "Sony"]}
                    />
              </Box>
              <Box sx={()=>({
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 15,
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
                    }
                    })}>Description</Text>
                  <TextInput 
                    radius={6}
                    sx={()=>({
                      color: "8E9AA0", 
                      fontSize: "18", 
                      flex: '5 1 0',
                      '@media (max-width: 1024px)': {
                        width: "100%"
                        }
                    })}
                    placeholder="Description" />
              </Box>
              <Box sx={()=>({
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 15,
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
                    }
                    })}>Model Number</Text>
                  <TextInput 
                    radius={6}
                    sx={()=>({
                      color: "8E9AA0", 
                      fontSize: "18", 
                      flex: '5 1 0',
                      '@media (max-width: 1024px)': {
                        width: "100%"
                        }
                    })}
                    placeholder="Model Number" />
              </Box>
              <Box sx={()=>({
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 15,
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
                    }
                    })}>Variation Name</Text>
                  <Select 
                    radius={6}
                    sx={()=>({
                      color: "8E9AA0", 
                      fontSize: "18", 
                      flex: '5 1 0',
                      '@media (max-width: 1024px)': {
                        width: "100%"
                        }
                    })}
                    placeholder="Select Brand"
                    data={[
                      "70 inch", 
                      "60 inch", 
                      "50 inch", 
                      "42 inch",
                      "36 inch"
                    ]}
                    />
              </Box>
              <Box sx={()=>({
                display: "flex", 
                justifyContent: "space-between", 
                marginBottom: 15,
                gap: 50,
                '@media (max-width: 1024px)': {
                  flexDirection: "column",
                  gap: 15
                },
              })}>
                <Box sx={()=>({
                      display: "flex",
                      alignItems: "center",
                      flex: "2 1 0",
                      '@media (max-width: 1024px)': {
                        flexDirection: "column",
                        gap: 15
                      },
                  })}>
                    <Text sx={()=>({
                    color: "#8E9AA0", 
                    fontSize: "18", 
                    flex: '1.8 1 0',
                    '@media (max-width: 1024px)': {
                    width: "100%"
                    }
                    })}>Services</Text>
                    <Select 
                    radius={6}
                    sx={()=>({
                      color: "8E9AA0", 
                      fontSize: "18", 
                      flex: '5 1 0',
                      '@media (max-width: 1024px)': {
                        width: "100%"
                        }
                    })}
                    placeholder="Select Brand"
                    data={[
                      "Replacement",
                      "Installation"
                    ]}
                    />
                </Box>
                <Box sx={()=>({
                      display: "flex",
                      alignItems: "center",
                      flex: "1 1 0",
                      '@media (max-width: 1024px)': {
                        flexDirection: "column",
                        gap: 15
                      },
                  })}>
                    <Text sx={()=>({
                    color: "#8E9AA0", 
                    fontSize: "18", 
                    flex: '1 1 0',
                    '@media (max-width: 1360px)': {
                      flex: '2 1 0',
                    },
                    '@media (max-width: 1024px)': {
                    width: "100%"
                    }
                    })}>Price</Text>
                    <TextInput 
                    radius={6}
                    sx={()=>({
                      color: "8E9AA0", 
                      fontSize: "18", 
                      flex: '5 1 0',
                      '@media (max-width: 1024px)': {
                        width: "100%"
                        }
                    })}
                    placeholder="RM" />
                </Box>
              </Box>
              <Box sx={()=>({
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 30,
                      '@media (max-width: 800px)': {
                        flexDirection: "column",
                        gap: 15
                      },
                  })}>
                    <Text sx={()=>({
                      color: "#8E9AA0", 
                      fontSize: "18", 
                      flex: '1 1 0',
                      '@media (max-width: 800px)': {
                        width: "100%"
                      }
                    })}>Dimension</Text>
                    <Box sx={() =>({
                      flex: '5 1 0', 
                      display: "flex", 
                      gap: 30,
                      '@media (max-width: 800px)': {
                        flexDirection: "column",
                        gap: 15,
                        width: "100%"
                      }
                    })}>
                      <TextInput 
                      radius={6}
                      sx={()=>({
                        color: "8E9AA0", 
                        fontSize: "18", 
                        flex: '1 1 0',
                        '@media (max-width: 800px)': {
                          width: "100%"
                        }
                      })}
                      rightSection={<Text style={{fontSize: 17, padding: "0 5px", color: "#8E9AA0"}}>CM</Text>}
                      rightSectionWidth={50}
                      />
                      <TextInput 
                      radius={6}
                      sx={()=>({
                        color: "8E9AA0", 
                        fontSize: "18", 
                        flex: '1 1 0',
                        '@media (max-width: 800px)': {
                          width: "100%"
                        }
                      })}
                      rightSection={<Text style={{fontSize: 17, padding: "0 5px", color: "#8E9AA0"}}>CM</Text>}
                      rightSectionWidth={50}
                      />
                      <TextInput 
                      radius={6}
                      sx={()=>({
                        color: "8E9AA0", 
                        fontSize: "18", 
                        flex: '1 1 0',
                        '@media (max-width: 800px)': {
                          width: "100%"
                        }
                      })}
                      rightSection={<Text style={{fontSize: 17, padding: "0 5px", color: "#8E9AA0"}}>CM</Text>}
                      rightSectionWidth={50}
                      />
                    </Box>
              </Box>
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
                    width: "100%",
                    "br":{
                      display: "none"
                    }
                    }
                    })}>Driver <br/> Commission</Text>
                    <TextInput 
                    radius={6}
                    sx={()=>({
                      color: "8E9AA0", 
                      fontSize: "18", 
                      flex: '5 1 0',
                      '@media (max-width: 1024px)': {
                        width: "100%"
                      }
                    })}
                    rightSection={<Text style={{fontSize: 17, padding: "0 5px", color: "#8E9AA0"}}>RM</Text>}
                    rightSectionWidth={50}
                    />
              </Box>
            </Box>
            <Group 
              position="right" 
              mt="xl"
              sx={()=>({
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
          </Box>
        </form>
        
      </Modal>
    </Box>
  );
};

export default AppliancesCreate;
