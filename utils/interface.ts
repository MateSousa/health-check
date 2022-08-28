export interface Url {
    id: string
    url: string
    title: string
    description?: string
}

export interface Log {
    id: string
    url_id?: string
    status: string
    time: Date
    urls?: Url[]
}

export interface Report {
    time: string
    status: "success" | "fail"
}