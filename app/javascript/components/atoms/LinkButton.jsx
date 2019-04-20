import React from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Link } from "react-router-dom";

function LinkButton({to, children}) {
  return (
    <Router forceRefresh={true}>
      <Button variant="contained" component={Link} to={to}>
        {children}
      </Button>
    </Router>
  )
}

export default LinkButton;
