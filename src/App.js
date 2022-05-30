import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import FeedbackForm from './components/Feedback/FeedbackForm';
import Feedback from './components/Feedback/Feedback';
import './App.css';

function App() {
  let local
  if(localStorage.getItem('feedbacks')){
    local = JSON.parse(localStorage.getItem('feedbacks'))
  }else{
    local=[]
  }
  const [feedbacks, setFeedbacks] = useState(local)

  useEffect(()=>{
    if(!localStorage.getItem('feedbacks') && (localStorage.getItem('feedbacks')==null)){
      localStorage.setItem('feedbacks',[])
    }
    else{
      localStorage.setItem('feedbacks',(JSON.stringify(feedbacks)))

    }
  },[feedbacks])

  const onClickHandler = (data)=>{
    setFeedbacks(feedback =>{
      console.log([...feedback])
      return [data, ...feedback]
    })
  }
  
  return (
    <div className="App">
        <Header title="FeedbackUI"/>
        <FeedbackForm onClick={onClickHandler}/>
       
        {feedbacks ? <Feedback items={feedbacks}/>: <p>No feedbacks Yet</p>}

    </div>
  );
}

export default App;
