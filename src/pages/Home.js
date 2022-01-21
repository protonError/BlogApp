import React from 'react';
import { useState, useEffect } from "react";
import { collection, getDocs , deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import { Link } from 'react-router-dom';

function Home() {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <div className='container'>
      <div className='row'>
      {postLists.map((post) => {
        return (
        <div className='col-12 col-sm-12 col-md-12 col-lg-12 my-4 post-bag'>
          <div className="card shadow-lg">
            <div className="card-body">
              <h5 className="card-title my-3">
              {post.title}
              </h5>
          
              <p className="card-text">
              {post.postText}
              </p>
              <span className="material-icons bg-white text-danger dtl-btn"  onClick={() => 
              

               { var result = window.confirm("Want to delete?");
                if (result) {
                  { deletePost(post.id);}
                }
               } }>delete</span>
            </div>

          </div>
        </div>
         );
        })}
      </div>
    </div>
  );
}
export default Home;
