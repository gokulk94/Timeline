import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import api from '../Api/api.js';
/* eslint-disable no-console */
 
export default {
  searchContent(text) {
  	api.getSearchData(text);
  }
};
