import { MoreVert } from '@mui/icons-material'
import React, { useContext, useEffect, useState } from 'react'
import "./Post.css"
import axios from "axios";
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContext';
// import { Users } from "../../dummyData"

export default function Post({ post }) {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const REACT_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const {user:currentUser} = useContext(AuthContext);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`/users?userId=${post.userId}`);
            console.log(response);
            setUser(response.data);
        };
        fetchUser();
    }, [post.userId]);


    const handleLike =  async () => {
        try {
            await axios.put(`/posts/${post._id}/like`,{userId: currentUser._id})
        }catch(err){
            console.log(err)
        }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }
    // console.log(Users)
    // const user = Users.filter((user) => user.id ===1)
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${user.username}`}>
                            <img src={
                                user.profilePicture
                                ? REACT_FOLDER + user.profilePicture
                                : REACT_FOLDER + "/person/noAvatar.png"} alt="1" className="profileImg" />
                        </Link>
                        <span className='postUsename'>{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img src={REACT_FOLDER + post.img} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={REACT_FOLDER + "/heart.png"} alt="heart" className='likeIcon' onClick={() => handleLike()} />
                        <span className="postLikeCounter">{like} : like</span>
                    </div>
                    <div className="postBottomRight">
                        <span className='postCommentText'>{post.comment} : Comment</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
