import React, { useState, useEffect } from 'react'
import Posts from "./Posts"
import { Link } from 'react-router-dom'
import { getAllPost } from '../service/api'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [data, setState] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let data = await getAllPost();
            console.log(data);
            setState(data)
        }
        fetchData()
    })



    const mystyle = {
        textDecoration: 'none',
        color: 'inherit'
    }

    return (

        <div>

            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Add Blog</a>
                <form className="form-inline">
                    <Link to="/add"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add</button></Link>

                </form>
            </nav>

            {data.map(post => (
                <div className="container" style={{ padding: '5px' }}>
                    <div className="row">
                        <div className="col col-lg-3">
                            <Link to={`/details/${post._id}`} style={mystyle}>
                                <Posts post={post} />
                            </Link>
                        </div>

                    </div>
                </div>

            ))}
        </div>




    )

}

export default Home
