import React,{useState,useEffect} from 'react'
import { getPost,updatePost } from '../service/api'
import { useHistory } from 'react-router-dom'

const initialPost = {
    title: '',
    description: '',
    picture: '',
    createdDate: new Date()
  }

const EditBlog = ({match}) => {
    const [post, setPost] = useState(initialPost)
 const history = useHistory()
    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            console.log(data);
            setPost(data)
        }
        fetchData()
    },[])

    const handleChange = (e) => {
    
        setPost({ ...post, [e.target.name]: e.target.value });
      }
      const updateBlog = async (e) => {
         e.preventDefault();

          await updatePost(match.params.id,post)
          history.push(`/details/${match.params.id}`);
      }
    return (
        <div>
            <div className="container">
                <form >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input type="text" className="form-control" value={post.title} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" name="title" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">description</label>
                        <textarea className="form-control" value={post.description} id="exampleFormControlTextarea1" rows="3" name="description" onChange={handleChange} required />
                    </div>
             
                    <button type="submit" onClick={updateBlog} class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    )
}

export default EditBlog
