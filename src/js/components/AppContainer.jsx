import React from 'react';
import timelineStore from '../stores/timelineStore';
import ActionCreator from '../actions/timelineAction';
import App from './App.jsx';

export default class AppContainer extends React.Component {
  _onChange() {
  }

  componentDidMount() {
    timelineStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    timelineStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <App />
    );
  }
}
