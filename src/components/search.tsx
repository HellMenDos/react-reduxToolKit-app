import React from 'react'
import { RouteComponentProps } from "react-router-dom";

interface InputSeachComponent {
    text: string,
    setText: (e: string) => void,
    sort: boolean,
    setSort: () => void
}

const InputSeach: React.FC<InputSeachComponent> = ({ text, setText, sort, setSort }) => {
    return (
        <>
            <input type={'text'} value={text} onChange={(e) => setText(e.target.value)} />
            <p onClick={setSort}>{(sort) ? 'По убыванию ↓' : 'По возрастанию ↑'}</p>
        </>
    )
}

export default InputSeach