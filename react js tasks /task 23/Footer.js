import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#1976d2', color: '#fff', p: 2, mt: 5, textAlign: 'center' }}>
      <Typography variant="body1">© 2025 MUI Practice. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
