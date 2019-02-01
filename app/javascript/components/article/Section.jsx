import React from 'react';
import PropTypes from 'prop-types';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CreateIcon from '@material-ui/icons/Create';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Paper from '@material-ui/core/Paper';

import Switcher from './Switcher';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e, value) {
    this.setState({ value: value });
  };

  onClick(id) {
    this.props.deleteSection(id);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Grid item xs={6} container alignItems="center" justify="center">
        <Paper className={classes.card}>
          <Switcher type={value}/>
        </Paper>
        <BottomNavigation onChange={this.onChange} >
          <BottomNavigationAction label="文章" icon={<CreateIcon />} />
          <BottomNavigationAction label="イメージ" icon={<PhotoCamera />} />
          <BottomNavigationAction label="プレビュー" icon={<VisibilityIcon />} />
          <BottomNavigationAction label="削除" icon={<DeleteIcon onClick={() => this.onClick(this.props['data-key'])} />} />
        </BottomNavigation>
      </Grid>
    )
  }
}

Section.propTypes = {
  deleteSection: PropTypes.func.isRequired,
}

export default Section;
