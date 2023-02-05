import { PostAddSharp } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './TimeLine.css';
import axios from "axios";
import { AuthContext } from '../../state/AuthContext';

// import {Posts} from "../../dummyData"

export default function TimeLine({ username }) {
  const [posts, setPosts] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get(`/posts/timeline/${user._id}`);
      // : await axios.get(`/posts/timeline/63d42635454a280aa2fd2d74`);
      // console.log(response);
      setPosts(
        response.data.sort((post1, post2) => {
          return new Date(post2.createdAt) - new Date(post1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  )
}
