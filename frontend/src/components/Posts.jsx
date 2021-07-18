import React from 'react'

const Posts = ({ post }) => {
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={url} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title"> {post.title}</h5>
                    <p className="card-text">{post.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Posts
