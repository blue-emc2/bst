import React from 'react';

import SectionOnlyView from './SectionOnlyView';

// TODO: 別componentにしなくても良いかもしれないが、いきなり共通化するとわけが分からなくなる恐れがあるので、別にした。
class SectionOnlyViewList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { sections } = this.props.article;

    return (
      sections.map((e, index) =>
        <SectionOnlyView section={e} key={index} />
      )
    )
  }
}

export default SectionOnlyViewList;
