import React from 'react';
import Box from '@material-ui/core/Box';
import Search from './search/SearchContainer.connect';
import ListingsList from './listings/ListingsList.connect';

function App() {
  return (
    <Box className="app">
      <Search />
      <ListingsList />
    </Box>
  );
}

export default App;
