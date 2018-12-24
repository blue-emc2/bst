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
        Greeting: {this.props.articles[0].sections[0].body}
      </React.Fragment>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
  sections: PropTypes.arrayOf(PropTypes.array)
};

export default Articles
