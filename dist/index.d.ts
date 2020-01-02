import "../css/index.css";
declare class tqImagesView {
    img: string;
    list: string[];
    index: number;
    constructor(img: string, list: string[]);
    init(): void;
    addTemplate(): void;
    loadlAll(): void;
    loadImg(dom: HTMLElement | null, src: string): void;
    addEvent(): void;
    previous(): void;
    next(): void;
    close(): void;
    removeDom(): void;
    change(): void;
}
declare const _default: (img: string, list: string[]) => tqImagesView;
export default _default;
