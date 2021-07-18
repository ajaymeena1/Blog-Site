import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPost } from '../service/api'


const BlogDetails = ({ match }) => {

    const [post, setPost] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            console.log(data);
            setPost(data)
        }
        fetchData()
    })

    const url = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    const mystyle = {
        padding: "4px",
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    }
    return (
        <div>

            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">BlogDetails</a>
                <form className="form-inline">
                    <Link to="/"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Home</button></Link>

                </form>
            </nav>
            <div className="container">
                <img src={url} alt="" style={mystyle} />
                <Link to={`/update/${post._id}`}> <button className="btn btn-primary" style={{ float: 'right' }}>Edit</button></Link>
                <div>
                    <h1 style={{ textAlign: 'center', margin: '50px 0 10px 0' }}>{post.title}</h1>
                </div>
                <div>
                    <p>{post.description}</p>
                </div>
            </div>

        </div>
    )
}

export default BlogDetails
