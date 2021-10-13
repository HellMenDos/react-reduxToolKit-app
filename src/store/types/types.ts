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

