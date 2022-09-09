import { Link } from 'react-router-dom'

const PostComponent = ( {post} ) => {
    return (
        <li>
            <Link className='link' to={`/post/${post.id}`}>{post.title}</Link>
        </li>
    )
}

export default PostComponent