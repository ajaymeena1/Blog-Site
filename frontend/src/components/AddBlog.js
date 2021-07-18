import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { createPost } from '../service/api'

const initialPost = {
  title: '',
  description: '',
  picture: '',
  createdDate: new Date()
}
const AddBlog = () => {
  const [post, setPost] = useState(initialPost)
  const history = useHistory();
  const handleChange = (e) => {
    //  e.preventDefault();

    setPost({ ...post, [e.target.name]: e.target.value });
  }
  const savePost = async (e) => {
    e.preventDefault();

    await createPost(post)
    // e.target.title.value = ""
    history.push('/')


  }
  return (
    <div className="container">
      <form onSubmit={savePost}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" name="title" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">description</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="description" onChange={handleChange} required />
        </div>
     
        <button type="submit" class="btn btn-primary">Add</button>
      </form>
    </div>
  )
}

export default AddBlog
