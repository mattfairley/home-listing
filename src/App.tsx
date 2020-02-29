import React from 'react';
import Box from '@material-ui/core/Box';
import Search from './search/SearchContainer.connect';

function App() {
  return (
    <Box className="app">
      <Search />
    </Box>
  );
}

export default App;
