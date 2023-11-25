class Sor{
    constructor(elem, szuloElem, index){
        this.$elem=elem
        this.$szuloElem=szuloElem
        this.index=index
        
        this.$szuloElem.append("<tr></tr>")
        this.$sorElem=this.$szuloElem.children("tr:last-child")
        this.#sor()
    }

    esemenyHozzaad() {
        this.$sorElem.children(".kuldes").on("click", () => {
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
            if (Object.hasOwnProperty.call(this.$elem, kulcs)) {
                if(!(kulcs == "id" || kulcs == "created_at" || kulcs == "updated_at"))
                    tmp+= `<td><input type="text"></td>`
                else
                    tmp += `<td>${this.$elem[kulcs]}</td>`             
            }
        }
        tmp+=`<td class="kuldes">✔💨</td><td class="megse">❌💨</td><td class="torol">🗑💨</td>`
        this.$sorElem.html(tmp)
        this.esemenyHozzaad()
    }

    #torolEsemeny(){
        window.dispatchEvent(new CustomEvent("torol", {detail:this.$elem.id}))
    }
    #kuldesEsemeny(){
        window.dispatchEvent(new CustomEvent("kuldes", {detail:{id: this.$elem.id, nev: this.$sorElem.children("td").eq(1).children("input").eq(0).val(), szul: this.$sorElem.children("td").eq(2).children("input").eq(0).val()}}))
    }
    #modositEsemeny(){
        window.dispatchEvent(new CustomEvent("modosit", {detail:this.index}))
    }
}


export default Sor