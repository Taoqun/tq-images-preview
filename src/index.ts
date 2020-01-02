
import "../css/index.css";

class tqImagesView{

    img: string
    list: string[]
    index: number

    constructor( img: string, list: string[] ){

        this.img = img
        this.list = list
        this.index = list.indexOf( img )

        this.init()
        return this

    }
    init(){

        this.removeDom()
        this.addTemplate()

        this.addEvent()

    }

    addTemplate(){

        // <img alt='${this.img}' src='${this.img}' />

        let preview = `
            <div class="tq-images-img" >
            </div>
        `

        let list = `
            <div class="tq-images-list-wrap" >
            </div>
        `

        let template = `
                <div class="tq-images-mask" ></div>
                <div class="tq-images-icon tq-images-close" ></div>
                <div class="tq-images-content" >
                    <div class="tq-images-icon tq-images-last" ></div>
                    ${ preview }
                    <div class="tq-images-icon tq-images-next" ></div>
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
        this.loadImg( dom, this.img )
    }
    loadImg( dom: HTMLElement | null, src: string ){

        if( !dom ){
            return
        }

        dom.innerHTML = "加载中"

        let img = new Image()
            img.onload = ()=>{
                setTimeout(()=>{
                    dom.innerHTML = ""
                    dom.className = dom.className.replace("error","").trim()
                    dom.appendChild( img )
                },500)
            }
            img.onerror = ()=>{
                dom.innerHTML = "加载失败"
                dom.className = dom.className.replace("error","").trim() + " error"
            }
            img.src = src

    }
    addEvent(){
        let closeDom: HTMLElement | null = document.querySelector(".tq-images-close")
        if( closeDom ){
            closeDom.addEventListener("click", this.close.bind(this) )
        }
    }
    previous(){

    }
    next(){

    }
    close(){
        this.removeDom()
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
    change(){

    }

}

export default ( img: string, list: string[] )=>{
    return new tqImagesView( img, list )
}
