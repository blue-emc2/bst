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

class TabContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTextOrImage(type, id) {
    if (type === 'text') {
      return <TextField
        name="article[bodys][]"
        multiline
        rowsMax="10"
        margin="normal"
      />
    } else {
      return <ImageDropZone name="article[bodys][]" />
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderTextOrImage(this.props.type, this.props['data-key'])}
      </React.Fragment>
    )
  }
}

TabContainer.propTypes = {
  type: PropTypes.string.isRequired,
};

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'text' };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value });
  };

  onClick(id) {
    this.props.deleteCell(id);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Grid item xs={6} container alignItems="center" justify="center">
        <Card className={classes.card}>
          <CardContent>
            <TabContainer type={value} {...this.props}/>
          </CardContent>
          <CardActions>
            <IconButton>
              <CreateIcon />
            </IconButton>
            <label htmlFor="icon-button-file">
              <IconButton component="span">
                <PhotoCamera />
              </IconButton>
            </label>
            <IconButton>
              <VisibilityIcon />
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
