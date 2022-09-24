import {React, useState, useEffect} from 'react';
import './DetailPage.css';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function DetailPage() {

    const MySwal = withReactContent(Swal)
    const [tweet, setTweet] = useState([])

    let tweetId = useParams().id

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
     let deleteTweet = (id) => {
        axios.delete(`/tweets/${id}`)
        .then(res => console.log(res.data)) 
        .then(() =>  {MySwal.fire({
                title: <strong>Tweet Deleted!</strong>,
                html: <i>Your tweet was deleted</i>,
                icon: 'success'
            })
        })
        .then(() => {fetchTweet()})
    }
    return (
        <div className="detail-container">
        {tweet ? (
  
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
            </article>
    
                ) : null
        }
    </div>)
};

export default DetailPage