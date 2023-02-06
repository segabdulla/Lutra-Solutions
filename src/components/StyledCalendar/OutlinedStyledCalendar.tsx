import {FC} from 'react'
import {  Modal } from '@mantine/core';
import { Calendar } from '@mantine/dates';

interface Props {
    isOpen: boolean,
    setIsOpen: (arg: boolean) => void,
    dateValue: Date,
    setDateValue: (arg: Date) => void
}

const OutlinedStyledCalendar:FC<Props> = ({isOpen, setIsOpen, dateValue, setDateValue }: Props) => (
    <Modal 
        opened={isOpen} 
        onClose={() => setIsOpen(false)} 
        centered
        padding={15}
        withCloseButton={false}
        radius={10}
        zIndex={600}
        size="auto"
      >
        <Calendar value={dateValue} onChange={setDateValue} />
      </Modal>
  );


export default OutlinedStyledCalendar;