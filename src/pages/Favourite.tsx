import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RootType } from '../store/rootReducer'
import { searchFavourite, deleteFavourite, sortFavourite } from '../store/slices/favouriteSlice'
import { Link } from 'react-router-dom'
import { Post } from '../store/types/types'
import '../style/style.css'

import InputSeach from '../components/search'


const Favourite: React.FC = () => {
    const [text, setText] = React.useState<string>('')
    const [sort, setSort] = React.useState<boolean>(true)

    const dispatch = useDispatch()
    const favourite = useSelector((state: RootType) => state.favourite.searchFavourite)

    let searchData = (e: string): void => {
        setText(e)
        dispatch(searchFavourite(e))
    }

    let sortData = (): void => {
        setSort(!sort)
        dispatch(sortFavourite())
    }

    let deleteData = (id: number): void => {
        dispatch(deleteFavourite(id))
    }


    return (
        <div>
            <InputSeach
                text={text}
                setText={searchData}
                sort={sort}
                setSort={sortData}
            />

            <p>count {favourite?.length}</p>
            {favourite.map((item: Post, index: number) => {
                return (
                    <div key={item.id} className='card'>
                        <p>
                            {item.title}
                        </p>
                        <Link to={`/post/${item.id}`}>Перейти</Link>
                        <p onClick={() => deleteData(item.id)}>Удалить</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Favourite
