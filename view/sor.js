import urlap from "./urlap.js";

class Sor{
    
    static counter=0
    static inputLista
    constructor(elem, szuloElem, index, inputLista){
        this.$elem=elem
        this.$szuloElem=szuloElem
        this.index=index
        if(Sor.inputLista===undefined)
            Sor.inputLista = inputLista

        this.$szuloElem.append("<tr></tr>")
        this.$sorElem=this.$szuloElem.children("tr:last-child")
        this.#sor()
    }

    esemenyHozzaad() {
        this.$sorElem.children(".kuldes").on("click", () => {
            if(this.$sorElem.find("input").toArray().findIndex(elem => {
                return !elem.checkValidity()
            })==-1)
                this.#kuldesEsemeny()
        })
        this.$sorElem.children(".modosit").on("click", () => {
            this.#modositSor()
        })
        this.$sorElem.children(".megse").on("click", () => {
            this.#sor()
        })
        this.$sorElem.children(".torol").on("click", () => {
            this.#torolEsemeny()
        })
    }

    #sor() {
        let tmp=``
        for (const kulcs in this.$elem) {
            if (Object.hasOwnProperty.call(this.$elem, kulcs) ) {
                tmp += `<td>${this.$elem[kulcs]}</td>`             
            }
        }
        tmp+=`<td></td><td class="modosit">✏💨</td><td class="torol">🗑💨</td>`
        this.$sorElem.html(tmp)
        this.esemenyHozzaad()
    }

    #modositSor(){
        let tmp=``
        for (const kulcs in this.$elem) {
            console.log('sor',!Array.isArray(Sor.inputLista['value']));
            if (Object.hasOwnProperty.call(this.$elem, kulcs)) {
                if(!(kulcs == "id" || kulcs == "created_at" || kulcs == "updated_at"))
                    if(!Array.isArray(Sor.inputLista[kulcs]['value']))
                        tmp+= `<td class="was-validated">${this.#inputMeghatarozo(this.$elem, kulcs)}</td>`
                    else
                        tmp+= `<td class="was-validated inputGroup">${this.#inputGroupMeghatarozo(this.$elem, kulcs)}</td>`
                else
                    tmp += `<td>${this.$elem[kulcs]}</td>`             
            }
        }
        tmp+=`<td class="kuldes">✔💨</td><td class="megse">❌💨</td><td class="torol">🗑💨</td>`
        this.$sorElem.html(tmp)
        this.esemenyHozzaad()
    }

    #inputMeghatarozo(elem, kulcs){
        return `<input class="form-control" value="${elem[kulcs]}" ${urlap.attrMeghatarozo(Sor.inputLista[kulcs], kulcs)}>`
    }

    #inputGroupMeghatarozo(elem, kulcs){
        Sor.counter+=1
        console.log("cnt",Sor.counter);
        let tmp=``
        Sor.inputLista[kulcs]['value'].forEach((element, ix) => {
            Sor.inputLista[kulcs]['ix']=ix
            console.log(element, elem.sus_id==element);
            tmp+=`
                <div class="form-check">
                <input class="form-check-input was-validated" name="${kulcs+"/"+Sor.counter}" ${elem.sus_id==element?"checked":""} value="${element}" ${urlap.attrMeghatarozo(Sor.inputLista[kulcs], kulcs)}>
                <label>${ element}</label>
                </div>`
        });
        return tmp
    }

    #torolEsemeny(){
        window.dispatchEvent(new CustomEvent("torol", {detail:this.$elem.id}))
    }
    #kuldesEsemeny(){
        let tmp={id: this.$elem.id}
        $(this.$sorElem).find("td > input").toArray().forEach(elem=>{
            tmp[elem.name]=$(elem).val()
        })
        $(this.$sorElem).find(".inputGroup").toArray().forEach(elem =>{
            let xd=[]
            $(elem).find(".form-check > input:checked").toArray().forEach(inputok=>{
                xd.push($(inputok).val())
            })
            // console.log((this.$sorElem).find(".inputGroup > .form-check > input:checked").eq(0).attr("name"));
            tmp[(this.$sorElem).find(".inputGroup > .form-check > input:checked").eq(0).attr("name").split("/")[0]] = xd.toString()
        })
        window.dispatchEvent(new CustomEvent("kuldes", {detail:tmp}))
    }
    #modositEsemeny(){
        window.dispatchEvent(new CustomEvent("modosit", {detail:this.index}))
    }
}


export default Sor