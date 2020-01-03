import "../css/index.css";
declare class tqImagesView {
    img: string;
    list: string[];
    index: number;
    length: number;
    imgDom: null | HTMLImageElement;
    constructor(img: string, list: string[]);
    init(): void;
    renderDom(): void;
    loadlAll(): void;
    addImglist(): void;
    loadImg(dom: HTMLElement | null, src: string, preview?: boolean): null | HTMLImageElement;
    addEvent(): void;
    keyboardControl(event: any): void;
    preTap(event: any): void;
    last(): void;
    next(): void;
    change(index: number): void;
    updateImg(): void;
    close(): void;
    removeEvent(): void;
    removeDom(): void;
}
declare const _default: (img: string, list: string[]) => tqImagesView;
export default _default;
