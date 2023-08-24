import { GET } from "@/core/services";
import { Footer, FooterTermOfUse, subFooter } from "@/models/Footer";

export function getFooter() {
    return GET<Footer[]>('/data/footer/footer.json')
}
export function getSubFooter() {
    return GET<subFooter[]>('/data/footer/sub-footer.json')
}
export function getFooterTermOfUse() {
    return GET<FooterTermOfUse[]>('/data/footer/footer-term-of-use.json')
}
