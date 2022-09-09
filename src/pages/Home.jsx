import { useState, useEffect } from "react"

import PostComponent from "../components/PostComponent"
import Header from '../components/Header'

const Home = () => {

    const [posts, setPosts] = useState(null)
    
    const getPosts = async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        let data = await response.json()
        return data
      }

    useEffect(() => {
        getPosts().then(data => setPosts(data))
    }, [])

    return (
        <div className="Home">
            <Header text='React Forum' />
            {posts ? <ul className="posts-list">{posts.map((post, index) => (<PostComponent key={index} post={post} />)) }</ul> : <p>Loading...</p>}
        </div>
    )
}

export default Home