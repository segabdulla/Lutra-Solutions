import React, { useState, FC } from 'react';
import {
  Text,
  Button,
  Modal,
  Group,
  Box,
  TextInput,
  Title,
  Checkbox,
  Select,
} from '@mantine/core';
import { Search, Barcode, X } from 'tabler-icons-react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

interface Props {
  isCreateModal: boolean;
  setIsCreateModal: (arg: boolean) => void;
}


const PickupShipmentCreate:FC<Props> = ({
  isCreateModal,
  setIsCreateModal
}) => {
  const dispatch = useDispatch();
  const {state} = useLocation();
  const [formValue, setFromValue] = useState();  
  const [isFinalState, setIsfinalState] = useState<boolean>(false);
  const hendleCancel = () => setIsCreateModal(false)

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
                Pick up shipment from vendor
              </Title>
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
                      flex: "1 1 0",
                      '@media (max-width: 1024px)': {
                        flexDirection: "column",
                        gap: 15
                      },
                  })}>
                    <Text sx={()=>({
                    color: "#8E9AA0", 
                    fontSize: "18", 
                    flex: '2 1 0',
                    '@media (max-width: 1024px)': {
                    width: "100%"
                    }
                    })}>Customer name</Text>
                    <TextInput 
                    radius={6}
                    sx={()=>({
                      color: "#2D363A", 
                      fontSize: "18", 
                      flex: '4 1 0',
                      '@media (max-width: 1024px)': {
                        width: "100%"
                        }
                    })}
                    placeholder="Customer name" />
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
                    flex: '2 1 0',
                    '@media (max-width: 1024px)': {
                    width: "100%"
                    }
                    })}>Phone Number</Text>
                    <TextInput 
                    radius={6}
                    sx={()=>({
                      color: "#2D363A", 
                      fontSize: "18", 
                      flex: '4 1 0',
                      '@media (max-width: 1024px)': {
                        width: "100%"
                        }
                    })}
                    placeholder="Phone Number" />
                </Box>
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
                    width: "100%",
                    "br":{
                      display: "none"
                    }
                    }
                    })}>Destination <br/> Address</Text>
                    <TextInput 
                    radius={6}
                    sx={()=>({
                      color: "#2D363A", 
                      fontSize: "18", 
                      flex: '5.4 1 0',
                      '@media (max-width: 1024px)': {
                        width: "100%"
                      }
                    })}
                    placeholder="Address" 
                    rightSection={<Search size={16}/>}
                    rightSectionWidth={50}
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
                      flex: "1 1 0",
                      '@media (max-width: 1024px)': {
                        flexDirection: "column",
                        gap: 15
                      },
                  })}>
                    <Text sx={()=>({
                    color: "#8E9AA0", 
                    fontSize: "18", 
                    flex: '2 1 0',
                    '@media (max-width: 1024px)': {
                    width: "100%"
                    }
                    })}>Unit Number<br/> <Text style={{fontSize: 14,  color: "#8E9AA0"}}>(optional)</Text> </Text>
                    <TextInput 
                    radius={6}
                    sx={()=>({
                      color: "#2D363A", 
                      fontSize: "18", 
                      flex: '4 1 0',
                      '@media (max-width: 1024px)': {
                        width: "100%"
                        }
                    })}
                    placeholder="Unit Number" />
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
                    flex: '2 1 0',
                    '@media (max-width: 1024px)': {
                    width: "100%"
                    }
                    })}>Landmark<br/> <Text style={{fontSize: 14,  color: "#8E9AA0"}}>(optional)</Text> </Text>
                    <TextInput 
                    radius={6}
                    sx={()=>({
                      color: "#2D363A", 
                      fontSize: "18", 
                      flex: '4 1 0',
                      '@media (max-width: 1024px)': {
                        width: "100%"
                        }
                    })}
                    placeholder="Phone Number" />
                </Box>
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
            <Box style={{borderBottom: "1px solid #EBEBEB", paddingBottom: 15, marginBottom: 25}}>
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
                    })}>Select appliances</Text>
                  <Select 
                    radius={6}
                    sx={()=>({
                      color: "#2D363A", 
                      fontSize: "18", 
                      flex: '5.4 1 0',
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
                      flex: "1 1 0",
                      '@media (max-width: 1024px)': {
                        flexDirection: "column",
                        gap: 15
                      },
                  })}>
                    <Text sx={()=>({
                    color: "#8E9AA0", 
                    fontSize: "18", 
                    flex: '2 1 0',
                    '@media (max-width: 1024px)': {
                    width: "100%"
                    }
                    })}>Select Brand</Text>
                    <Select 
                    radius={6}
                    sx={()=>({
                      color: "#2D363A", 
                      fontSize: "18", 
                      flex: '4 1 0',
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
                    flex: '2 1 0',
                    '@media (max-width: 1024px)': {
                    width: "100%"
                    }
                    })}>Model number</Text>
                     <Select 
                    radius={6}
                    sx={()=>({
                      color: "#2D363A", 
                      fontSize: "18", 
                      flex: '4 1 0',
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
                      flex: "1 1 0",
                      '@media (max-width: 1024px)': {
                        flexDirection: "column",
                        gap: 15
                      },
                  })}>
                    <Text sx={()=>({
                    color: "#8E9AA0", 
                    fontSize: "18", 
                    flex: '2 1 0',
                    '@media (max-width: 1024px)': {
                    width: "100%"
                    }
                    })}>Select Variation</Text>
                    <Select 
                    radius={6}
                    sx={()=>({
                      color: "#2D363A", 
                      fontSize: "18", 
                      flex: '4 1 0',
                      '@media (max-width: 1024px)': {
                        width: "100%"
                        }
                    })}
                    placeholder="Select Variation"
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
                    flex: '2 1 0',
                    '@media (max-width: 1024px)': {
                    width: "100%"
                    }
                    })}>Select Service</Text>
                    <Select 
                    radius={6}
                    sx={()=>({
                      color: "#2D363A", 
                      fontSize: "18", 
                      flex: '4 1 0',
                      '@media (max-width: 1024px)': {
                        width: "100%"
                        }
                    })}
                    placeholder="Select Service"
                    data={[
                      "70 inch", 
                      "60 inch", 
                      "50 inch", 
                      "42 inch",
                      "36 inch"
                    ]}
                    />
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
                      flex: '5.4 1 0', 
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
                        color: "#2D363A", 
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
                        color: "#2D363A", 
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
                        color: "#2D363A", 
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
                        gap: 15,
                        alignItems: "flex-start"
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
                    <Box 
                      sx={() => ({
                        flex: '5.4 1 0',

                      })}
                    >
                      <TextInput 
                      radius={6}
                      sx={()=>({
                        color: "#2D363A", 
                        fontSize: "18", 
                        width: 346,
                        '@media (max-width: 1024px)': {
                          width: "100%"
                        }
                      })}
                        rightSection={<Text style={{fontSize: 17, padding: "0 5px", color: "#8E9AA0"}}>RM</Text>}
                        rightSectionWidth={50}
                      />
                    </Box>
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
                  }
                  })}>Product Barcode</Text>
                   <Box sx={() =>({
                    flex: '5.4 1 0',
                      '@media (max-width: 1024px)': {
                        width: "100%",
                      },
                    })}>
                    <TextInput 
                      radius={6}
                      value="xsdf5668sg"
                      sx={()=>({
                        color: "#2D363A", 
                        fontSize: "18", 
                        flex: '5.4 1 0',
                        width: 240,
                      })}
                      rightSection={<X size={16}/>}
                      rightSectionWidth={50}
                    />
                  </Box>
              </Box>
              <Box style={{borderTop: "1px solid #EBEBEB", paddingTop: 15, marginTop: 25}}>
                <Box sx={()=>({
                      display: "flex",
                      alignItems: "center",
                      '@media (max-width: 1024px)': {
                        flexDirection: "column",
                        gap: 15,
                        alignItems: "flex-start",
                      },
                })}>
                  <Text sx={()=>({
                    color: "#8E9AA0", 
                    fontSize: "18", 
                    flex: '1 1 0',
                    })}>Lorry No.</Text>
                    <Box 
                    style={{
                      flex: '5.4 1 0',
                    }}>
                      <Select 
                        radius={6}
                        sx={()=>({
                          color: "#2D363A", 
                          fontSize: "18", 
                          width: 240,
                        })}
                        placeholder="Select Lorry"
                        data={["99-60-DC", "78-55-AC"]}
                      />
                    </Box>
                </Box>  
                <Box sx={()=>({
                      display: "flex",
                      alignItems: "center",
                      marginTop: 15,
                      '@media (max-width: 1024px)': {
                        flexDirection: "column",
                        gap: 15,
                        alignItems: "flex-start",
                      },
                })}>
                  <Text sx={()=>({
                    color: "#8E9AA0", 
                    fontSize: "18", 
                    flex: '1 1 0',
                    '@media (max-width: 1024px)': {
                    width: "100%",
                    }
                    })}>Trip</Text>
                    <Box sx={() =>({
                      flex: '5.4 1 0',
                        '@media (max-width: 1024px)': {
                          width: "100%",
                        },
                      })}>
                      <Text 
                        sx={()=>({
                          color: "#2D363A", 
                          fontSize: "18", 
                          flex: '5.4 1 0',
                          width: 240,
                        })}
                      >
                       1234567
                      </Text>
                    </Box>
                </Box>  
                <Box sx={()=>({
                      display: "flex",
                      alignItems: "center",
                      marginTop: 15,
                      '@media (max-width: 1024px)': {
                        flexDirection: "column",
                        gap: 15,
                        alignItems: "flex-start",
                      },
                })}>
                  <Text sx={()=>({
                    color: "#8E9AA0", 
                    fontSize: "18", 
                    flex: '1 1 0',
                    '@media (max-width: 1024px)': {
                    width: "100%",
                    }
                    })}>Current location</Text>
                    <Box sx={() =>({
                      flex: '5.4 1 0',
                        '@media (max-width: 1024px)': {
                          width: "100%",
                        },
                      })}>
                      <Text 
                        sx={()=>({
                          color: "#2D363A", 
                          fontSize: "18", 
                          flex: '5.4 1 0',
                          width: 240,
                        })}
                      >
                        Vendor location
                      </Text>
                    </Box>
                </Box>  
                <Box sx={()=>({
                      display: "flex",
                      alignItems: "center",
                      marginTop: 15,
                      '@media (max-width: 1024px)': {
                        flexDirection: "column",
                        gap: 15,
                        alignItems: "flex-start",
                      },
                })}>
                  <Text sx={()=>({
                    color: "#8E9AA0", 
                    fontSize: "18", 
                    flex: '1 1 0',
                    '@media (max-width: 1024px)': {
                    width: "100%",
                    }
                    })}>Status</Text>
                    <Box sx={() =>({
                      flex: '5.4 1 0',
                        '@media (max-width: 1024px)': {
                          width: "100%",
                        },
                      })}>
                      <Text 
                        sx={()=>({
                          color: "#38BC5D", 
                          fontSize: "18", 
                          flex: '5.4 1 0',
                          width: 240,
                        })}
                      >
                        Picked up
                      </Text>
                    </Box>
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
              type="submit"
              sx={()=>({
                width: 240,
                height: 40,
                borderRadius: 6,
                border: "none"
                })}
              >Load</Button>
          </Group>
          </Box>
        </form>
        
      </Modal>
    </Box>
  );
};

export default PickupShipmentCreate;
