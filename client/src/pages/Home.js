import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Home() {

  let history = useHistory();

  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, [])

    return (
        <div>
            {listOfPosts.map((value, key) => {
                return (
                <div key={key} className="post" onClick={() => {history.push(`/post/${value.id}`)}}>
                    <div className="title"> {value.title} </div>
                    <div className="body"> {value.postText} </div>
                    <div className="footer"> {value.username} </div>
                </div>
                );
            })}
        </div>
    )
}

export default Home
