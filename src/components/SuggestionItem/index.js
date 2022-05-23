// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachObj, display} = props

  const {suggestion} = eachObj

  const displayFullSuggestionAtSearch = () => {
    display(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
        onClick={displayFullSuggestionAtSearch}
      />
    </li>
  )
}

export default SuggestionItem
