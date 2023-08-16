export interface IEvent {
    event_id?: number,
    user_id?: number,
    name?: string,
    date?: string,
    description?: string,
    place?: string,
    duration?: string,
    statistic?: string,
    images?: string,
    rating?: string,
    price?: string,
    status?: string,
    coordinate_X?: number,
    coordinate_Y?:number
}

export interface IQuest {

}

export interface ICategory {
    category_id: number
    category_name: string
    category_rating: number
}

export interface IUser {
    user_id: number
    email: string
    name: string
    role: string
    iat: string
}