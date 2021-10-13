import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RootType } from '../store/rootReducer'
import { searchPosts, sortPosts, filterPosts } from '../store/slices/postSlice'
import { Link } from 'react-router-dom'
import { Post } from '../store/types/types'

import InputSeach from '../components/search'
import SelectField from '../components/select'


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
      <InputSeach
        text={text}
        setText={searchData}
        sort={sort}
        setSort={sortData}
      />

      <SelectField />

      {post.searchData.map((item: Post, index: number) => {
        return (
          <div key={item.id} className='card'>
            <p>
              {item.title}
            </p>
            <p>
              {item.body}
            </p>
            <Link to={`/post/${item.id}`}>Перейти</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Main
