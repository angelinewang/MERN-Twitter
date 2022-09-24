import {React, useState, useEffect} from 'react';
import './EditPage.css';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

function EditPage() {
  const [tweet, setTweet] = useState([])

    let tweetId = useParams().id

    let navigate = useNavigate()

    useEffect(() => {
        fetchTweet()
     }, [])
 
     let fetchTweet = () => {
         axios.get(`/tweets/${tweetId}`)
         .then((res) => {
             setTweet(res.data) // for Axios
             // setTweets(res)
         });
     }

     let handleChange = (e) => {
      setTweet({...tweet, [e.target.name]: e.target.value})
  }

  let handleSubmit = (e) => {
     e.preventDefault()
     console.log('form was submitted!')
     axios.patch(`/tweets/${tweetId}`, {...tweet})
     .then((res) => {
      console.log(res.data)
      navigate(`/detail/${res.data._id}`)
     })
  }
    return (
      <div>
       { tweet ?  (<div className="form-container">
           <form onSubmit={handleSubmit} className="form-body">
           <label>Name</label>
            <input className="name-input" name="name" value={tweet.name} onChange={handleChange}></input>
     
            <label>Description</label>
            <textarea className="description-input" name="description" value={tweet.description} onChange={handleChange}></textarea>
       
            <button type="Submit" value="Update Tweet">Update Tweet</button>
            </form>
        </div> ): null }
    </div>
  )
};

export default EditPage