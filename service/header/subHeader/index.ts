import { GET } from "@/core/services";
import { SubHeader, SubSubHeader } from "@/models/Header";


export function getAllHeaderId1() {
    return GET<SubHeader[]>('/data/header/headerId/header-Id1.json')

}
export function getAllSubHeaderId1() {
    return GET<SubSubHeader[]>('/data/header/subHeaderId/sub-header-Id1.json')
}
