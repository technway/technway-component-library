import { SizeType } from "../../../../components";

export interface Logo {
    src: string;
    alt: string;
    widthSize: SizeType | "full";
    heightSize: SizeType | "full";
}