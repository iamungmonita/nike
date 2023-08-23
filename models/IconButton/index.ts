import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface IconButton {
    IconImage: string | StaticImport
    IconWidth: number,
    IconHeight: number,
    IconHidden?: boolean,
    IconMediumHidden?: boolean,
    IconLargeHidden?: boolean,
    BackgroundColor?: boolean,
}
