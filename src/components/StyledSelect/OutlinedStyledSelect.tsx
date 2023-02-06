import {FC} from 'react'
import { Select } from '@mantine/core';
import { ChevronDown } from 'tabler-icons-react';

interface Props {
    width?: number,
    dataSet :  string[],
    defaultValue?: string,
    dropDownValue: string,
    setDropDownValue: (arg: string) => void;
}


const OutlinedStyledSelect:FC<Props> = ({defaultValue, width = 90, dataSet, dropDownValue, setDropDownValue }: Props) => (
    <Select
        data={dataSet}
        value={dropDownValue}
        onChange={setDropDownValue}
        radius={6}
        placeholder="Select"
        rightSection={<ChevronDown size={14} />}
        rightSectionWidth={30}
        variant="unstyled"
        sx={()=>({
            width,
            fontSize: 18,
            ".mantine-Select-input":{
                color: "#8E9AA0"
            },
            ".mantine-Select-dropdown":{
                background: "#ECF3FF"
            },
            ".mantine-Select-item":{
                color: "#425EBE",
            },
            ".mantine-Select-rightSection":{
                color: "#8E9AA0"
            }
        })}
    />
  );


export default OutlinedStyledSelect;