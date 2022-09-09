import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'

import Header from '../components/Header'

const Post = () => {

    const [post, setPost] = useState(null)
    const [comments, setComments] = useState(null)

    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    
    const getSinglePost = async () => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        let data = response.json()
        return data
    }

    const getComments = async () => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
        let data = response.json()
        return data
    }

    useEffect(() => {
        if (location.state) {
            console.log(location.state)
            setPost(location.state)
        } else {
            getSinglePost().then(data => setPost(data))
        }
        getComments().then(data => setComments(data))
    }, [])

    return (
        <>
            {post && comments ? <div>
                <Header text={post.title}/>
                <div className='Post'>
                    <button onClick={() => navigate('/')}>Go back</button>
                    <p>{post.body}</p>
                    <div className='Comments'>
                        <h2>Comments</h2>
                        <ul>
                        {comments.map((comment, index) => {
                            return (
                                <li key={index}>
                                    <strong>{comment.name}</strong>
                                    <p>{comment.body}</p>
                                    <a href='#'>{comment.email}</a>
                                </li>
                            )
                        })}
                        </ul>
                    </div>
                </div>
            </div>
            : <p>Loading...</p>}
        </>
    )
}

export default Post