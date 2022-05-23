// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchValue: ''}

  updateSearchValue = event => {
    const searchInput = event.target.value.toLowerCase()
    console.log(event.target.value)
    this.setState({searchValue: searchInput})
  }

  display = suggestion => {
    this.setState({searchValue: suggestion})
  }

  render() {
    const {suggestionsList} = this.props

    const {searchValue} = this.state

    const filteredSuggestionList = suggestionsList.filter(eachObj =>
      eachObj.suggestion.toLowerCase().includes(searchValue),
    )

    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-ul-container">
          <div className="search-logo-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-input"
              onChange={this.updateSearchValue}
              value={searchValue}
            />
          </div>
          <ul className="unordered-list">
            {filteredSuggestionList.map(eachObj => (
              <SuggestionItem
                key={eachObj.id}
                eachObj={eachObj}
                display={this.display}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
