import React from 'react'

function FeedbackItem(props) {
  return (
    <>
        <li className="feedback-item">
            <div className="feedback-item__rating">
                {props.rating}
            </div>
            <div className="feedback-item__text">
                {props.text}
            </div>
        </li>
    </>
  )
}

export default FeedbackItem