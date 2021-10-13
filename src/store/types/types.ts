export interface Post {
    userId: number,
    id: number,
    title: string | undefined,
    body: string | undefined
}

type geo = {
    lat: string
    lng: string
}

export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: geo
}

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address
}

export interface Post {
    userId: number,
    id: number,
    title: string | undefined,
    body: string | undefined
}


export interface PostInitialState {
    loading: boolean,
    errors: boolean,
    post: Post | undefined,
    data: Post[],
    searchData: Post[]
}

export type SearchData = {
    title: string
}

export interface FavouriteInitialState {
    favourite: Post[],
    searchFavourite: Post[]
}

