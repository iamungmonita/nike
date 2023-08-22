import { GET } from "@/core/services";
import { Footer, subFooter } from "@/models/Header";

export function getFooter() {
    return GET<Footer[]>('/category/footer.json')
}
export function getSubFooter() {
    return GET<subFooter[]>('/category/sub-footer.json')
}
