import * as React from 'react';
import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CustomAxios from '../../config/CustomAxios';

interface Tag {
  tagId: number;
  tagName: string;

}

interface SearchBoxForTagProps {
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  handleEnterKeyPress: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

const SearchBoxForTag: React.FC<SearchBoxForTagProps> = ({ setTags, handleEnterKeyPress }) => {
  const [tagOptions, setTagOptions] = useState<string[]>([]);

  const fetchTags = async () => {
    try {
      const response = await CustomAxios('GET', 'http://localhost:8080/api/tags/all');
      const tags = response.data.content as Tag[];
      setTagOptions(tags.map(tag => tag.tagName));
    } catch (error) {
      console.error('Failed to fetch tags:', error);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <Stack spacing={2} sx={{ width: '100%', bgcolor: "white" }}>
      <Autocomplete
        id="tags-outlined"
        options={tagOptions}
        getOptionLabel={(option) => option}
        // onChange={(event, newValue) => setTags(newValue)}
        renderInput={(params) => (
          <TextField 
            {...params} 
            placeholder="태그 검색" 
            variant="outlined" 
            onKeyPress={handleEnterKeyPress}
          />
        )}
      />
    </Stack>
  );
};

export default SearchBoxForTag;
