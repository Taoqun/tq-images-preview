
import "../css/index.css";

class tqImagesView{

    img: string
    list: string[]
    index: number
    length: number
    imgDom: null | HTMLImageElement

    constructor( img: string, list: string[] ){

        this.img = img
        this.list = list
        this.index = list.indexOf( img )
        this.length = list.length
        this.imgDom = null

        this.init()
        return this

    }
    init(){
        this.removeDom()
        this.renderDom()
        this.addEvent()
    }
    renderDom(){

        // <img alt='${this.img}' src='${this.img}' />

        let preview = `
            <div class="tq-images-img" >
            </div>
        `

        let list = this.length > 1 ? `
            <div class="tq-images-list-wrap" >
            </div>
        ` : ``

        let previous = this.length > 1 ? `<div class="tq-images-icon tq-images-last" ></div>` : `<div></div>`
        let next = this.length > 1 ? `<div class="tq-images-icon tq-images-next" ></div>` : `<div></div>`

        let template = `
                <div class="tq-images-mask" ></div>
                <div class="tq-images-icon tq-images-close" ></div>
                <div class="tq-images-content" >
                    ${previous}
                    ${ preview }
                    ${next}
                </div>
                ${ list }
        `

        let dom = document.createElement("div")
            dom.className = "tq-images-preview show"
            dom.innerHTML = template
            setTimeout(()=>{
                dom.className = "tq-images-preview"
            },300)

        document.body.appendChild( dom )

        this.loadlAll()
        
    }
    loadlAll(){
        let dom: HTMLElement | null = document.querySelector(".tq-images-img")
        this.imgDom = this.loadImg( dom, this.img )
        this.addImglist()
    }
    addImglist(){
        let domlist: HTMLElement | null = document.querySelector(".tq-images-list-wrap")
        if( !domlist ){
            return
        }
        domlist.innerHTML = ""
        this.list.forEach(( img )=>{
            let div: HTMLElement = document.createElement("div")
                div.className = "tq-images-img-pre"

            if( img === this.img ){
                div.className += " active"
            }
            
            domlist.appendChild(div)
            this.loadImg( div, img )
        })
    }
    loadImg( dom: HTMLElement | null, src: string ): null | HTMLImageElement {

        if( !dom ){
            return null
        }

        dom.innerHTML = "加载中"

        let img = new Image()
            img.onload = ()=>{
                dom.innerHTML = ""
                dom.className = dom.className.replace("error","").trim()
                dom.appendChild( img )
            }
            img.onerror = ()=>{
                dom.innerHTML = "加载失败"
                dom.className = dom.className.replace("error","").trim() + " error"
            }
            img.src = src

        return img

    }
    addEvent(){
        // 关闭事件绑定
        let closeDom: HTMLElement | null = document.querySelector(".tq-images-close")
        if( closeDom ){
            closeDom.addEventListener("click", this.close.bind(this) )
        }
        // 上一张事件绑定
        let lastDom: HTMLElement | null = document.querySelector(".tq-images-last")
        if( lastDom ){
            lastDom.addEventListener("click", this.last.bind(this) )
        }
        // 下一张事件绑定
        let nextDom: HTMLElement | null = document.querySelector(".tq-images-next")
        if( nextDom ){
            nextDom.addEventListener("click", this.next.bind(this) )
        }
        // 预览图片列表事件
        let prelist: HTMLElement | null = document.querySelector(".tq-images-list-wrap")
        if( prelist ){
            prelist.addEventListener("click", this.preTap.bind(this) )
        }

    }
    preTap( event: any ){
        if( event.target.tagName === "IMG" ){
            this.change( this.list.indexOf( event.target.src ) )
        }
    }
    last(){
        this.change(  this.index <= 0 ? this.length -1 : this.index-1 )
    }
    next(){
        this.change( this.index >= this.length-1 ? 0 :this.index+1 )
    }
    change( index: number ){
        this.index = index
        this.img = this.list[ this.index ]
        this.updateImg()
    }
    updateImg(){
        if( this.imgDom ){
            this.imgDom.src = this.img
        }

        let domlist: NodeList = document.querySelectorAll(".tq-images-list-wrap img")
        
        Array.prototype.forEach.call(domlist,( dom: HTMLImageElement, index:number )=>{
            
            if( !dom.parentElement ){
                return
            }
            if( index === this.index  ){
                dom.parentElement.className = "tq-images-img-pre active"
            }else{
                dom.parentElement.className = "tq-images-img-pre"
            }
        })

    }
    close(){
        this.removeEvent()
        this.removeDom()
    }
    removeEvent(){
        // 关闭事件绑定
        let closeDom: HTMLElement | null = document.querySelector(".tq-images-close")
        if( closeDom ){
            closeDom.removeEventListener("click", this.close.bind(this) )
        }
        // 上一张事件绑定
        let lastDom: HTMLElement | null = document.querySelector(".tq-images-last")
        if( lastDom ){
            lastDom.removeEventListener("click", this.last.bind(this) )
        }
        // 下一张事件绑定
        let nextDom: HTMLElement | null = document.querySelector(".tq-images-next")
        if( nextDom ){
            nextDom.removeEventListener("click", this.next.bind(this) )
        }
    }
    removeDom(){

        let dom: HTMLElement | null = document.querySelector(".tq-images-preview")

        if( !dom ){
            return
        }
        
        dom.className += " close"
        setTimeout(()=>{
            if( dom && dom.parentElement ){
                dom.parentElement.removeChild(dom)
            }
        },300)

    }
   

}

export default ( img: string, list: string[] )=>{
    return new tqImagesView( img, list )
}
