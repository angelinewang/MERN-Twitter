import {React, useState, useEffect, useHistory} from 'react';
import './NewTweetPage.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function NewTweetPage() {

    const [tweet, setTweet] = useState({
        name: '', 
        description: ''
    })

    let navigate = useNavigate()

    let handleChange = (e) => {
        setTweet({...tweet, [e.target.name]: e.target.value})
    }

    let handleSubmit = (e) => {
       e.preventDefault()
       console.log('form was submitted!')
       axios.post('/tweets', {...tweet})
       .then((res) => {
        console.log(res.data)
        navigate(`/detail/${res.data._id}`)
       })
    }
return  (
    <div>
        <div className="form-container">
           <form onSubmit={handleSubmit} className="form-body">
           <label>Name</label>
            <input className="name-input" name="name" value={tweet.name} onChange={handleChange}></input>
     
            <label>Description</label>
            <textarea className="description-input" name="description" value={tweet.description} onChange={handleChange}></textarea>
       
            <button type="Submit" value="Create new Tweet!">Create New Tweet!</button>
            </form>
        </div>
    </div>
)
};

export default NewTweetPage