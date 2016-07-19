import React, {PropTypes} from 'react';
import timelineAction from '../actions/timelineAction';

export default class SearchContainer extends React.Component {

  handleSearch = (e) => {
    e.preventDefault();
    if(this.refs.searchText.value.trim() === '') {
      return;
    }
    timelineAction.searchContent(this.refs.searchText.value);
  }
  render() {
    return (
        <div className="search-container">
          <form onSubmit={this.handleSearch}>
            <input className="search-container--input" 
              placeholder="Search Timeline"
              ref="searchText"
              type="text"
              />
          </form>
        </div>
    );
  }
}
