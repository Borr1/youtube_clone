import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
    setSearchTerm('');
  };
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 3,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(input) => {
          setSearchTerm(input.target.value);
        }}
      />
      <IconButton type="submit" sx={{ color: 'red', p: '10px' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
