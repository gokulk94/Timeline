import $ from 'jquery';
import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

let url = '';

export default {
  getSearchData: function(text) {
    let data = {
      searchText: text
    }
    $.ajax({
      url: 'http://aafda.com/hh',
      method: 'POST',
      data: data,
      crossDomain: true,
      dataType: 'jsonp',
      statusCode: {
        404: function() {
          console.log('data not found');
        }
      }
    })
    .done(function(data) {
      console.log('data received', data);
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.TASK_ADDED,
        text: data
      });
    })
    .fail(function(e) {
      console.log('ajax failed', e);
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.TASK_ADDED,
        text: text
      });
    });
  }
}
