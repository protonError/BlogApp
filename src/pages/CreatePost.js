import React from 'react';
import {addDoc, collection} from 'firebase/firestore';
import {db} from "../firebase-config";
import { useHistory } from "react-router-dom";
import  { useState } from "react";

function CreatePost() {
  const [title,setTitle] = useState("j");
  const [postText,setPostText] = useState("j");

  const postsCollectionRef = collection(db,"posts");
   let navigate = useHistory();
  const createPost = async () =>{
    await addDoc(postsCollectionRef , {title,postText});
    // navigate("/");
    navigate.push("/");
  }
  return <div className='createpostpage'>
    <div className='container mt-5'>
    <h1 className='head-text text-center'>Create a Post</h1>
    <div className='inputGp form-group'>
      <label>Blog Title</label>
      <input className="form-control"  placeholder='Title....'  onChange={(event)=>{
        setTitle(event.target.value);
      }} required/>
    </div>
    <div className='inputGp form-group'>
    <label>Blog Text</label>
    <textarea className="form-control" placeholder='Post.....' onChange={(event)=>{
        setPostText(event.target.value);
      }} required/>
    </div>
    <button className='btn btn-dark' onClick={createPost}>Submit Post</button>
    </div>
  </div>;
}

export default CreatePost;
