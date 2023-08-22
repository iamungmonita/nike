import { GET } from "@/core/services";
import { Header } from "@/models/Header";


export function getHeaderTop() {
    return GET<Header[]>('/navigation/header-top.json')

}
export function getHeaderMiddle() {
    return GET<Header[]>('/navigation/header-middle.json')
}

export function getHeaderBottom() {
    return GET<Header[]>('/navigation/header-bottom.json')
}
