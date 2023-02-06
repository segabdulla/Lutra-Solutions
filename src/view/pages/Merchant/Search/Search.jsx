import React, {useEffect, useState} from 'react';
import { Input } from '@mantine/core';
import { useDispatch, useSelector } from "react-redux";
import { Search } from 'tabler-icons-react';

// Redux-Settings
import { selectAppliancesList, setFilteredList } from '../../../../redux/appliancesSlice';

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState(null);
    const lists = useSelector(selectAppliancesList); 
    const dispatch = useDispatch();

    useEffect(() => {
        const filteredListData = lists?.filter(item => {
            if (searchTerm === '') {
                return item;
            }
            return ((item.title) && (item.title.toLowerCase().includes(searchTerm))) || 
            ((item.director) && (item.director.toLowerCase().includes(searchTerm)))
        })
        dispatch(setFilteredList(filteredListData))
    },[searchTerm])

    const inputHandler = (e) => {
        setSearchTerm(e.target.value.toLowerCase())
    };

    return(
        <Input 
            onChange={inputHandler}
            icon={<Search size={16} />}
            placeholder="Search By Title"
            radius ={10}
            variant="filled"
            sx={(theme) => ({
                minWidth: '300px',
                ".mantine-Input-input":{
                    height: 45,
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8]  :theme.colors.brand[2],
                },
            })}
        />
    )
}

export default SearchForm;