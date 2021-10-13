import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RootType } from '../store/rootReducer'
import { searchPosts, sortPosts } from '../store/slices/postSlice'
import { Link } from 'react-router-dom'
import { Post } from '../store/types/types'


const Main: React.FC = () => {
  const [text, setText] = React.useState<string>('')
  const [sort, setSort] = React.useState<boolean>(true)

  const dispatch = useDispatch()
  const post = useSelector((state: RootType) => state.post)

  let searchData = (e: string): void => {
    setText(e)
    dispatch(searchPosts(e))
  }

  let sortData = (): void => {
    setSort(!sort)
    dispatch(sortPosts())
  }

  return (
    <div>
      <input type={'text'} value={text} onChange={(e) => searchData(e.target.value)} />
      <p onClick={sortData}>{(sort) ? 'По убыванию ↓' : 'По возрастанию ↑'}</p>
      {post.searchData.map((item: Post, index: number) => {
        return (
          <div key={item.id}>
            <p>
              {item.title}
            </p>
            <Link to={`/post/${item.id}`}>Перейти</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Main
