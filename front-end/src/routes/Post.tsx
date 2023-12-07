import React from 'react';
import {useState} from 'react';
import "../styles/Post.css"; //Styllying for the post

// This page to post for either job or any other updates

function Post(props: any) {
    const[postValue, setPostValue] = useState<String>('');
    let file; //Ask what data type
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        // Update the state with the new input value
        setPostValue(event.target.value); // This value of inputvalue
      };
    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        file = event.target.files && event.target.files[0];
      }
    return (
        <div className = 'Container'>
            <h1>Post</h1> 
            <textarea className = 'input-box'
            placeholder='Enter your updates....'
            onChange={handleInputChange}
            >
        
            </textarea>
            <input
            type = 'file'
            onChange={handleFileSelect}></input>
            <br/>

            
        <button className = 'post-button'
        //onclick add data to send it to sever of on the homepage// TODO: discussion
        >Post</button>
        </div>
    );
}

export default Post;
