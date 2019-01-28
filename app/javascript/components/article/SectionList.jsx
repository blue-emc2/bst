import React from 'react';

import Section from './Section';

class SectionList extends React.Component {
  constructor(props) {
    super(props);

    const list = [...Array(props.rowCount)].map((_, index) => index);
    this.state = { sections: list };
    this.deleteSection = this.deleteSection.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.rowCount !== nextProps.rowCount) {
      return true;
    }

    if (this.state.sections.length !== nextState.sections.length) {
      return true;
    }

    return false;
  }

  addSection() {
    const newId = this.state.sections.length;
    this.setState({
      sections: this.state.sections.concat(newId)
    })
  }

  deleteSection(targetId) {
    const newSections = this.state.sections.filter(cell => cell !== targetId);
    // TODO: あとでバリデーションを入れる

    this.setState({
      sections: newSections
    })
  }

  render () {
    console.log(this.state.sections);

    return (
      // sectionsを元にcellを生成する
      this.state.sections.map((id) =>
        <Section
          key={id}
          data-key={id}
          deleteSection={this.deleteSection}
          {...this.props} />
      )
    )
  }
}

export default SectionList;
