import { GET } from "@/core/services";
import { Header } from "@/models/Header";


export function getHeaderTop() {
    return GET<Header[]>('/data/header/header-top.json')

}
export function getHeaderMiddle() {
    return GET<Header[]>('/data/header/header-middle.json')
}

export function getHeaderBottom() {
    return GET<Header[]>('/data/header/header-bottom.json')
}
