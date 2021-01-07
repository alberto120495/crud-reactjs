export interface Video {
    createdAt?:string | Date,
    updatedAt?:string | Date,
    _id?: string
    title:string,
    description:string,
    url:string,
}