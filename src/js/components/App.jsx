import React, {PropTypes} from 'react';
import TaskList from './TaskList.jsx';

export default class App extends React.Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  }
  render() {
    let {onAddTask, onClear, tasks} = this.props;
    return (
      <div>
        <h1>Learn Flux</h1>
        <TaskList tasks={tasks} />
        <button onClick={onAddTask}>Add New</button>
        <button onClick={onClear}>Clear List</button>
      </div>
    );
  }
}
