import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

import ImageDropZone from './ImageDropZone';

// TODO: とりあえずテキストのみをうけとる
function Preview({ data }) {
  return (
    <Card>
      <CardContent>
        <Typography>
          { data }
        </Typography>
      </CardContent>
    </Card>
  );
}

class Switcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: "吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。"
    }

    this.changeContent = this.changeContent.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log("value=", e.target.value);
  }

  changeContent(type) {
    if (type === 0) {
      return <TextField
        name="article[bodys][]"
        multiline
        rowsMax="10"
        margin="normal"
        onChange={this.onChange}
      />
    } else if(type === 1) {
      return <ImageDropZone name="article[bodys][]" />
    } else if (type === 2) {
      return <Preview data={this.state.dummy} />
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.changeContent(this.props.type)}
      </React.Fragment>
    );
  }

}

Switcher.propTypes = {
  type: PropTypes.number.isRequired,
};

export default Switcher;
