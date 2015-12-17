import React, {Component} from 'react';

class SearchBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchActive: false,
    };
  }

  _onSubmit(evt) {
    const searchValue = evt.target[0].value;
    evt.preventDefault();
    window.location.href = evt.target.action + encodeURIComponent(searchValue);
  }

  _toggleDisplay() {
    const {searchActive} = this.state;
    this.setState({
      searchActive: !searchActive,
    });
  }

  render() {
    return (
      <li className="search">
        <a href="#" onClick={() => this._toggleDisplay()}>
          <i className="fa fa-search" />
        </a>
        { this.state.searchActive ?
          <div className="search-box">
            <form
              action="https://www.composersforum.org/search/node/"
              method="get" ref="searchBox"
              onSubmit={this._onSubmit}
            >
              <div className="input-group">
                <input type="text" name="src" placeholder="Search" id="header-search-box" className="form-control" />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="submit">Search</button>
                </span>
              </div>
            </form>
          </div>
          :
          false
        }
      </li>
    );
  }
}

SearchBox.propTypes = {
  // Proptypes here
};

export default SearchBox;
