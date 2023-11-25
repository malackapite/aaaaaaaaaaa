class View{
    
    #lista
    constructor(lista, szulElem){
        this.#lista=lista
        this.megjelenit(szulElem)
    }

    megjelenit(szulElem){
        let tmp=""
        this.#lista.forEach((elem, ix) => {
            tmp=`<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${Object.values(elem)[1]}</h5>`

            for (const key in elem) {
                if (Object.hasOwnProperty.call(elem, key) && !(
                    key == "id" || key == "created_at" || key == "updated_at" || key == Object.keys(elem)[1] 
                )) {
                    tmp+=`<h6 class="card-subtitle mb-2 text-body-secondary">${key}: ${elem[key]}</h6>`
                }
            }

            tmp+=`<input type="button">
                </div>
            </div>`
            szulElem.append(tmp)

            szulElem.children(".card:last-child").children(".card-body:last-child").children("input").eq(0).on("click",()=>{
                
                console.log($("input").eq(ix).attr('class').search("kivalaszt"));
                if($("input").eq(ix).attr('class').search("kivalaszt")!=-1){
                    this.#kivalasztEsemeny(elem.id)
                    this.#torolButton($("input").eq(ix))
                }
                else{
                    this.#torolEsemeny(elem.id)
                    this.#kivalasztButton($("input").eq(ix))
                }
            })
        });
    }

    buttonMeghataroz(lista){
        this.#lista.forEach((elem, ix) => {
            if(lista.findIndex(item => item == elem.id)!=-1)
                this.#torolButton($("input").eq(ix))
            else
                this.#kivalasztButton($("input").eq(ix))
        });
    }

    #kivalasztButton(htmlElem){
        htmlElem.val("Kiválaszt")
        htmlElem.removeClass()
        htmlElem.addClass("btn btn-primary kivalaszt")
    }

    #torolButton(htmlElem){
        htmlElem.val("Mégse")
        htmlElem.removeClass()
        htmlElem.addClass("btn btn-danger torol")
    }

    #kivalasztEsemeny(id){
        window.dispatchEvent(new CustomEvent("kivalaszt", {detail: id}))
    }

    #torolEsemeny(id){
        window.dispatchEvent(new CustomEvent("torol", {detail: id}))
    }
}

export default View