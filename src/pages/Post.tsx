import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { fetchPost } from '../store/slices/postSlice'
import { addFavourite } from '../store/slices/favouriteSlice'

import { RootType } from '../store/rootReducer'



const Post: React.FC<RouteComponentProps<{ id: string }>> = (props) => {
    const dispatch = useDispatch()
    const post = useSelector((state: RootType) => state.post.post)

    let addToFavourite = () => {
        dispatch(addFavourite({
            userId: post?.userId as number,
            title: post?.title,
            id: post?.id as number,
            body: post?.body
        }))
    }

    React.useEffect(() => {
        dispatch(fetchPost(props.match.params.id))
    }, [])

    return (
        <div>
            <button onClick={addToFavourite}>Add to favourite</button>
            <h1>{post?.title}</h1>
            <h4>{post?.body}</h4>
            <div>
                ID:<span>{post?.id}</span>
                UserId:<span>{post?.userId}</span>
            </div>
            <Link to='/'>
                Back
            </Link>
        </div>
    )
}

export default withRouter(Post)