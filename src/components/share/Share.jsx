import { Analytics, Face, Gif, Image } from '@mui/icons-material'
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useRef } from 'react';
import { AuthContext } from '../../state/AuthContext';
import "./Share.css"

export default function Share() {
    const REACT_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext);
    const desc = useRef();

    const [file,setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        };

        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name",fileName);
            data.append("file",file);
            newPost.img = fileName;
            try{
                await axios.post("/upload", data);
            }catch(err){
                console.log(err)
            }
        }

        try {
            await axios.post("/posts",newPost);
            window.location.reload();
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={
                        user.profilePicture
                            ? REACT_FOLDER + user.profilePicture
                            : REACT_FOLDER + "/person/noAvatar.png"} alt="1" className="profileImg" />
                    {/* <img src={REACT_FOLDER + "/person/noAvatar.png"} alt="1" className='shareProfileImg' /> */}
                    <input type="text" className='shareInput' placeholder='What are you doing?' ref={desc} />
                </div>
                <hr />

                <form className="shareButtons" onSubmit={(e) => handleSubmit(e)}>
                    <div className="shareOptions">
                        <label className="shareOption" htmlFor='file'>
                            <Image className='shareIcon' htmlColor='blue' />
                            <span className="shareOptionText">
                                Pic
                            </span>
                            <input type="file" id="file" accept='.png, .jpeg, .jpg' style={{display:"none"}}
                            onChange={(e)=> setFile(e.target.files[0])}
                            />
                        </label>
                        <div className="shareOption">
                            <Gif className='shareIcon' htmlColor='hotpink' />
                            <span className="shareOptionText">
                                Gif
                            </span>
                        </div>
                        <div className="shareOption">
                            <Face className='shareIcon' htmlColor='green' />
                            <span className="shareOptionText">
                                Feeling
                            </span>
                        </div>
                        <div className="shareOption">
                            <Analytics className='shareIcon' htmlColor='red' />
                            <span className="shareOptionText">
                                Vote
                            </span>
                        </div>
                    </div>
                    <button className='shareButton' type='submit'>GO!</button>
                </form>
            </div>
        </div>
    )
}
