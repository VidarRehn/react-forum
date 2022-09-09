import { Link } from 'react-router-dom'

const PostComponent = ( {post} ) => {
    return (
        <li>
            <Link className='link' state={post} to={`/post/${post.id}`}>{post.title}</Link>
        </li>
    )
}

export default PostComponent