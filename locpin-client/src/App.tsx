import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

function App() {
  return (
    <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Typography variant="h2" component="h2">
          Roboto
      </Typography>
    </div>
  );
}

export default App;
