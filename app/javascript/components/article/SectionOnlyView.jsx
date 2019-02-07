import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// TODO: 別componentにしなくても良いかもしれないが、いきなり共通化するとわけが分からなくなる恐れがあるので、別にした。
class SectionOnlyView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={6} container alignItems="center" justify="center">
        <Card>
          <CardContent>
            <Typography>
              We are the champion
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}

SectionOnlyView.propTypes = {
}

export default SectionOnlyView;
