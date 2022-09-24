import React, {useEffect, useState} from 'react'
import './HomePage.css'
import axios  from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {Link} from 'react-router-dom'

// Can use axios
function HomePage() {

    const MySwal = withReactContent(Swal)
    const [tweets, setTweets] = useState([])

    useEffect(() => {
       fetchTweets()
    }, [])

    let fetchTweets = () => {
        axios.get("/tweets")
        .then((res) => {
            setTweets(res.data) // for Axios
            // setTweets(res)
        });
    }

    let deleteTweet = (id) => {
        axios.delete(`/tweets/${id}`)
        .then(res => console.log(res.data)) 
        .then(() =>  {MySwal.fire({
                title: <strong>Tweet Deleted!</strong>,
                html: <i>Your tweet was deleted</i>,
                icon: 'success'
            })
        })
        .then(() => {fetchTweets()})
    }

  return (
    <div className="tweet-container">
        <h1 className="title">Tweets</h1>
        {tweets.map((tweet, idx) => (
            tweet ? (
                <Link to={`/detail/${tweet._id}`}>
        <article className="message is-link" key={tweet._id}>
            <div className="message-header">
                <p>Name: {tweet.name}</p>
                <div className="buttons-container">

                <button className="delete" aria-label="delete" onClick={() => {deleteTweet(tweet._id)}}></button>
                <Link to={`/edit/${tweet._id}`}>
                <button className="edit">Edit</button>
                </Link>
                </div>
            </div>
                <div className="message-body">
                {tweet.description}
                </div>
                <p className="date">Posted at: {tweet.createdAt}</p>
        </article>
        </Link>
            ) : null
        ))}
    </div>
  )
}

export default HomePage