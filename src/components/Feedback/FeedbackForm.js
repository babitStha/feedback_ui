import uuid from 'react-uuid'
import React, {useState} from 'react'
function FeedbackForm(props) {
    const RATINGS = [1, 2, 3, 4, 5, 6, 7]
    const [displayform, setDisplayForm] = useState(false)
    const [rating, setRating] = useState('')
    const [feedbackText, setFeedbackText] = useState('')
    const formSubmitHandler = (event) => {
        event.preventDefault()
        if(!(rating === '') && feedbackText.length > 10){
            
            let data ={
                id: uuid(),
                rating: rating,
                text: feedbackText,
            }
            props.onClick(data)
            setRating('')
            setFeedbackText('')
        }else{
            alert("Rating Should Not be null & feedback text should be greater than 10 characters")
        }
    }

    const toggleDisplayForm =()=>{
        setDisplayForm(!displayform)
        setRating('')
        setFeedbackText('')
    }

    const feedbackChangeHandler = event =>{
        setFeedbackText(event.target.value)
    }
    const content = (displayform ?  
        (<form className=" feedback-form" onSubmit={formSubmitHandler}>
            <p>Rate my Work</p>
            <div className="form-close" onClick={toggleDisplayForm}>
            &#10006;
            </div>
        <div className="feedback-ratings">
            {RATINGS.map((item,index)=>{
                return <span className={(rating === item) ? "active": null} onClick={()=>{setRating(item)
                }} key={index}>{item}</span>
            })}
        </div>
        <input type="text" className='feedback-input' value={feedbackText} onChange={feedbackChangeHandler} placeholder='Please provide a feedback'/>
        <button type='submit' className='button submit'> Submit  </button>
    </form>): <button className='show-feedback button' onClick={toggleDisplayForm}> Add Feedback</button> )
    
    return (
        <div className="form-container">
            {content}
        </div>
    )
}

export default FeedbackForm