import React from 'react'
import FeedbackItem from './FeedbackItem'

function Feedback(props) {
  return (
    <div className="feedback">
        <div className="count">
            {props.items &&( `Total Feedbacks : ${props.items.length}`)}
        </div>
        <ul className="feedback-list">
            {props.items.map((item, index)=>{
                return(
                    <FeedbackItem key={index} rating={item.rating} text={item.text}/>
                )
            })}
        </ul>
    </div>
  )
}

export default Feedback