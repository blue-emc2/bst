import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CreateIcon from '@material-ui/icons/Create';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import ImageDropZone from './ImageDropZone';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: "吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。"
    }
  }

  getComponents(type, id) {
    if (type === 0) {
      return <TextField
        name="article[bodys][]"
        multiline
        rowsMax="10"
        margin="normal"
        value={this.state.dummy}
      />
    } else if(type === 1) {
      return <ImageDropZone name="article[bodys][]" />
    } else if (type === 2) {
      return <Preview />
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.getComponents(this.props.type, this.props['data-key'])}
      </React.Fragment>
    )
  }
}

Content.propTypes = {
  type: PropTypes.number.isRequired,
};

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
    this.props.deleteCell(id);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Grid item xs={6} container alignItems="center" justify="center">
        <Paper className={classes.card}>
          <Content type={value} {...this.props}/>
        </Paper>
        <BottomNavigation onChange={this.onChange} >
          <BottomNavigationAction label="文章" icon={<CreateIcon />} />
          <BottomNavigationAction label="イメージ" icon={<PhotoCamera />} />
          <BottomNavigationAction label="プレビュー" icon={<VisibilityIcon />} />
          <BottomNavigationAction label="削除" icon={<DeleteIcon />} />
          {/* <IconButton>
            <CreateIcon onClick={(e) => this.changeContent('text', e)} />
          </IconButton>
            <IconButton>
              <PhotoCamera onClick={(e) => this.changeContent('image', e)} />
            </IconButton>
          <IconButton>
            <VisibilityIcon onClick={(e) => this.changeContent('preview', e)} />
          </IconButton>
          <IconButton aria-label="Delete">
            <DeleteIcon size="small" onClick={() => this.onClick(this.props['data-key'])} />
          </IconButton> */}
        </BottomNavigation>
      </Grid>
    )
  }
}

Section.propTypes = {
  deleteCell: PropTypes.func.isRequired,
}

export default Section
