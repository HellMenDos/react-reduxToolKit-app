import React from 'react'
import { filterPosts } from '../store/slices/postSlice'
import { useSelector, useDispatch } from 'react-redux'
import { RootType } from '../store/rootReducer'



const SelectField: React.FC = () => {
    const dispatch = useDispatch()
    const user = useSelector((state: RootType) => state.user.users)


    let setUserFilter = (e: number): void => {
        dispatch(filterPosts(e))
    }

    return (
        <select onChange={(e) => setUserFilter(parseInt(e.target.value))}>
            {user.map((item) => {
                return (
                    <option value={item.id}>
                        {item.username}
                    </option>
                )
            })}
        </select>
    )
}

export default SelectField