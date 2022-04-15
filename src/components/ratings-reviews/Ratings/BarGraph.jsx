import React, { useContext } from 'react';
import { RatingsContext } from '../Ratings.jsx';

let BarGraph = (props) => {
  const {metaRating, totalReviews, filteredContent} = useContext(RatingsContext);

  //var declarations to set up % for colored bar graph portion.
  //total of all percents should equal 100
  let ratingsObj = metaRating.ratings;
  let fiveStarsPercent = (ratingsObj[5] / totalReviews);
  let fourStarsPercent = (ratingsObj[4] / totalReviews);
  let threeStarsPercent = (ratingsObj[3] / totalReviews);
  let twoStarsPercent = (ratingsObj[2] / totalReviews);
  let oneStarsPercent = (ratingsObj[1] / totalReviews);

  let filterClick = (e) => {
    filteredContent(e.target.id);
  }

  return (
    <div className="bar-graph-container">
      <div className="graph-title-bar">
        <section id="5" className="bar-titles body-text" onClick={filterClick}>5 Stars</section>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="bar scored-bar" style={{"width": `${fiveStarsPercent * 20}vw`}}></div>
          <span className="helpful-answer" style={{"transform": `translateX(calc(${fiveStarsPercent * 20}vw + 15px))`}}> {ratingsObj[5]} </span>
        </div>
      </div>
      <div className="graph-title-bar">
        <section id="4" className="bar-titles body-text" onClick={filterClick}>4 Stars</section>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="bar scored-bar" style={{"width": `${fourStarsPercent * 20}vw`}}></div>
          <span className="helpful-answer" style={{"transform": `translateX(calc(${fourStarsPercent * 20}vw + 15px))`}}> {ratingsObj[4]} </span>
        </div>
      </div>
      <div className="graph-title-bar">
        <section id="3"className="bar-titles body-text" onClick={filterClick}>3 Stars</section>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="bar scored-bar" style={{"width": `${threeStarsPercent * 20}vw`}}></div>
        <span className="helpful-answer" style={{"transform": `translateX(calc(${threeStarsPercent * 20}vw + 15px))`}}> {ratingsObj[3]} </span>
        </div>
      </div>
      <div className="graph-title-bar">
        <section id="2" className="bar-titles body-text" onClick={filterClick}>2 Stars</section>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="bar scored-bar" style={{"width": `${twoStarsPercent * 20}vw`}}></div>
          <span className="helpful-answer" style={{"transform": `translateX(calc(${twoStarsPercent * 20}vw + 15px))`}}> {ratingsObj[2]} </span>
        </div>
      </div>
      <div id="one-star-graph" className="graph-title-bar">
        <section id ="1" className="bar-titles body-text" onClick={filterClick}>1 Stars</section>
        <div className="star-bar">
          <div className="bar" ></div>
          <div className="bar scored-bar" style={{"width": `${oneStarsPercent * 20}vw`}}></div>
          <span className="helpful-answer" style={{"transform": `translateX(calc(${oneStarsPercent * 20}vw + 15px))`}}> {ratingsObj[1]} </span>
        </div>
      </div>
    </div>
  )
}

export default BarGraph;