import React, {PropTypes} from 'react';

export default class ResultContainer extends React.Component {
  static propTypes: {
      data: PropTypes.text
  }
  render() {
    return (
        <div className="resultCard">{this.props.data}</div>
    );
  }
}
