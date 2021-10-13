import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RootType } from '../store/rootReducer'
import { searchFavourite, deleteFavourite, sortFavourite } from '../store/slices/favouriteSlice'
import { Link } from 'react-router-dom'
import { Post } from '../store/types/types'


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
            <input type={'text'} value={text} onChange={(e) => searchData(e.target.value)} />
            <p onClick={sortData}>{(sort) ? 'По убыванию ↓' : 'По возрастанию ↑'}</p>
            <p>count {favourite?.length}</p>
            {favourite.map((item: Post, index: number) => {
                return (
                    <div key={item.id}>
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
