import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';
import $ from 'jquery';

let _data = [];

function searchForText(text) {
  _data.push(text);
}

const TodoStore = assign({}, BaseStore, {
  getAll() {
    return {
      tasks: _data
    };
  },
  dispatcherIndex: Dispatcher.register(function handleAction(payload) {
    const action = payload.action;
    switch (action.type) {
    case Constants.ActionTypes.TASK_ADDED:
      const text = action.text.trim();
      if (text !== '') {
        searchForText(text);
        TodoStore.emitChange();
      }
      break;
    }
  })
});

export default TodoStore;
