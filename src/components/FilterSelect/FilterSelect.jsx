import {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterSelect = ({state,setState,array,title}) => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setState(event.target.value);
    };
    return (
        <Box sx={{ minWidth: '120px' }} className='catalog__aside-select'>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state}
                    label={title}
                    onChange={handleChange}
                >
                    {
                        array.map((item) => (
                            <MenuItem key={item.id} value={item.value}>{
                                item === 'asc' ? 'по возростанию цены' : item === 'desc' ? 'по убыванию цены' : item === 'rate' ? 'по популярности' : item
                            }</MenuItem>
                        ))
                    }
                    <MenuItem value={' '}> По убыванию</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default FilterSelect;