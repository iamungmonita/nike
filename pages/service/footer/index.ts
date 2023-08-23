import { GET } from "@/core/services";
import { Footer, FooterTermOfUse, subFooter } from "@/models/Footer";

export function getFooter() {
    return GET<Footer[]>('/category/footer.json')
}
export function getSubFooter() {
    return GET<subFooter[]>('/category/sub-footer.json')
}
export function getFooterTermOfUse() {
    return GET<FooterTermOfUse[]>('/category/footer-term-of-use.json')
}
