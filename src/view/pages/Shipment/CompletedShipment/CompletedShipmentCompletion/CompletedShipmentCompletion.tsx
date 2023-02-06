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
  Tabs,
  Image
} from '@mantine/core';
import { Search, Barcode, X } from 'tabler-icons-react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ProductPlaceholder from "../../../../../assets/images/placeHolderProduct.png";

interface Props {
  formValue: object,
  isCompletionModal: boolean;
  setIsCompletionModal: (arg: boolean) => void;
}


const CompletedShipmentCompletion:FC<Props> = ({
  formValue,
  isCompletionModal,
  setIsCompletionModal
}) => {
  const dispatch = useDispatch();
  const {state} = useLocation();
  const [isFinalState, setIsfinalState] = useState<boolean>(false);
  const hendleCancel = () => setIsCompletionModal(false)

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
        opened={isCompletionModal} 
        onClose={() => setIsCompletionModal(false)} 
        centered
        size='50%'
        radius={10}
        zIndex={600}
        padding="xl"
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
              End Mile
            </Title>
        <Tabs defaultValue="Details">
          <Tabs.List>
            <Tabs.Tab value="Details">Details</Tabs.Tab>
            <Tabs.Tab value="Completion report">Completion report</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="Details">
            <Box sx={()=>({
                      display: "flex",
                      alignItems: "center",
                      marginTop: 15,
                      gap: 30,
                      '@media (max-width: 1024px)': {
                        flexDirection: "column",
                        alignItems: "flex-start"
                      },
                })}>
                  <Text sx={()=>({
                    color: "#2D363A", 
                    fontSize: "18", 
                    flex: '1 1 0',
                    display: "flex",
                    justifyContent: "space-between",
                    '@media (max-width: 1024px)': {
                    width: "100%",
                    }
                    })}>
                      <span>
                        Appliance
                      </span>
                      <span>
                        :
                      </span>
                    </Text>
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
                        Warehouse 1
                      </Text>
                    </Box>
            </Box> 
            <Box sx={()=>({
                      display: "flex",
                      alignItems: "center",
                      marginTop: 15,
                      gap: 30,
                      '@media (max-width: 1024px)': {
                        flexDirection: "column",
                        alignItems: "flex-start"
                      },
                })}>
                  <Text sx={()=>({
                    color: "#2D363A", 
                    fontSize: "18", 
                    flex: '1 1 0',
                    display: "flex",
                    justifyContent: "space-between",
                    '@media (max-width: 1024px)': {
                    width: "100%",
                    }
                    })}>
                      <span>
                        Brand
                      </span>
                      <span>
                        :
                      </span>
                    </Text>
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
                        Smsung 
                      </Text>
                    </Box>
            </Box> 
            <Box sx={()=>({
                  display: "flex",
                  alignItems: "center",
                  marginTop: 15,
                  gap: 30,
                  '@media (max-width: 1024px)': {
                    flexDirection: "column",
                    alignItems: "flex-start"
                  },
            })}>
              <Text sx={()=>({
                color: "#2D363A", 
                fontSize: "18", 
                flex: '1 1 0',
                display: "flex",
                justifyContent: "space-between",
                '@media (max-width: 1024px)': {
                width: "100%",
                }
                })}>
                  <span>
                  Model number
                  </span>
                  <span>
                    :
                  </span>
                </Text>
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
                    ABCD123456 
                  </Text>
                </Box>
            </Box> 
            <Box sx={()=>({
                  display: "flex",
                  alignItems: "center",
                  marginTop: 15,
                  gap: 30,
                  '@media (max-width: 1024px)': {
                    flexDirection: "column",
                    alignItems: "flex-start"
                  },
            })}>
              <Text sx={()=>({
                color: "#2D363A", 
                fontSize: "18", 
                flex: '1 1 0',
                display: "flex",
                justifyContent: "space-between",
                '@media (max-width: 1024px)': {
                width: "100%",
                }
                })}>
                  <span>
                    Variation
                  </span>
                  <span>
                    :
                  </span>
                </Text>
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
                    70 inch 
                  </Text>
                </Box>
            </Box> 
            <Box sx={()=>({
                  display: "flex",
                  alignItems: "center",
                  marginTop: 15,
                  gap: 30,
                  '@media (max-width: 1024px)': {
                    flexDirection: "column",
                    alignItems: "flex-start"
                  },
            })}>
              <Text sx={()=>({
                color: "#2D363A", 
                fontSize: "18", 
                flex: '1 1 0',
                display: "flex",
                justifyContent: "space-between",
                '@media (max-width: 1024px)': {
                width: "100%",
                }
                })}>
                  <span>
                    Service
                  </span>
                  <span>
                    :
                  </span>
                </Text>
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
                    Table setup 
                  </Text>
                </Box>
            </Box> 
            <Box sx={()=>({
                  display: "flex",
                  alignItems: "center",
                  marginTop: 15,
                  gap: 30,
                  '@media (max-width: 1024px)': {
                    flexDirection: "column",
                    alignItems: "flex-start"
                  },
            })}>
              <Text sx={()=>({
                color: "#2D363A", 
                fontSize: "18", 
                flex: '1 1 0',
                display: "flex",
                justifyContent: "space-between",
                '@media (max-width: 1024px)': {
                width: "100%",
                }
                })}>
                  <span>
                    Dimension
                  </span>
                  <span>
                    :
                  </span>
                </Text>
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
                    157.80cm x 95.60cm x 36.60cm 
                  </Text>
                </Box>
            </Box> 
            <Box sx={()=>({
                  display: "flex",
                  alignItems: "center",
                  marginTop: 15,
                  gap: 30,
                  '@media (max-width: 1024px)': {
                    flexDirection: "column",
                    alignItems: "flex-start"
                  },
            })}>
              <Text sx={()=>({
                color: "#2D363A", 
                fontSize: "18", 
                flex: '1 1 0',
                display: "flex",
                justifyContent: "space-between",
                '@media (max-width: 1024px)': {
                width: "100%",
                }
                })}>
                  <span>
                    Driver Commision
                  </span>
                  <span>
                    :
                  </span>
                </Text>
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
                    RM 50 
                  </Text>
                </Box>
            </Box> 
            <Box sx={()=>({
                  display: "flex",
                  alignItems: "center",
                  marginTop: 15,
                  marginBottom: 15,
                  gap: 30,
                  '@media (max-width: 1024px)': {
                    flexDirection: "column",
                    alignItems: "flex-start"
                  },
            })}>
              <Text sx={()=>({
                color: "#2D363A", 
                fontSize: "18", 
                flex: '1 1 0',
                display: "flex",
                justifyContent: "space-between",
                '@media (max-width: 1024px)': {
                width: "100%",
                }
                })}>
                  <span>
                    Service Price
                  </span>
                  <span>
                    :
                  </span>
                </Text>
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
                    RM 150 
                  </Text>
                </Box>
            </Box> 
             <Box
              style={{
                padding: "15px 0",
                marginBottom: 15,
                borderTop: "1px solid #EBEBEB",
                borderBottom: "1px solid #EBEBEB",
              }}
             >
              <Title
               sx={(theme)=>({
                textAlign: 'left',
                fontSize: 20,
                fontWeight: 900,
                marginBottom: 15,
                color: theme.colors.brand[4]
              })}
              order={6}>
                Customer detail
              </Title>
              <Text 
                    sx={()=>({
                      color: "#2D363A", 
                      fontSize: "18", 
                      marginBottom: 15
                    })}
                  >
                    Rachel Lee, +60 0987654321
              </Text>
              <Text 
                    sx={()=>({
                      color: "#2D363A", 
                      fontSize: "18", 
                    })}
                  >
                   No. 29 Jln 2/1A Taman Kepong Indah, Kuala Lumpur, Wilayah Persekutuan, Malaysia - 52100
              </Text>
             </Box>

             <Box
              style={{
                padding: "0px 0 15px 0",
                marginBottom: 15,
                borderBottom: "1px solid #EBEBEB",
              }}
             >
              <Title
               sx={(theme)=>({
                textAlign: 'left',
                fontSize: 20,
                fontWeight: 900,
                marginBottom: 15,
                color: theme.colors.brand[4]
              })}
              order={6}>
                Vendor detail
              </Title>
              <Text 
                    sx={()=>({
                      color: "#2D363A", 
                      fontSize: "18", 
                      marginBottom: 15
                    })}
                  >
                    Electronics company, +60 0987654321
              </Text>
              <Text 
                    sx={()=>({
                      color: "#2D363A", 
                      fontSize: "18", 
                    })}
                  >
                   No. 29 Jln 2/1A Taman Kepong Indah, Kuala Lumpur, Wilayah Persekutuan, Malaysia - 52100
              </Text>
             </Box>

            <Box sx={()=>({
                  display: "flex",
                  alignItems: "center",
                  marginTop: 15,
                  gap: 30,
                  '@media (max-width: 1024px)': {
                    flexDirection: "column",
                    alignItems: "flex-start"
                  },
            })}>
              <Text sx={()=>({
                color: "#2D363A", 
                fontSize: "18", 
                flex: '1 1 0',
                display: "flex",
                justifyContent: "space-between",
                '@media (max-width: 1024px)': {
                width: "100%",
                }
                })}>
                  <span>
                    Lorry no.
                  </span>
                  <span>
                    :
                  </span>
                </Text>
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
                   99-64-DC
                  </Text>
                </Box>
            </Box> 
             <Box sx={()=>({
                  display: "flex",
                  alignItems: "center",
                  marginTop: 15,
                  gap: 30,
                  '@media (max-width: 1024px)': {
                    flexDirection: "column",
                    alignItems: "flex-start"
                  },
            })}>
              <Text sx={()=>({
                color: "#2D363A", 
                fontSize: "18", 
                flex: '1 1 0',
                display: "flex",
                justifyContent: "space-between",
                '@media (max-width: 1024px)': {
                width: "100%",
                }
                })}>
                  <span>
                  Trip
                  </span>
                  <span>
                    :
                  </span>
                </Text>
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
                  gap: 30,
                  '@media (max-width: 1024px)': {
                    flexDirection: "column",
                    alignItems: "flex-start"
                  },
            })}>
              <Text sx={()=>({
                color: "#2D363A", 
                fontSize: "18", 
                flex: '1 1 0',
                display: "flex",
                justifyContent: "space-between",
                '@media (max-width: 1024px)': {
                width: "100%",
                }
                })}>
                  <span>
                  Barcode
                  </span>
                  <span>
                    :
                  </span>
                </Text>
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
                   fgeshgf874rwgr
                  </Text>
                </Box>
            </Box> 
            <Box sx={()=>({
                  display: "flex",
                  alignItems: "center",
                  marginTop: 15,
                  gap: 30,
                  '@media (max-width: 1024px)': {
                    flexDirection: "column",
                    alignItems: "flex-start"
                  },
            })}>
              <Text sx={()=>({
                color: "#2D363A", 
                fontSize: "18", 
                fontWeight: 600,
                flex: '1.4 1 0',
                display: "flex",
                justifyContent: "space-between",
                '@media (max-width: 1024px)': {
                width: "100%",
                }
                })}>
                  <span>
                  Delivery date and time
                  </span>
                  <span>
                    :
                  </span>
                </Text>
                <Box sx={() =>({
                  flex: '5 1 0',
                    '@media (max-width: 1024px)': {
                      width: "100%",
                    },
                  })}>
                  <Text 
                    sx={()=>({
                      color: "#38BC5D", 
                      fontSize: "18", 
                      flex: '5.4 1 0',
                      fontWeight: 600
                    })}
                  >
                   05 Jan, Morning (10am - 12pm)
                  </Text>
                </Box>
            </Box> 
          </Tabs.Panel>
          
           <Tabs.Panel value="Completion report">
            <Box style={{
              display: "flex", 
              alignItems: "flex-start", 
              flexDirection: "column",
              justifyContent: "flex-start",
              marginTop: 30,             
            }}>
              <Title 
              sx={(theme)=>({
                  fontSize: 18, 
                  marginBottom: 15,    
                  color: theme.colors.brand[4]
              })}
              order={3}>
                Attached images
              </Title>
              <Box sx={()=>({
                display: "flex",
                gap: 15,
                flexWrap: "wrap"
              })}>
                <Image style={{height: 107, width: 107}} src={ProductPlaceholder} alt="" />
                <Image style={{height: 107, width: 107}} src={ProductPlaceholder} alt="" />
                <Image style={{height: 107, width: 107}} src={ProductPlaceholder} alt="" />
                <Image style={{height: 107, width: 107}} src={ProductPlaceholder} alt="" />
              </Box>
              <Box sx={()=>({
                display: "flex",
                gap: 15,
                marginTop: 20,
                width: '100%',
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between"
              })}>
                <Title 
                  sx={(theme)=>({
                      fontSize: 18,   
                      lineHeight: '20px',
                      color: theme.colors.brand[4]
                  })}
                  order={3}>    
                  Ratings
                </Title>
                <Text 
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 42, 
                    fontSize: 18,
                    background: "#38BC5D",
                    color: "#FFFFFF",
                    borderRadius: 20,
                    minWidth: 220,
                  }}>
                  Google Review Done
                </Text>
              </Box>

              <Box sx={()=>({
                display: "flex",
                flexDirection: "column",
                gap: 15,
                marginTop: 20,
                flexWrap: "wrap"
              })}>
                <Title 
                  sx={(theme)=>({
                      fontSize: 18,   
                      lineHeight: '20px',
                      color: theme.colors.brand[4]
                  })}
                order={3}>    
                  Approval sign
                </Title>
                <Box style={{
                  height: 100,
                  width: 325,
                  border: '1px solid #D1D1D1',
                  borderRadius: 5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Text 
                  style={{
                    fontSize: 18,
                    color: "#2D363A",
                    transform: 'rotate(-25deg)'
                  }}>
                     Rachilee
                  </Text>
                </Box>
              </Box>

            </Box>
          </Tabs.Panel>
        </Tabs>
      </Modal>
    </Box>
  );
};

export default CompletedShipmentCompletion;
