import React, {PropTypes} from 'react';
import SearchContainer from './SearchContainer.jsx';
import timelineStore from '../stores/timelineStore';
import ResultContainer from './resultContainer.jsx';

export default class App extends React.Component {

  state = {
    content: {tasks: []}
  }
  componentDidMount() {
    timelineStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    timelineStore.removeChangeListener(this._onChange);
  }

  _onChange = () => {
    this.setState({
      content: timelineStore.getAll()
    });
  }
  render() {
    var data=this.state.content.tasks;
    return (
      <div className="timeline-container">
        <SearchContainer />
        <div className="result-container">{data.map(function(item) {
            return (<div key={Math.random()}><ResultContainer data={item} /></div>)
          })}
    </div>
      </div>
    );
  }
}
