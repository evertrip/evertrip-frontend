import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
    value: string;
    onChange: (value: string) => void;
    }


const SearchTypeBox: React.FC<Props> = ({ value, onChange }) => {
    const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
    };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={'title'}
          onChange={handleChange}
        >
          <MenuItem value={'title'}>제목</MenuItem>
          <MenuItem value={'author'}>작성자</MenuItem>
          <MenuItem value={'tag'}>태그</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SearchTypeBox;