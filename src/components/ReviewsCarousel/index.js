// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
    }
  }

  handlePrevClick = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex > 0 ? prevState.currentIndex - 1 : 0,
    }))
  }

  handleNextClick = () => {
    const {reviewsList} = this.props
    this.setState(prevState => ({
      currentIndex:
        prevState.currentIndex < reviewsList.length - 1
          ? prevState.currentIndex + 1
          : prevState.currentIndex,
    }))
  }

  render() {
    const {reviewsList} = this.props
    const {currentIndex} = this.state
    const currentReview = reviewsList[currentIndex]

    return (
      <div className="reviews-carousel">
        <div className="review">
          <h1> Reviews </h1>
          <img
            src={currentReview.imgUrl}
            alt={currentReview.username}
            className="profile-image"
          />
          <div className="review-details">
            <h2>{currentReview.username}</h2>
            <p>{currentReview.companyName}</p>
            <p>{currentReview.description}</p>
          </div>
        </div>
        <div className="navigation-buttons">
          <button
            type="button"
            onClick={this.handlePrevClick}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <button
            type="button"
            onClick={this.handleNextClick}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
