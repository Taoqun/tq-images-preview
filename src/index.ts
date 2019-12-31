
import "./css/index.styl"

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

    }

    addTemplate(){

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
                <div class="tq-images-close" ></div>
                <div class="tq-images-preview" >
                    <div class="tq-images-last" ></div>
                    ${ preview }
                    <div class="tq-images-next" ></div>
                </div>
                ${ list }
        `

        let dom = document.createElement("div")
            dom.className = "tq-images-preview"
            dom.innerHTML = template

        document.body.appendChild( dom )
        
    }
    previous(){

    }
    next(){

    }
    close(){

    }
    removeDom(){
        let dom = document.querySelector(".tq-images-preview")
        if( dom ){
            dom.parentElement.removeChild(dom)
        }
    }
    change(){

    }

}

export default ( img: string, list: string[] )=>{
    return new tqImagesView( img, list )
}
