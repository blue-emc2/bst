import React from 'react'
import PropTypes from 'prop-types'

class Articles extends React.Component {
  constructor(props) {
    super(props)
    console.info(props)
  }

  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.articles[0].greeting}
      </React.Fragment>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.array
};

export default Articles
