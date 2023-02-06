import {FC} from 'react'
import { Select } from '@mantine/core';
import { CaretDownOutline } from 'react-ionicons'

interface Props {
    dataSet :  string[],
    defaultValue?: string,
    dropDownValue: string,
    setDropDownValue: (arg: string) => void;
}


const FilledStyledSelect:FC<Props> = ({defaultValue, dataSet, dropDownValue, setDropDownValue }: Props) => (
    <Select
    data={dataSet}
    value={dropDownValue}
    onChange={setDropDownValue}
    radius={6}
    placeholder="Select"
    rightSection={<CaretDownOutline height="14px" width="14px" />}
    rightSectionWidth={30}
    sx={(theme)=>({
        width: 100,
        height: 45,
        fontSize: 18,
        ".mantine-Select-input":{
            background: "#ECF3FF",
            border: "none",
            color: "#425EBE",
            height: 45
        },
        ".mantine-Select-dropdown":{
            background: "#ECF3FF"
        },
        ".mantine-Select-item":{
            color: "#425EBE",
        },
        ".mantine-Select-rightSection":{
            color: "#425EBE"
        },
        "span": {
            lineHeight: 0,
            "svg": {
                color: theme.colors.brand[5],
                fill: theme.colors.brand[5],
            }
        }
    })}
/>
  );


export default FilledStyledSelect;