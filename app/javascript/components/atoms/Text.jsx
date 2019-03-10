import React from 'react';
import Typography from '@material-ui/core/Typography';

function Text(props) {
  return (
    <Typography>
      {props.body}
    </Typography>
  )
}

export default Text;
