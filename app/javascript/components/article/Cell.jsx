import React from 'react';
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

import ImageDropZone from './ImageDropZone';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  getComponents(type, id) {
    if (type === 'text') {
      return <TextField
        name="article[bodys][]"
        multiline
        rowsMax="10"
        margin="normal"
      />
    } else if(type === 'image') {
      return <ImageDropZone name="article[bodys][]" />
    } else if (type === 'preview') {
      return <div name="preview" />
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
  type: PropTypes.string.isRequired,
};

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: 'text' };
    this.changeContent = this.changeContent.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  changeContent(type, e) {
    this.setState({type: type})
  };

  onClick(id) {
    this.props.deleteCell(id);
  };

  render() {
    const { classes } = this.props;
    const { type } = this.state;

    return (
      <Grid item xs={6} container alignItems="center" justify="center">
        <Card className={classes.card}>
          <CardContent>
            <Content type={type} {...this.props}/>
          </CardContent>
          <CardActions>
            <IconButton>
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
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}

Cell.propTypes = {
  deleteCell: PropTypes.func.isRequired,
}

export default Cell
