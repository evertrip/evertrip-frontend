import * as React from 'react';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface SearchBoxForTagProps {
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  handleEnterKeyPress: (event: React.KeyboardEvent<HTMLDivElement>) => void; // 추가된 props
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const tags: string[] = [
]

const SearchBoxForTag: React.FC<SearchBoxForTagProps> = ({ setTags , handleEnterKeyPress}) => {
  return (
    <Stack spacing={2} sx={{ 
      width: '100%' ,
      bgcolor : "white"
      }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={tags.map((tag) => tag)}
        getOptionLabel={(option) => option}
        onChange={(event, newValue) => setTags(newValue)}
        renderInput={(params) => (
          <TextField 
          {...params} 
          placeholder="태그 검색" 
          variant="outlined" 
          onKeyPress={handleEnterKeyPress} // Enter 키 이벤트 핸들러 추가
          />
        )}
      />
    </Stack>
  );
};

export default SearchBoxForTag;

