import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { borderRight } from '@mui/system';
import SideBar from './SideBar';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          CopyRight 2022 Borhen Benltaief
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
