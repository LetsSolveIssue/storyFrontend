import React from "react";

import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createPost } from '../../../utils/api'

const PostForm = () => {
    const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  
  const history  = useHistory();
  const handleSubmit = (e) =>{
    e.preventDefault()
    
    createPost({ title, description }).then(data => {
     if(!data.error)
       history.push('/posts')
     })
    }
  return (
      <>
     
    <div className="row">
    <div className="col s12 m6">
    <div className="col-md-6 offset-md-3">
      <span className="anchor" id="formRegister"></span>

      <div className="card card-outline-secondary">
        <div className="card-header">
          <h3 className="mb-0">Create a new post here</h3>
        </div>
        <div className="card-body">
          <form className="form" onSubmit={e => handleSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                onChange={e => setTitle(e.target.value)}
               value = {title}
                placeholder="Title"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
              value= {description}
              onChange={e => setDescription(e.target.value)}
                placeholder="Description"
                required=""
              />
            </div>
            

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-success btn-lg float-right"
              >
                Create Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div></div></div>

  
      </>
    );
};

export default PostForm;
