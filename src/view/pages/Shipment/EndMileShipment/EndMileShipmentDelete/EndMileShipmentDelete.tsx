import {FC} from 'react'
import {  Modal, Group, Button } from '@mantine/core';

interface Props {
    isOpen: boolean,
    setIsOpen: (arg: boolean) => void,
}   

const EndMileShipmentDelete:FC<Props> = ({isOpen, setIsOpen, }: Props) => {
    const handleCancel = () => setIsOpen(false)
    return(
    <Modal 
        opened={isOpen} 
        onClose={() => setIsOpen(false)} 
        centered
        radius={10}
        zIndex={600}
        size="40%"
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
        <h2>Are you sure! you want to delete?</h2>
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
            onClick={handleCancel}
            sx={()=>({
              width: 180,
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
              width: 180,
              height: 40,
              borderRadius: 6,
              border: "none"
              })}
             >Delete</Button>
          </Group>
          </form>
      </Modal>
  )};

export default EndMileShipmentDelete;